import {createReducer, on} from '@ngrx/store';
import {routerNavigationAction} from '@ngrx/router-store';
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from '@article/store/getArticle.action';

class ArticleStateInterface {
}

const initialState: ArticleStateInterface = {
	isLoading: false,
	data: null,
	error: null
};

export const articleReducer = createReducer(
	initialState,
	on(
		getArticleAction,
		(state): ArticleStateInterface => ({
			...state,
			isLoading: true
		})
	),
	on(
		getArticleSuccessAction,
		(state, action): ArticleStateInterface => ({
			...state,
			isLoading: false,
			data: action.article
		})
	),
	on(
		getArticleFailureAction,
		(state): ArticleStateInterface => ({
			...state,
			isLoading: false
		})
	), on(
		routerNavigationAction,
		(): ArticleStateInterface => initialState
	)
);
/* NOTE:
During navigation, before any guards or resolvers run,
the router will dispatch a ROUTER_NAVIGATION action.
https://ngrx.io/guide/router-store/actions
When we navigate, we empty the state completely using initialState
*/
