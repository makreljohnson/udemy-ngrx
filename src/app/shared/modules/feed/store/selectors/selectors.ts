import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FeedStateInterface} from '@shared/modules/feed/types/feedsState.interface';
import {AppStateInterface} from '@auth/types/appState.interface';

export const feedFeatureSelector = createFeatureSelector<
	AppStateInterface,
	FeedStateInterface
	>('feed')

export const isLoadingSelector = createSelector(
	feedFeatureSelector,
	(feedState: FeedStateInterface) => feedState.isLoading
)

export const errorSelector = createSelector(
	feedFeatureSelector,
	(feedState: FeedStateInterface) => feedState.error
)

export const feedSelector = createSelector(
	feedFeatureSelector,
	(feedState: FeedStateInterface) => feedState.data
)
