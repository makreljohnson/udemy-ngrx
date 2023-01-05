import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FeedModule} from '@shared/modules/feed/feed.module';
import {BannerModule} from '@shared/modules/banner/banner.module';
import {PopularTagsModule} from '@shared/modules/popular-tags/popular-tags.module';
import {FeedTogglerModule} from '@shared/modules/feed-toggler/feed-toggler.module';
import {YourFeedComponent} from '@shared/modules/your-feed/components/your-feed/your-feed.component';

const routes = [
  {
    path:'feed',
    component: YourFeedComponent
  }
]

@NgModule({
  declarations: [
    YourFeedComponent
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
export class YourFeedModule { }
