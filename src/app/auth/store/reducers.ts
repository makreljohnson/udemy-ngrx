import {AuthStateInterface} from '../types/authState.interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction} from 'src/app/auth/store/actions';

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
		})));

/*
Note: The exported reducer function is no longer required if you use the default
Ivy AOT compiler (or JIT). It is only necessary with the View Engine AOT compiler
as function calls are not supported there.

export function reducers(state: AuthStateInterface, action: Action){
	return authReducer(state, action);
}
*/
