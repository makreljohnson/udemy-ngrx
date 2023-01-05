import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, of, switchMap} from 'rxjs';
import {FeedService} from '@shared/modules/feed/services/feed.service';
import {GetFeedResponseInterface} from '@shared/modules/feed/types/getFeedResponse.interface';
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from '@shared/modules/feed/store/actions/getFeed.action';

/* HEY - don't forget to register this in the module! */
@Injectable()
export class GetFeedEffect {
	constructor(private actions$: Actions, private feedSVC: FeedService) {
	}

	getFeed$ = createEffect(() =>
		this.actions$.pipe(
			ofType(getFeedAction),
			switchMap(({url}) => {
				/*note: url is projected from the action props */
				return this.feedSVC.getFeed(url).pipe(
					map((feed: GetFeedResponseInterface) => {
						return getFeedSuccessAction({feed});
					}),
					catchError(() => {
						return of(getFeedFailureAction());
					})
				);
			})
		)
	);
}
