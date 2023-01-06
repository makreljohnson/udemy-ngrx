import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {RouterModule} from '@angular/router';
import {ArticleComponent} from './components/article/article.component';
import {ArticleService} from '@shared/services/article.service';
import {GetArticleEffect} from '@article/store/getArticle.effects';
import {articleReducer} from '@article/store/article.reducers';

const routes = [
	{
		path: 'articles/:slug',
		component: ArticleComponent
	}
];
/* "cannot match any routes" - check that it's registered in the app-module? */

@NgModule({
	declarations: [
		ArticleComponent
	],
	imports: [
		CommonModule,
		EffectsModule.forFeature([GetArticleEffect]),
		StoreModule.forFeature('article', articleReducer),
		RouterModule.forChild(routes),
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
