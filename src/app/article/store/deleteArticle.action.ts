import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './actionTypes';
import {ArticleInterface} from '../types/article.interface';

/*
* we select the article by slug value (instead of an ID)
* ex: "We-need-to-bypass-the-redundant-RAM-pixel!-120863"
*/
export const deleteArticleAction = createAction(
	ActionTypes.DELETE_ARTICLE,
	props<{slug:string}>()
)

/*
* what we get is an empty object so no props
*/
export const deleteArticleSuccessAction = createAction(
	ActionTypes.DELETE_ARTICLE_SUCCESS
)
/*
nothing specified here
 */
export const deleteArticleFailureAction = createAction(
	ActionTypes.DELETE_ARTICLE_FAILURE
)
