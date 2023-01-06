import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {PopularTagsService} from '@popular-tags/services/popular-tags.service';
import {getPopularTagsAction, getPopularTagsFailureAction, getPopularTagsSuccessAction} from '@popular-tags/store/getPopularTags.action';
import {PopularTagType} from '@shared/types/popularTag.type';

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
						/* NOTE: the action props is the same [name] as
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
