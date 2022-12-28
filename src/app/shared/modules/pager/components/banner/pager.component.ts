import {Component, Input, OnInit} from '@angular/core';
import {UtilsService} from '../../../../services/utils.service';


@Component({
	selector: 'mc-pager',
	templateUrl: './pager.component.html',
	styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
	@Input('total') totalProps = 0;
	@Input('limit') limitProps;
	@Input('url') urlProps;
	@Input('currentPage') currentPageProps;

	pagesCount: number;
	pages: number[];

	constructor(private utilsSvc: UtilsService) {
	}

	ngOnInit(): void {
		this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
		this.pages = this.utilsSvc.range(1,this.pagesCount);
	}

}
