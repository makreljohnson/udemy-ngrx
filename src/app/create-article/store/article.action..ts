import {createAction, props} from '@ngrx/store';
import {ArticleInputInterface} from '@shared/types/article-input';
import {ActionTypes} from '@createArticle/store/actionTypes';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';
import {ArticleInterface} from '@article/types/article.interface';

export const createArticleAction = createAction(
	ActionTypes.CREATE_ARTICLE,
	props<{ articleInput: ArticleInputInterface }>()
);

export const createArticleSuccessAction = createAction(
	ActionTypes.CREATE_ARTICLE_SUCCESS,
	props<{ article: ArticleInterface }>()
);

export const createArticleFailureAction = createAction(
	ActionTypes.CREATE_ARTICLE_FAILURE,
	props<{ errors: BackendErrorsInterface }>()
);
