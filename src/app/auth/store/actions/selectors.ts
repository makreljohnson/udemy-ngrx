import { createSelector } from "@ngrx/store";
import { AppStateInterface } from "../../types/appState.interface";
import { AuthStateInterface } from "../../types/authState.interface";

export const authFeatureSelector = (state: AppStateInterface): AuthStateInterface => state.auth;

/* 
use this in components to get isSubmitting state 
Using interfaces helps keep the type of state you're asking for clear.
ex: authState is an object with isSubmitting prop taht is a bool 
*/
export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)