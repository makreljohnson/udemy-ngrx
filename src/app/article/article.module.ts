import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {BannerModule} from '@shared/modules/banner/banner.module';
import {LoadingModule} from '@shared/modules/loading/loading.module';
import {ErrorMessageModule} from '@shared/modules/errorMessage/errorMessage.module';
import {PagerModule} from '@shared/modules/pager/pager.module';
import {TagListModule} from '@shared/modules/tag-list/tag-list.module';
import {ArticleComponent} from './components/article/article.component';
import {ArticleService} from '@shared/services/article.service';
import {GetArticleEffect} from '@article/store/getFeed.effects';
import {articleReducer} from '@article/store/article.reducers';


@NgModule({
	declarations: [
		ArticleComponent
	],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetArticleEffect]),
		StoreModule.forFeature('article', articleReducer),
		RouterModule,
		BannerModule,
		LoadingModule,
		ErrorMessageModule,
		PagerModule,
		TagListModule
	],
	exports: [
		ArticleComponent
	],
	providers: [
		ArticleService
	]
})
export class ArticleModule {
}
