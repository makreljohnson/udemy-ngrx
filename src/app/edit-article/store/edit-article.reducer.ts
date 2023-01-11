import {createReducer, on} from '@ngrx/store';
import {EditArticleStateInterface} from '@edit-article/types/edit-article-state.interface';
import {updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction} from '@edit-article/store/update-article.action.';
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from '@edit-article/store/get-article.action.';

const initialState: EditArticleStateInterface = {
	isLoading: false,
	article: null,
	isSubmitting: false,
	validationErrors: null
};

export const editArticleReducer = createReducer(
	initialState,
	on(
		updateArticleAction,
		(state): EditArticleStateInterface => ({
			...state,
			isSubmitting: true
		})
	),
	on(
		updateArticleSuccessAction,
		(state): EditArticleStateInterface => ({
			...state,
			isSubmitting: false
		})
	),
	on(
		updateArticleFailureAction,
		(state, action): EditArticleStateInterface => ({
			...state,
			isSubmitting: false,
			validationErrors: action.errors
		})
	),
	on(
		getArticleAction,
		(state): EditArticleStateInterface => ({
			...state,
			isLoading: true
		})
	),
	on(
		getArticleSuccessAction,
		(state, action): EditArticleStateInterface => ({
			...state,
			isLoading: false,
			article: action.article
		})
	),
	on(
		getArticleFailureAction,
		(state): EditArticleStateInterface => ({
			...state,
			isLoading: false
		})
	)
);
