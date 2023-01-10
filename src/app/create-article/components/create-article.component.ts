import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from '@shared/types/article-input';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector, validationErrorsSelector} from '@createArticle/store/create-article.selectors';
import {createArticleAction} from '@createArticle/store/article.action.';

@Component({
	selector: 'mc-create-article',
	templateUrl: './create-article.component.html',
	styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
	initialValues: ArticleInputInterface = {
		title: '',
		description: '',
		body: '',
		tagList: []
	};

	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
		this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));

	}

	onSubmit(articleInput: ArticleInputInterface) {
		this.store.dispatch(createArticleAction({articleInput}));
	}
}
