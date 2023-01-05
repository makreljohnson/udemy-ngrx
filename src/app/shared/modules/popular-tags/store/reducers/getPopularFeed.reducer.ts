import {PopularTagsStateInterface} from '@shared/modules/popular-tags/types/popularTags.interface';
import {createReducer, on} from '@ngrx/store';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from '@shared/modules/popular-tags/store/actions/getPopularTags.action';

const initialState: PopularTagsStateInterface = {
	isLoading: false,
	error: null,
	data: null
};

export const popularTagsReducer = createReducer(
	initialState,
	on(getPopularTagsAction, (state): PopularTagsStateInterface => ({
		...state,
		isLoading: true
	})),
	on(getPopularTagsSuccessAction, (state, action): PopularTagsStateInterface => ({
		...state,
		isLoading: false,
		data: action.popularTags
	})),
	on(getPopularTagsFailureAction, (state): PopularTagsStateInterface => ({
		...state,
		isLoading: false
	})),
);
