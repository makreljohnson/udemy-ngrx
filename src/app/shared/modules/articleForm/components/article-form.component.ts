import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ArticleInputInterface} from '@shared/types/article-input';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
	selector: 'mc-article-form',
	templateUrl: './article-form.component.html',
	styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {
	/*
	* We use Inputs here to keep the for stateless and dumb.
	* All values, status and errors are passed in from the parent.
	*/
	@Input('initialValues') initialValuesProps: ArticleInputInterface;
	@Input('isSubmitting') isSubmittingProps: boolean;
	@Input('errors') errorsProps: BackendErrorsInterface | null;

	@Output('articleSubmit') articleSubmitEvent = new EventEmitter<ArticleInputInterface>();

	form: FormGroup;

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.initializeForm();
	}

	initializeForm() {
		this.form = this.fb.group({
			title: this.initialValuesProps.title,
			description: this.initialValuesProps.description,
			body: this.initialValuesProps.body,
			tagList: this.initialValuesProps.tagList.join(' ') /* array to string*/
		});
	}

	onSubmit(): void {
		this.articleSubmitEvent.emit(this.form.value);
	}
}
