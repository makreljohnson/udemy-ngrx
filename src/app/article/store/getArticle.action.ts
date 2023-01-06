import {createAction, props} from '@ngrx/store';
import {ActionTypes} from './actionTypes';
import {ArticleInterface} from '../types/article.interface';

/*
* we select the article by slug value (instead of an ID)
* ex: "We-need-to-bypass-the-redundant-RAM-pixel!-120863"
*/
export const getArticleAction = createAction(
	ActionTypes.GET_ARTICLE,
	props<{slug:string}>()
)

/*
* what we get is an article of type ArticleInterface
*/
export const getArticleSuccessAction = createAction(
	ActionTypes.GET_ARTICLE_SUCCESS,
	props<{article:ArticleInterface}>()
)
/*
nothing specified here
 */
export const getArticleFailureAction = createAction(
	ActionTypes.GET_ARTICLE_FAILURE
)
