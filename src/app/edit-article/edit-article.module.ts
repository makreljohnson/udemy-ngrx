import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ArticleFormModule} from '@shared/modules/articleForm/article-form.module';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {editArticleReducer} from '@edit-article/store/edit-article.reducer';
import {EditArticleComponent} from '@edit-article/components/edit-article.component';
import {UpdateArticleEffect} from '@edit-article/store/update-article.effect';
import {EditArticleService} from '@edit-article/services/edit-article.service';
import {ArticleService as SharedArticleService} from '@shared/services/article.service';
import {GetArticleEffect} from '@edit-article/store/get-article.effect';
import {LoadingModule} from '@loading/loading.module';

/* NOTE: ROUTER ALERT!
* IMPORT THIS MODULE BEFORE SHARED ARTICLE MODULE IN APP.MODULE
* BECAUSE {path:' articles/:slug'} WILL OVERRIDE path: 'articles/new' AND
* ALWAYS GO TO path: 'articles/new'.
*
* SOMETIMES ROUTES ARE AGGREGATED IN APP.MODULE WHERE ORDER IS MORE APPARENT
* */
const routes = [
	{
		path: 'articles/:slug/edit',
		component: EditArticleComponent
	}
];

@NgModule({
	declarations: [
		EditArticleComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ArticleFormModule,
		EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
		StoreModule.forFeature('editArticle', editArticleReducer),
		LoadingModule,
	],
	exports: [
		EditArticleComponent
	],
	providers: [
		EditArticleService, SharedArticleService
	]
})
export class EditArticleModule {
}

