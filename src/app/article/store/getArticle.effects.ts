import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {ArticleService} from '@shared/services/article.service';
import {getArticleAction, getArticleFailureAction, getArticleSuccessAction} from './getArticle.action';
import {ArticleInterface} from '@shared/types/article.interface';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class GetArticleEffect {
	constructor(private actions$: Actions, private sharedArticleSVC: ArticleService) {
	}

	getArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getArticleAction),
			switchMap(({slug}) => { /*we use slug to get our specific article */
				/*note: url is projected from the action props */
				return this.sharedArticleSVC.getArticle(slug).pipe(
					map((article: ArticleInterface) => {
						return getArticleSuccessAction({article});
					}),
					catchError(() => {
						return of(getArticleFailureAction());
					})
				);
			})
		)
	);
}
