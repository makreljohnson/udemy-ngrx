import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {ArticleService as SharedArticleService} from '@shared/services/article.service';
import {GetArticleEffect} from '@article/store/getArticle.effects';
import {articleReducer} from '@article/store/article.reducers';
import {TagListModule} from '@tag-list/tag-list.module';
import {ErrorMessageModule} from '@error-message/errorMessage.module';
import {LoadingModule} from '@loading/loading.module';
import {DeleteArticleEffect} from '@article/store/deleteArticle.effects';
import {ArticleService} from '@article/service/article.service';

const routes = [
	{
		path: 'articles/:slug',
		component: ArticleComponent
	}
];
/*  NOTE:
* "cannot match any routes" - check that it's registered in the app-module?
* */

@NgModule({
	declarations: [
		ArticleComponent
	],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
		StoreModule.forFeature('article', articleReducer),
		RouterModule.forChild(routes),
		TagListModule,
		ErrorMessageModule,
		LoadingModule,
	],
	exports: [
		ArticleComponent
	],
	providers: [
		SharedArticleService,
		ArticleService
	]
})
export class ArticleModule {
}
