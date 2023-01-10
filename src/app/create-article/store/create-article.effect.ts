import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap, tap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {CreateArticleService} from '@createArticle/services/create-article.service';
import {createArticleAction, createArticleFailureAction, createArticleSuccessAction} from '@createArticle/store/article.action.';
import {ArticleInterface} from '@article/types/article.interface';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class CreateArticleEffect {
	createArticle$ = createEffect(() =>
		this.actions$.pipe(
			ofType(createArticleAction),
			switchMap(({articleInput}) => {
				return this.createArticleSvc.createArticle(articleInput).pipe(
					map((article: ArticleInterface) => {
						return createArticleSuccessAction({article});
					}),
					catchError((errorResponse: HttpErrorResponse) => {
						/* NOTE: you need to use of() in catchError
						because inside a map is non-observable territory */
						return of(
							createArticleFailureAction({errors: errorResponse.error.errors})
						);
					})
				);
			})
		)
	);

	redirectAfterCreate$ = createEffect(() =>
			this.actions$.pipe(
				ofType(createArticleSuccessAction),
				tap(({article}) => {
					this.router.navigate(['/articles', article.slug]);
				})
			),
		/*  NOTE:  {dispatch: false} means don't trigger a dispatch which creates endless loop */
		{dispatch: false}
	);


	constructor(private actions$: Actions,
	            private createArticleSvc: CreateArticleService,
	            private router: Router) {
	}
}
