import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from '@auth/components/register/register.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {authReducer} from '@auth/store/reducers/auth.reducers';
import {AuthService} from '@auth/services/auth.services';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {RegisterEffect} from '@auth/effects/register.effect';
import {BackendErrorMessagesModule} from '@shared/modules/backend-error-messages/backend-error-messages.module';
import {PersistenceService} from '@shared/services/persistence.service';
import {LoginComponent} from '@auth/components/login/login.component';
import {LoginEffect} from '@auth/effects/login.effect';
import {GetCurrentUserEffect} from '@auth/effects/getCurrentUser.effect';

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
		EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
		BackendErrorMessagesModule
	],
	declarations: [RegisterComponent, LoginComponent],
	providers: [AuthService, PersistenceService]
})
export class AuthModule {
}


