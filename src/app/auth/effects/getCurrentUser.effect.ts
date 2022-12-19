import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {AuthService} from 'src/app/auth/services/auth.services';
import {HttpErrorResponse} from '@angular/common/http';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from 'src/app/auth/store/actions/getCurrenuser.action';
import {PersistenceService} from '../../shared/services/persistence.service';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class GetCurrentUserEffect {
	getCurrentUser$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getCurrentUserAction),
			switchMap(() => {
				const token = this.percyService.get('acessToken');

				/* if this fails return failure and stop processing */
				if (!token) {
					return of(getCurrentUserFailureAction());
				}

				return this.authService.getCurrentUser().pipe(
					map((currentUser: CurrentUserInterface) => {
						return getCurrentUserSuccessAction({currentUser});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/*	note: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(getCurrentUserFailureAction());

						/*NOTE: not using the () on getCurrentUserFailureAction() could result in this error:
						* > Effect "GetCurrentUserEffect.getCurrentUser$" dispatched an invalid action: undefined
						* > Dispatch expected an object, instead it received a function.
						* > If you're using the createAction function, make sure to invoke the function
						* > before dispatching the action. For example, someAction should be someAction().
						*/
					})
				);
			})
		)
	);

	constructor(private actions$: Actions,
							private authService: AuthService,
							private percyService: PersistenceService
	) {
	}
}
