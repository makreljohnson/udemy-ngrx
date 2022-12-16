import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AuthService} from '../../services/auth.services';
import {registerAction} from '../../store/actions/register.action';
import {isSubmittingSelector, validationErrorsSelector} from '../../store/actions/selectors';
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface';
import {RegisterRequestInterface} from '../../types/registerRequest.interface';
import {BackendErrorsInterface} from '../../types/backendErrors.interface';

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
		// console.log(this.form.value);

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
		/* 
		pipe: why - allows multiple functions to process on the store returning the processed value (withour modifying the state)
		select: why - it's a store function for getting the bit of state you want: select([MYSELECTOR]])
		pipe is also good for tree shaking
		*/
		this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
		this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
	}
} 
