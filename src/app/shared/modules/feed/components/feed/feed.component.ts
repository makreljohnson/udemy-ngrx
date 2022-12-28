import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {Observable, Subscription} from 'rxjs';
import {errorSelector, feedSelector, isLoadingSelector} from 'src/app/shared/modules/feed/store/selectors/selectors';
import {environment} from 'src/environments/environment';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
	@Input('apiUrl') apiURLProps: string;

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
		/*this.store.dispatch(
			getFeedAction({url: this.apiURLProps})
		);*/
		this.initializeValues();
		this.initializeListeners();
		this.fetchData();

	}

	initializeValues() {
		this.feed$ = this.store.pipe(select(feedSelector));
		this.error$ = this.store.pipe(select(errorSelector));
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
		this.baseUrl = this.router.url.split('?')[0];
		this.currentPage = 0;
	}

	initializeListeners(): void {
		/*Note: queryParamsSub variable is created so that it can be
		unsubscribed. | async in the template does it automatically */
		this.queryParamsSub = this.route.queryParams.subscribe(
			(params: Params) => {
				debugger
				this.currentPage = Number(params['page'] || '1');
			});

	}

	fetchData() {
		/* 1*10-10 = 0 and 2*10-10 = 10 and so on... */
		const offset = this.currentPage * this.limit - this.limit;

		this.store.dispatch(
			getFeedAction({url: this.apiURLProps})
		);
	}

	ngOnDestroy(): void {
		this.queryParamsSub.unsubscribe();
	}

}
