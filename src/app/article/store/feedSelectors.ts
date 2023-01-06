import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppStateInterface} from '@shared/types/appState.interface';
import {ArticleStateInterface} from '@article/types/articleState.interface';

export const articleFeatureSelector = createFeatureSelector<
	AppStateInterface,
	ArticleStateInterface
	>('feed')

export const isLoadingSelector = createSelector(
	articleFeatureSelector,
	(articleState: ArticleStateInterface) => articleState.isLoading
)

export const errorSelector = createSelector(
	articleFeatureSelector,
	(articleState: ArticleStateInterface) => articleState.error
)

export const feedSelector = createSelector(
	articleFeatureSelector,
	(articleState: ArticleStateInterface) => articleState.data
)
