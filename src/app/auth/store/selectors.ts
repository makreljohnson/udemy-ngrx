import {createSelector} from '@ngrx/store';
import {AppStateInterface} from '@shared/types/appState.interface';
import {AuthStateInterface} from '@auth/types/authState.interface';

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

/* NOTE: use this in components to get isSubmitting state
Using interfaces helps keep the type of state you're asking for clear.
ex: authState is an object with isSubmitting prop that is a bool
*/
export const isSubmittingSelector = createSelector(
	authFeatureSelector,
	(authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
	authFeatureSelector,
	(authState: AuthStateInterface) => authState.validationErrors
);

export const isLoggedInSelector = createSelector(
	authFeatureSelector,
	(authState: AuthStateInterface) => authState.isLoggedIn
);

export const isAnonymousSelector = createSelector(
	authFeatureSelector,
	(authState: AuthStateInterface) => authState.isLoggedIn === false
);

export const currentUserSelector = createSelector(
	authFeatureSelector,
	(authState: AuthStateInterface) => authState.currentUser
);
