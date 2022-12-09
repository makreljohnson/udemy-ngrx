import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {registerAction} from '../../store/actions';

@Component({
	selector: 'mc-register-component',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder, private store: Store) {
	}

	ngOnInit(): void {
		this.intializeForm();
	}

	onSubmit(): void {
		console.log(this.form.value);
		this.store.dispatch(registerAction(this.form.value));
	}

	intializeForm(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}
}
