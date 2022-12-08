import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'mc-register-component',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	form: FormGroup;

	constructor(private fb: FormBuilder) {
	}

	ngOnInit(): void {
		this.intializeForm();
	}

	onSubmit():void{
		console.log(this.form)
	}
	intializeForm(): void {
		this.form = this.fb.group({
			username: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
		});
	}
}
