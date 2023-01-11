import {Component, OnInit} from '@angular/core';
import {ArticleInputInterface} from '@shared/types/article-input';
import {filter, map, Observable} from 'rxjs';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {getArticleAction} from '@article/store/getArticle.action';
import {ActivatedRoute} from '@angular/router';
import {isSubmittingSelector, validationErrorsSelector, articleSelector, isLoadingSelector} from '@edit-article/store/edit-article.selectors';
import {updateArticleAction} from '@edit-article/store/update-article.action.';


@Component({
	selector: 'mc-edit-article',
	templateUrl: './edit-article.component.html',
	styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

	slug: string;
	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;
	isLoading$: Observable<boolean>;
	initialValues$: Observable<ArticleInputInterface>;

	constructor(private store: Store, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.initializeValues();
		this.fetchData();
	}

	initializeValues(): void {
		this.slug = this.route.snapshot.paramMap.get('slug');
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
		this.initialValues$ = this.store.pipe(
			select(articleSelector),
			filter(Boolean), /* filter(Boolean) essentially the same thing as filter(article => !!article) */
			map((article: ArticleInputInterface) => {
				return {
					title: article.title,
					description: article.description,
					body: article.body,
					tagList: article.tagList,
				};
			})
		);
	}

	fetchData(): void {
		this.store.dispatch(getArticleAction({slug: this.slug}));
	}

	onSubmit(articleInput: ArticleInputInterface) {
		this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}));
	}
}
