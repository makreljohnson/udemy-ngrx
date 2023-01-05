import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagerComponent} from './components/banner/pager.component';
import {UtilsService} from '@shared/services/utils.service';
import {RouterModule} from '@angular/router';


@NgModule({
	declarations: [
		PagerComponent
	],
	exports: [
		PagerComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	providers: [
		UtilsService
	]
})
export class PagerModule {
}
