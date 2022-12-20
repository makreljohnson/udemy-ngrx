import {AuthStateInterface} from 'src/app/auth/types/authState.interface';
import {createReducer, on} from '@ngrx/store';
import {registerAction, registerFailureAction, registerSuccessAction} from 'src/app/auth/store/actions/register.action';
import {loginAction, loginFailureAction, loginSuccessAction} from 'src/app/auth/store/actions/login.action';
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from '../actions/getCurrentuser.action';

const initialState: AuthStateInterface = {
	isSubmitting: false,
	currentUser: null,
	isLoggedIn: null,
	validationErrors: null,
	isLoading: null,
};

/*
* initialState - Provides a state value if the current state is undefined, as it is initially.
* on(
		featureActions.actionOne,
		featureActions.actionTwo,
		(state, { updatedValue }) => ({ ...state, prop: updatedValue })
	)
*/

export const authReducer = createReducer(
	initialState,
	on(
		registerAction,
		(state): AuthStateInterface => ({
			...state,
			isSubmitting: true,
			currentUser: null,
			isLoggedIn: null,
			validationErrors: null
		})),
	on(
		registerSuccessAction,
		(state, action): AuthStateInterface => ({
			...state,
			isSubmitting: false,
			currentUser: action.currentUser,
			isLoggedIn: null
		})
	),
	on(
		registerFailureAction,
		(state, action): AuthStateInterface => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors
		})
	),
	on(
		loginAction,
		(state): AuthStateInterface => ({
			...state,
			isSubmitting: true,
			validationErrors: null
		})),
	on(
		loginSuccessAction,
		(state, action): AuthStateInterface => ({
			...state,
			isSubmitting: false,
			currentUser: action.currentUser,
			isLoggedIn: true
		})
	),
	on(
		loginFailureAction,
		(state, action): AuthStateInterface => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors
		})
	),
	on(
		getCurrentUserAction,
		(state): AuthStateInterface => ({
			...state,
			isLoading: true
		})),
	on(
		getCurrentUserSuccessAction,
		(state, action): AuthStateInterface => ({
			...state,
			isLoading: false,
			isLoggedIn: true,
			currentUser: action.currentUser,
		})
	),
	on(
		getCurrentUserFailureAction,
		(state): AuthStateInterface => ({
			...state,
			isLoading: false,
			isLoggedIn: false,
			currentUser: null
		})
	)
);
/*
* NOTE - to get access to the action payload, you need to add action to the incoming data,
* right where state is brought in, THEREFORE (state) becomes (state, action)
*/

/*
* Note: The exported reducer function is no longer required if you use the default
* Ivy AOT compiler (or JIT). It is only necessary with the View Engine AOT compiler
* as function calls are not supported there.

export function reducers(state: AuthStateInterface, action: Action){
	return authReducer(state, action);
}
*/

