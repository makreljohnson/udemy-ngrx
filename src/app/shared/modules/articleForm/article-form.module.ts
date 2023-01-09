import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleFormComponent} from '@shared/modules/articleForm/components/article-form.component';
import {BackendErrorMessagesModule} from '@backend-error-messages/backend-error-messages.module';
import {ReactiveFormsModule} from '@angular/forms';

/* NOTE: ROUTER ALERT!
* IMPORT THIS MODULE BEFORE SHARED ARTICLE MODULE IN APP.MODULE
* BECAUSE {path:' articles/:slug'} WILL OVERRIDE path: 'articles/new' AND
* ALWAYS GO TO path: 'articles/new'.
*
* SOMETIMES ROUTES ARE AGGREGATED IN APP.MODULE WHERE ORDER IS MORE APPARENT
* */

@NgModule({
	declarations: [
		ArticleFormComponent
	],
	imports: [
		CommonModule,
		BackendErrorMessagesModule,
		ReactiveFormsModule
	],
	exports: [
		ArticleFormComponent
	],
	providers: []
})
export class ArticleFormModule {
}

