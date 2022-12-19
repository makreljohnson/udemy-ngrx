import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from 'src/app/auth/components/register/register.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {authReducer} from 'src/app/auth/store/reducers/reducers';
import {AuthService} from 'src/app/auth/services/auth.services';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from 'src/app/auth/effects/register.effect';
import {BackendErrorMessagesModule} from 'src/app/shared/modules/backend-error-messages/backend-error-messages.module';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import { LoginComponent } from 'src/app/auth/components/login/login.component';
import {LoginEffect} from 'src/app/auth/effects/login.effect';

const routes = [
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: 'login',
		component: LoginComponent
	}
];

/*RouterModule.forChild(routes) lets us compartmentalize the auth module
and pass routes up to the app-routing-module */
@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		StoreModule.forFeature('auth', authReducer),
		EffectsModule.forFeature([RegisterEffect, LoginEffect]),
		BackendErrorMessagesModule
	],
	declarations: [RegisterComponent, LoginComponent],
	providers: [AuthService, PersistenceService]
})
export class AuthModule {
}


