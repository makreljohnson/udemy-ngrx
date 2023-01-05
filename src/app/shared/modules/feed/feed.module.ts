import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedService} from '@shared/modules/feed/services/feed.service';
import {EffectsModule} from '@ngrx/effects';
import {GetFeedEffect} from '@shared/modules/feed/store/effects/getFeed.effects';
import {StoreModule} from '@ngrx/store';
import {feedReducer} from '@shared/modules/feed/store/reducers/feed.reducers';
import {FeedComponent} from '@shared/modules/feed/components/feed/feed.component';
import {RouterModule} from '@angular/router';
import {BannerModule} from '@shared/modules/banner/banner.module';
import {LoadingModule} from '@shared/modules/loading/loading.module';
import {ErrorMessageModule} from '@shared/modules/errorMessage/errorMessage.module';
import {PagerModule} from '@shared/modules/pager/pager.module';
import {TagListModule} from '@shared/modules/tag-list/tag-list.module';


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
		PagerModule,
		TagListModule
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
