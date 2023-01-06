import {FeedStateInterface} from '@feed/types/feedsState.interface';
import {createReducer, on} from '@ngrx/store';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from '@feed/store/getFeed.action';
import {routerNavigationAction} from '@ngrx/router-store';

const initialState: FeedStateInterface = {
	isLoading: false,
	data: null,
	error: null
};

export const feedReducer = createReducer(
	initialState,
	on(
		getFeedAction,
		(state): FeedStateInterface => ({
			...state,
			isLoading: true
		})
	),
	on(
		getFeedSuccessAction,
		(state, action): FeedStateInterface => ({
			...state,
			isLoading: false,
			data: action.feed
		})
	),
	on(
		getFeedFailureAction,
		(state): FeedStateInterface => ({
			...state,
			isLoading: false
		})
	), on(
		/* NOTE: During navigation, before any guards or resolvers run,
		the router will dispatch a ROUTER_NAVIGATION action.
		https://ngrx.io/guide/router-store/actions

		When we navigate, we empty the state completely using initialState
		*/
		routerNavigationAction,
		(): FeedStateInterface => initialState
	),
);
