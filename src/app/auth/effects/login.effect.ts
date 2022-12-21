import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map, tap} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {AuthService} from 'src/app/auth/services/auth.services';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {loginAction, loginFailureAction, loginSuccessAction} from 'src/app/auth/store/actions/login.action';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class LoginEffect {
	login$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loginAction),
			switchMap(({request}) => {
				return this.authService.login(request).pipe(
					map((currentUser: CurrentUserInterface) => {
						this.persistenceSvc.set('accessToken', currentUser.token);
						/* store token for local storage? No - not all that safe. */
						return loginSuccessAction({currentUser});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/*	note: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(loginFailureAction({errors: errorResponse.error.errors}));
					})
				);
			})
		)
	);

	redirectAfterSubmit$ = createEffect(() =>
			this.actions$.pipe(
				ofType(loginSuccessAction),
				tap(() => {
					/* tap doesn't need to return like the maps */
					this.router.navigateByUrl('/');
				})
			),
		/* options - {dispatch: false} means don't trigger a dispatch and create endless loop */
		{dispatch: false}
	);


	constructor(private actions$: Actions,
							private authService: AuthService,
							private persistenceSvc: PersistenceService,
							private router: Router) {
	}
}