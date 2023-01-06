import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {registerAction} from '@auth/store/register.action';
import {isSubmittingSelector, validationErrorsSelector} from '@auth/store/selectors';
import {RegisterRequestInterface} from '@auth/types/registerRequest.interface';
import {BackendErrorsInterface} from '@shared/types/backendErrors.interface';

@Component({
	selector: 'mc-register-component',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;
	isSubmitting$: Observable<boolean>;
	backendErrors$: Observable<BackendErrorsInterface | null>;

	constructor(
		private fb: FormBuilder,
		private store: Store,
	) {
	}

	ngOnInit(): void {
		this.intializeForm();
		this.initializeValues();
	}

	onSubmit(): void {
		/* we use request for the const and in the dispatch because registerAction
		is looking for request as a property in the props when we created the action */
		const request: RegisterRequestInterface = {
			user: this.form.value
		};

		this.store.dispatch(registerAction({request}));

	}

	intializeForm(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	initializeValues(): void {
		/*  NOTE:
		pipe: why - allows multiple functions to process on the store returning the processed value (withour modifying the state)
		select: why - it's a built-in store function for getting the bit of state you want: select([MYSELECTOR]])
		pipe is also good for tree shaking
		*/
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
		this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
	}
} 
