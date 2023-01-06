import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {isLoggedInSelector} from '@auth/store/selectors';

@Component({
	selector: 'mc-feed-toggler',
	templateUrl: './feed-toggler.component.html'
})
export class FeedTogglerComponent implements OnInit {
	@Input('tagName') tagNameProps: string;

	isLoggedIn$: Observable<boolean>;

	constructor(private store: Store) {
	}

	ngOnInit(): void {
		this.initializeValues();
	}

	initializeValues() {
		/* the way to grab data from the global store - simple as that */
		this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
	}

}
