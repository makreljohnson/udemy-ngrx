import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {GetFeedResponseInterface} from 'src/app/shared/modules/feed/types/getFeedResponse.interface';
import {Observable} from 'rxjs';
import {errorSelector, feedSelector, isLoadingSelector} from 'src/app/shared/modules/feed/store/selectors/selectors';
import {environment} from 'src/environments/environment';
import {Router} from '@angular/router';

@Component({
	selector: 'mc-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
	@Input('apiUrl') apiURLProps: string;

	feed$: Observable<GetFeedResponseInterface | null>;
	error$: Observable<string | null>;
	isLoading$: Observable<boolean>;
	limit: number = environment.limit;
	baseUrl: string = '';
	currentPage: number = 0;

	constructor(private store: Store, private router: Router) {
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

	}

	fetchData() {
		this.store.dispatch(
			getFeedAction({url: this.apiURLProps})
		);
	}

}
