import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from 'src/app/auth/components/register/register.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { authReducer } from 'src/app/auth/store/actions/reducers';
import { AuthService } from 'src/app/auth/services/auth.services';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { RegisterEffect } from 'src/app/auth/effects/register.effect';

const routes = [
	{
		path: 'register',
		component: RegisterComponent
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
		EffectsModule.forFeature([RegisterEffect])
	],
	declarations: [RegisterComponent],
	providers:[AuthService]
})
export class AuthModule {
}


