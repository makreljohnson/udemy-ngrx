import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {ArticleService} from '@article/service/article.service';
import {deleteArticleAction, deleteArticleFailureAction, deleteArticleSuccessAction} from '@article/store/deleteArticle.action';
import {Router} from '@angular/router';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class DeleteArticleEffect {
	constructor(
		private actions$: Actions,
		private sharedArticleSVC: ArticleService,
		private router: Router
	) {
	}

	getArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(deleteArticleAction),
			switchMap(({slug}) => { /*we use slug to get our specific article */
				/*note: url is projected from the action props */
				return this.sharedArticleSVC.deleteArticle(slug).pipe(
					map(() => {
						return deleteArticleSuccessAction();
					}),
					catchError(() => {
						return of(deleteArticleFailureAction());
					})
				);
			})
		)
	);

	redirectAfterDelete = createEffect(() =>
			this.actions$.pipe(
				ofType(deleteArticleSuccessAction),
				tap(() => {
					/* tap doesn't need to return like the maps */
					this.router.navigateByUrl('/');
				})
			),
		/*  NOTE: dispatch false means don't dispatch and create endless loop */
		{dispatch: false}
	);
}
