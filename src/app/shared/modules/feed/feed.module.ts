import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/getFeed.effects';
import {StoreModule} from '@ngrx/store';
import {feedReducer} from 'src/app/shared/modules/feed/store/reducers/feed.reducers';
import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component';
import {RouterModule} from '@angular/router';
import {BannerModule} from 'src/app/shared/modules/banner/banner.module';
import {LoadingModule} from '../loading/loading.module';
import {ErrorMessageModule} from '../errorMessage/errorMessage.module';
import {PagerModule} from '../pager/pager.module';

@NgModule({
	declarations: [
		FeedComponent
	],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetFeedEffect]),
		StoreModule.forFeature('feed', feedReducer),
		RouterModule,
		BannerModule,
		LoadingModule,
		ErrorMessageModule,
		PagerModule
	],
	exports: [
		FeedComponent
	],
	providers: [
		FeedService
	]
})
export class FeedModule {
}
