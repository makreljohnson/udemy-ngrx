import {CreateArticleStateInterface} from '@createArticle/types/create-article-state.interface';
import {createReducer, on} from '@ngrx/store';
import {createArticleAction, createArticleFailureAction, createArticleSuccessAction} from '@createArticle/store/article.action.';

const initialState: CreateArticleStateInterface = {
	isSubmitting: false,
	validationErrors: null
};

export const createArticleReducer = createReducer(
	initialState,
	on(
		createArticleAction,
		(state): CreateArticleStateInterface => ({
			...state,
			isSubmitting: true
		})
	),
	on(
		createArticleSuccessAction,
		(state): CreateArticleStateInterface => ({
			...state,
			isSubmitting: false
		})
	), on(
		createArticleFailureAction,
		(state, action): CreateArticleStateInterface => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors
		})
	),
);
