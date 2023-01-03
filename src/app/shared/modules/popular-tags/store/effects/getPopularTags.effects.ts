import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {PopularTagsService} from 'src/app/shared/modules/popular-tags/services/popular-tags.service';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from '../actions/getPopularTags.action';
import {PopularTagType} from 'src/app/shared/types/popularTag.type';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class GetPopularTagsEffect {
	constructor(
		private actions$: Actions,
		private popularTagsSVC: PopularTagsService) {
	}

	getPopularTags$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getPopularTagsAction),
			switchMap(() => {
				return this.popularTagsSVC.getPopularTags().pipe(
					map((popularTags: PopularTagType[]) => {

						return getPopularTagsSuccessAction({popularTags});
						/* REMEMBER: the action props is the same [name] as
							return getPopularTagsSuccessAction({[name]})/
						 */
					}),
					catchError(() => {
						return of(getPopularTagsFailureAction());
					})
				);
			})
		)
	);
}
