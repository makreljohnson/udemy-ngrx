import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of, switchMap, map, tap} from 'rxjs';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {AuthService} from '@auth/services/auth.services';
import {HttpErrorResponse} from '@angular/common/http';
import {PersistenceService} from '@shared/services/persistence.service';
import {loginAction, loginFailureAction, loginSuccessAction} from '@auth/store/login.action';

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
						/* store token for local storage? No - not best practice. */
						return loginSuccessAction({currentUser});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/* NOTE: you need to use of() in catchError
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
		/*  NOTE:  {dispatch: false} means don't trigger a dispatch and create endless loop */
		{dispatch: false}
	);


	constructor(private actions$: Actions,
							private authService: AuthService,
							private persistenceSvc: PersistenceService,
							private router: Router) {
	}
}
