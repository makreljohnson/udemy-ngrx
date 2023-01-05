import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {AppStateInterface} from '@auth/types/appState.interface';
import {getPopularTagsAction} from '@shared/modules/popular-tags/store/actions/getPopularTags.action';
import {Observable} from 'rxjs';
import {PopularTagType} from '@shared/types/popularTag.type';
import {errorSelector, isLoadingSelector, popularTagsSelector} from '@shared/modules/popular-tags/store/selectors/selectors';

@Component({
	selector: 'mc-popular-tags',
	templateUrl: './popular-tags.component.html'
})
export class PopularTagsComponent implements OnInit {
	popularTags$: Observable<PopularTagType[] | null>;
	isLoading$: Observable<boolean>;
	error$: Observable<string | null>;

	constructor(private store: Store<AppStateInterface>) {
	}

	ngOnInit(): void {
		this.initializeValues();
		this.fetchData();
	}

	fetchData(): void {
		this.store.dispatch(getPopularTagsAction());
	}

	initializeValues(): void{
		this.popularTags$ = this.store.pipe(select(popularTagsSelector))
		this.isLoading$ = this.store.pipe(select(isLoadingSelector))
		this.error$ = this.store.pipe(select(errorSelector))
	}
}
