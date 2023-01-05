import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@shared/modules/feed/store/actionTypes/actionTypes';
import {GetFeedResponseInterface} from '@shared/modules/feed/types/getFeedResponse.interface';

export const getFeedAction = createAction(
	ActionTypes.GET_FEED,
	props<{url:string}>()
)
export const getFeedSuccessAction = createAction(
	ActionTypes.GET_FEED_SUCCESS,
	props<{feed:GetFeedResponseInterface}>()
)
export const getFeedFailureAction = createAction(
	ActionTypes.GET_FEED_FAILURE
)
