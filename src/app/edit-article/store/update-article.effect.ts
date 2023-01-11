import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {ArticleInterface} from '@shared/types/article.interface';
import {updateArticleAction, updateArticleFailureAction, updateArticleSuccessAction} from '@edit-article/store/update-article.action.';
import {EditArticleService} from '@edit-article/services/edit-article.service';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class UpdateArticleEffect {
	updateArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(updateArticleAction),
			switchMap(({slug, articleInput}) => {
				return this.editArticleService.updateArticle(slug, articleInput).pipe(
					map((article: ArticleInterface) => {
						return updateArticleSuccessAction({article});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/* NOTE: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(
							updateArticleFailureAction({errors: errorResponse.error.errors})
						);
					})
				);
			})
		)
	);

	redirectAfterCreate$ = createEffect(() =>
			this.actions$.pipe(
				ofType(updateArticleSuccessAction),
				tap(({article}) => {
					this.router.navigate(['/articles', article.slug]);
				})
			),
		/*  NOTE:  {dispatch: false} means don't trigger a dispatch which creates endless loop */
		{dispatch: false}
	);


	constructor(private actions$: Actions,
	            private editArticleService: EditArticleService,
	            private router: Router) {
	}
}
