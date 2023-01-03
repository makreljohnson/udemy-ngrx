import {Component, Input, OnInit} from '@angular/core';
import {PopularTagType} from 'src/app/shared/types/popularTag.type';

@Component({
	selector: 'mc-tag-list',
	templateUrl: './tag-list.component.html',
	styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
	/*using a type (PopularTagType) here helps when using the component multiple places */
	@Input('tags') tagsProps: PopularTagType[];

	constructor() {
	}

	ngOnInit(): void {
	}

}