import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeedTogglerComponent} from '@shared/modules/feed-toggler/components/feed-toggler/feed-toggler.component';
import {RouterModule} from '@angular/router';


@NgModule({
	declarations: [
		FeedTogglerComponent
	],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [
		FeedTogglerComponent
	],
	providers: []
})
export class FeedTogglerModule {
}
