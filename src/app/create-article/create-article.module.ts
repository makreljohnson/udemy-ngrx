import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateArticleComponent} from './components/create-article.component';
import {RouterModule} from '@angular/router';
import {ArticleModule} from '@article/article.module';
import {ArticleFormModule} from '@shared/modules/articleForm/article-form.module';
import {CreateArticleService} from './services/create-article.service';

/* NOTE: ROUTER ALERT!
* IMPORT THIS MODULE BEFORE SHARED ARTICLE MODULE IN APP.MODULE
* BECAUSE {path:' articles/:slug'} WILL OVERRIDE path: 'articles/new' AND
* ALWAYS GO TO path: 'articles/new'.
*
* SOMETIMES ROUTES ARE AGGREGATED IN APP.MODULE WHERE ORDER IS MORE APPARENT
* */
const routes = [
	{
		path: 'articles/new',
		component: CreateArticleComponent
	}
];

@NgModule({
	declarations: [
		CreateArticleComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ArticleFormModule,
	],
	exports: [
		CreateArticleComponent
	],
	providers: [
		CreateArticleService
	]
})
export class CreateArticleModule {
}

