import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {FeedModule} from '@shared/modules/feed/feed.module';
import {BannerModule} from '@shared/modules/banner/banner.module';
import {PopularTagsModule} from '@shared/modules/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '@shared/modules/feed-toggler/feed-toggler.module';
import {GlobalFeedComponent} from '@global-feed/components/global-feed/global-feed.component';

const routes = [
  {
    path:'',
    component: GlobalFeedComponent
  }
]

@NgModule({
  declarations: [
	  GlobalFeedComponent
  ],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		FeedModule,
		BannerModule,
		PopularTagsModule,
		FeedTogglerModule,
	]
})
export class GlobalFeedModule { }
