import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'mc-create-article',
	templateUrl: './create-article.component.html',
	styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
	initialValues = {
		title: 'Foo',
		description: 'Bar',
		body: 'baz',
		tagList: ['zim', 'dib', 'gaz']
	};

	constructor() {
	}

	ngOnInit(): void {
	}

	onSubmit(event: any) {
		console.log('event:', event);
	}
}
