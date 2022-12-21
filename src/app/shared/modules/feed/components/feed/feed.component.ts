import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {getFeedAction} from '../../store/actions/getFeed.action';
import {GetFeedResponseInterface} from '../../types/getFeedResponse.interface';
import {Observable} from 'rxjs';
import {errorSelector, feedSelector, isLoadingSelector} from '../../store/selectors/selectors';

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

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		/*this.store.dispatch(
			getFeedAction({url: this.apiURLProps})
		);*/
		this.initializeValues();
		this.fetchData();
	}

	initializeValues() {
		this.feed$ = this.store.pipe(select(feedSelector));
		this.error$ = this.store.pipe(select(errorSelector));
		this.isLoading$ = this.store.pipe(select(isLoadingSelector));
	}

	fetchData() {
		this.store.dispatch(
			getFeedAction({url: this.apiURLProps})
		);
	}

}
