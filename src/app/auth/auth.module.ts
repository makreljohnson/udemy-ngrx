import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from 'src/app/auth/components/register/register.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {authReducer} from 'src/app/auth/store/reducers';

const routes = [
	{
		path: 'register',
		component: RegisterComponent
	}
];

/*RouterModule.forChild(routes) lets us compartmentalize the auth module
and pass routes up to the app-routing-module */
@NgModule({
	imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, StoreModule.forFeature('auth', authReducer)],
	declarations: [RegisterComponent]
})
export class AuthModule {
}


