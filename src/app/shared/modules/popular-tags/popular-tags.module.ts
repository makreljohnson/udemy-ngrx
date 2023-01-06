import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularTagsComponent} from '@shared/modules/popular-tags/components/popular-tags/popular-tags.component';
import {PopularTagsService} from '@shared/modules/popular-tags/services/popular-tags.service';
import {StoreModule} from '@ngrx/store';
import {popularTagsReducer} from '@popular-tags/store/getPopularFeed.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GetPopularTagsEffect} from '@popular-tags/store/getPopularTags.effects';
import {LoadingModule} from '@shared/modules/loading/loading.module';
import {ErrorMessageModule} from '@shared/modules/errorMessage/errorMessage.module';
import {RouterModule} from '@angular/router';


@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature('popularTags', popularTagsReducer),
		EffectsModule.forFeature([GetPopularTagsEffect]),
		LoadingModule,
		ErrorMessageModule,
		RouterModule
	],
	declarations: [
		PopularTagsComponent
	],
	exports: [
		PopularTagsComponent
	],
	providers: [
		PopularTagsService
	]
})
export class PopularTagsModule {
}
