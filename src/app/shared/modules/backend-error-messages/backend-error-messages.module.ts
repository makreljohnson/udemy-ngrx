import {Input, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BackendErrorMessagesComponent} from './components/backEndErrorMessages/backend-error-messages.component';
import {BackendErrorsInterface} from '../../../auth/types/backendErrors.interface';


@NgModule({
	declarations: [
		BackendErrorMessagesComponent
	],
	exports: [
		BackendErrorMessagesComponent
	],
	imports: [
		CommonModule
	]
})
/*
* By re-exporting BackendErrorMessagesComponent, any other
* module that imports this SharedModule, gets access.
* Not doing this caused error with mc-backend-error-messages Input prop
* */
export class BackendErrorMessagesModule {
}
