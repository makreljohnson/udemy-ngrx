import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {BackendErrorsInterface} from 'src/app/auth/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector, validationErrorsSelector} from 'src/app/auth/store/selectors/selectors';
import {loginAction} from 'src/app/auth/store/actions/login.action';
import {LoginRequestInterface} from 'src/app/auth/types/loginRequest.interface';

@Component({
	selector: 'mc-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
		// console.log(this.form.value);

		/* we use request for the const and in the dispatch because registerAction
		is looking for request as a property in the props when we created the action */
		const request: LoginRequestInterface = {
			user: this.form.value
		};

		this.store.dispatch(loginAction({request}));

	}

	intializeForm(): void {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}

	initializeValues(): void {
		/*
		pipe: why - allows multiple functions to process on the store returning the processed value (withour modifying the state)
		select: why - it's a built-in store function for getting the bit of state you want: select([MYSELECTOR]])
		pipe is also good for tree shaking
		*/
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
		this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
	}
}
