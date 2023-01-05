import {createAction, props} from '@ngrx/store';
import {ActionTypes} from '@shared/modules/popular-tags/store/actionTypes/actionTypes';
import {PopularTagType} from '@shared/types/popularTag.type';

/*no props here because the URL is static in the service */
export const getPopularTagsAction = createAction(
	ActionTypes.GET_POPULAR_TAGS
)

export const getPopularTagsSuccessAction = createAction(
	ActionTypes.GET_POPULAR_TAGS_SUCCESS,
	props<{popularTags: PopularTagType[]}>()
)
export const getPopularTagsFailureAction = createAction(
	ActionTypes.GET_POPULAR_TAGS_FAILURE
)
