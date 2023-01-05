import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map, tap} from 'rxjs';
import {registerAction, registerFailureAction, registerSuccessAction} from '@auth/store/actions/register.action';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {AuthService} from '@auth/services/auth.services';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from '@shared/services/persistence.service';
import {Router} from '@angular/router';

@Injectable()
export class RegisterEffect {
	register$ = createEffect(() =>
		this.actions$.pipe(
			ofType(registerAction),
			switchMap(({request}) => {
				return this.authService.register(request).pipe(
					map((currentUser: CurrentUserInterface) => {
						this.persistenceSvc.set('accessToken', currentUser.token);
						/* store token for local storage? No - not all that safe. */
						return registerSuccessAction({currentUser});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/*	note: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(registerFailureAction({errors: errorResponse.error.errors}));
					})
				);
			})
		)
	);

	redirectAfterSubmit$ = createEffect(() =>
		this.actions$.pipe(
			ofType(registerSuccessAction),
			tap(() => {
				/* tap doesn't need to return like the maps */
				this.router.navigateByUrl('/');
			})
		),
		/* options - dispatch false means don't dispatch and create endless loop */
		{dispatch:false}
	);


	constructor(private actions$: Actions, private authService: AuthService,
							private persistenceSvc: PersistenceService, private router: Router) {
	}
}
