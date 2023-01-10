import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '@shared/types/appState.interface';
import {CreateArticleStateInterface} from '@createArticle/types/create-article-state.interface';

export const createArticleFeatureSelector = createFeatureSelector<AppStateInterface,
	CreateArticleStateInterface>('createArticle');

export const isSubmittingSelector = createSelector(
	createArticleFeatureSelector,
	(createArticleState: CreateArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
	createArticleFeatureSelector,
	(createArticleState: CreateArticleStateInterface) => createArticleState.validationErrors
);
