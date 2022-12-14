import { AuthStateInterface } from '../../types/authState.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { registerAction, registerFailureAction, registerSuccessAction } from 'src/app/auth/store/actions/register.action';

const initalState: AuthStateInterface = {
	isSubmitting: false
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
	initalState,
	on(
		registerAction,
		(state): AuthStateInterface => ({
			...state,
			isSubmitting: true
		})),
	on(
		registerFailureAction,
		(state): AuthStateInterface => ({
			...state,
			isSubmitting: false
		})
	),
	on(
		registerSuccessAction,
		(state): AuthStateInterface => ({
			...state,
			isSubmitting: false
		})
	)
);

/*
Note: The exported reducer function is no longer required if you use the default
Ivy AOT compiler (or JIT). It is only necessary with the View Engine AOT compiler
as function calls are not supported there.

export function reducers(state: AuthStateInterface, action: Action){
	return authReducer(state, action);
}
*/
