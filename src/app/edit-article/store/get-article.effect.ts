import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ArticleService as SharedArticleService} from '@shared/services/article.service';
import {ArticleInterface} from '@shared/types/article.interface';
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from '@article/store/getArticle.action';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class GetArticleEffect {
	getArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getArticleAction),
			switchMap(({slug}) => {
				return this.sharedArticleService.getArticle(slug).pipe(
					map((article: ArticleInterface) => {
						return getArticleSuccessAction({article});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/* NOTE: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(
							getArticleFailureAction()
						);
					})
				);
			})
		)
	);

	constructor(
		private actions$: Actions,
		private sharedArticleService: SharedArticleService) {
	}
}
