import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackendErrorMessagesComponent} from './components/backEndErrorMessages/backend-error-messages.component';
import {BackendErrorsInterface} from '../../../auth/types/backendErrors.interface';


@NgModule({
	declarations: [
		BackendErrorMessagesComponent
	],
	imports: [
		CommonModule
	]
})
export class BackendErrorMessagesModule {
}
