import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '@feed/store/getFeed.action';
import {GetFeedResponseInterface} from '@shared/modules/feed/types/getFeedResponse.interface';
import {Observable, Subscription} from 'rxjs';
import {errorSelector, feedSelector, isLoadingSelector} from '@feed/store/feedSelectors';
import {environment} from 'src/environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';
import queryString from 'query-string';

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
	@Input('apiUrl') apiUrlProps: string;

	feed$: Observable<GetFeedResponseInterface | null>;
	error$: Observable<string | null>;
	isLoading$: Observable<boolean>;
	limit: number = environment.limit;
	baseUrl: string = '';
	currentPage: number = 0;
	queryParamsSub: Subscription;

	constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.initializeValues();
		this.initializeListeners();
		this.fetchFeed();

	}

	initializeValues(): void {
		this.feed$ = this.store.pipe(select(feedSelector));
		this.error$ = this.store.pipe(select(errorSelector));
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.baseUrl = this.router.url.split('?')[0];
		this.currentPage = 0;
	}

	initializeListeners(): void {
		/* NOTE: a queryParamsSub variable is created so that it can be
		unsubscribed. when accessed in the template with async, it un-subs automatically */
		this.queryParamsSub = this.route.queryParams.subscribe(
			(params: Params) => {
				this.currentPage = Number(params['page'] || '1');
				this.fetchFeed()
			});

	}


	fetchFeed(): void {
		/* NOTE: 1*10-10 = 0 and 2*10-10 = 10 and so on... */
		const offset = this.currentPage * this.limit - this.limit;
		const parsedURL = queryString.parseUrl(this.apiUrlProps);
		const stringifiedParams = queryString.stringify({
			limit: this.limit,
			offset,
			...parsedURL.query
		});
		const apiUrlWithParams = `${parsedURL.url}?${stringifiedParams}`;
		this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
	}

	ngOnDestroy(): void {
		this.queryParamsSub.unsubscribe();
	}

}
