import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {getArticleAction} from '@article/store/getArticle.action';

@Component({
	selector: 'mc-article',
	templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {
	slug: string;

	constructor(private store: Store, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.initializeValues();
		this.fetchData();
	}

	initializeValues(): void {
		this.slug = this.route.snapshot.paramMap.get('slug');
	}

	fetchData(): void {
		this.store.dispatch(getArticleAction({slug: this.slug}));
	}

}
