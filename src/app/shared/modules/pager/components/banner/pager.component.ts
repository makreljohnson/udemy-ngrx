import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'mc-pager',
	templateUrl: './pager.component.html',
	styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
	@Input('total') total = 0;
	@Input('limit') limit;
	@Input('url') url;
	@Input('currentPage') currentPage;

	constructor() {
	}

	ngOnInit(): void {
	}

}
