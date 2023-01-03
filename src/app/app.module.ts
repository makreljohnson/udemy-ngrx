import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from 'src/app/app-routing.module';
import {AppComponent} from 'src/app/app.component';
import {AuthModule} from 'src/app/auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from 'src/environments/environment';
import {EffectsModule} from '@ngrx/effects';
import {TopBarModule} from 'src/app/shared/modules/top-bar/top-bar.module';
import {AuthInterceptorService} from 'src/app/shared/services/auth-interceptor.service';
import {PersistenceService} from 'src/app/shared/services/persistence.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {GlobalFeedModule} from 'src/app/shared/modules/global-feed/global-feed.module';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		AuthModule,
		TopBarModule,
		GlobalFeedModule,
		StoreModule.forRoot({router: routerReducer}, {}),
		StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
		EffectsModule.forRoot([]),
		StoreRouterConnectingModule.forRoot() /*Connects StoreModule to Angular Router*/
	],
	providers: [
		PersistenceService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
