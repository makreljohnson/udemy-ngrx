import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {getArticleAction} from '@article/store/getArticle.action';
import {ArticleInterface} from '@article/types/article.interface';
import {combineLatest, map, Observable, Subscription} from 'rxjs';
import {articleSelector, errorSelector, isLoadingSelector} from '@article/store/articleSelectors';
import {currentUserSelector} from '@auth/store/selectors';
import {CurrentUserInterface} from '@shared/types/currentUser.interface';
import {deleteArticleAction, deleteArticleSuccessAction} from '@article/store/deleteArticle.action';

@Component({
	selector: 'mc-article',
	templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit, OnDestroy {
	slug: string;
	article: ArticleInterface;
	articleSubscription: Subscription;
	/* when you need a lot of props from a var,
	subscribe and don't use a stream w/ | async */

	error$: Observable<string | null>; /*from ArticleStateInterface*/
	isLoading$: Observable<boolean>; /*from ArticleStateInterface*/
	isAuthor$: Observable<boolean>;

	constructor(private store: Store, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.initializeValues();
		this.initializeListeners();
		this.fetchData();
	}

	initializeValues(): void {
		this.slug = this.route.snapshot.paramMap.get('slug');
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.error$ = this.store.pipe(select(errorSelector));

		/*here we need a combineLatest to get both the article
		and author data together and compare values */
		this.isAuthor$ = combineLatest(
			this.store.pipe(select(articleSelector)),
			this.store.pipe(select(currentUserSelector))
		).pipe(
			map(
				([article, currentUser]: [
						ArticleInterface | null,
						CurrentUserInterface | null
				]) => {
					if (!article || !currentUser) {
						return false;
					}
					return currentUser.username === article.author.username;
				})
		);
	}

	initializeListeners() {
		this.articleSubscription = this.store.pipe(select(articleSelector))
			.subscribe((article: ArticleInterface | null) => {
				this.article = article;
			});
	}

	fetchData(): void {
		this.store.dispatch(getArticleAction({slug: this.slug}));

	}

	deleteArticle():void{
		this.store.dispatch(deleteArticleAction({slug: this.slug}));
	}

	ngOnDestroy() {
		this.articleSubscription.unsubscribe();
	}
}
