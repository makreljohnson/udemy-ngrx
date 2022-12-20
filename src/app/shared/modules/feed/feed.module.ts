import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component';
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from './store/effects/getFeed.effects';
import {StoreModule} from '@ngrx/store';
import {feedReducer} from 'src/app/shared/modules/feed/store/reducers/feed.reducers';

@NgModule({
	declarations: [
		FeedComponent
	],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetFeedEffect]),
		StoreModule.forFeature('feed', feedReducer)
	],
	exports: [
		FeedComponent
	],
	providers: [
		FeedService
	]
})
export class FeedModule {}
