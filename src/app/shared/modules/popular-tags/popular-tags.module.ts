import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PopularTagsComponent} from 'src/app/shared/modules/popular-tags/components/popular-tags/popular-tags.component';
import {PopularTagsService} from 'src/app/shared/modules/popular-tags/services/popular-tags.service';
import {StoreModule} from '@ngrx/store';
import {popularTagsReducer} from 'src/app/shared/modules/popular-tags/store/reducers/getPopularFeed.reducer';
import {EffectsModule} from '@ngrx/effects';
import {GetPopularTagsEffect} from 'src/app/shared/modules/popular-tags/store/effects/getPopularTags.effects';
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module';
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module';
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
