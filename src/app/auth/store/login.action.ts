import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './actionTypes';
import {LoginRequestInterface} from '@auth/types/loginRequest.interface';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';

/*NOTE: the props key dictates what you return this action - request, currentUser, errors */
export const loginAction = createAction(
	ActionTypes.LOGIN,
	props< {request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
	ActionTypes.LOGIN_SUCCESS,
	props< {currentUser: CurrentUserInterface}>()
)

export const loginFailureAction = createAction(
	ActionTypes.LOGIN_FAILURE,
	props< {errors: BackendErrorsInterface}>()
)
