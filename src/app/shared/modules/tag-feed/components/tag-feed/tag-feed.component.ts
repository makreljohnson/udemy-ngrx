import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
	selector: 'mc-tag-feed',
	templateUrl: './tag-feed.component.html'
})
export class TagFeedComponent implements OnInit {
	apiUrl = '/articles';
	tagName: string;


	constructor(private route: ActivatedRoute) {
	}

	ngOnInit(): void {
		this.tagName = this.route.snapshot.paramMap.get('slug');
		this.apiUrl = `/articles?tag=${this.tagName}`
	}

}
