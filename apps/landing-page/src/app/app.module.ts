// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';

// ------------------------------------------------------------------------------
// Import Modules
// ------------------------------------------------------------------------------
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './modules/welcome/welcome.module';
import { ContactModule } from './modules/contact/contact.module';

// ------------------------------------------------------------------------------
// Import Routings
// ------------------------------------------------------------------------------
import { AppRoutingModule } from './app-routing.module';

// ------------------------------------------------------------------------------
// Import global error handling
// ------------------------------------------------------------------------------
import { GlobalErrorHandler } from './global-error-handler';

// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import { AppComponent } from './app.component';

// ------------------------------------------------------------------------------
// Import SSR components
// ------------------------------------------------------------------------------
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule.withServerTransition({ appId: 'marleyapp' }),
		NxModule.forRoot(),
		FormsModule,
		AppRoutingModule,
		SharedModule,
		CoreModule,
		WelcomeModule,
		ContactModule,
		HttpClientModule,
	],
	declarations: [AppComponent],
	providers: [{ provide: ErrorHandler, useClass: GlobalErrorHandler }],
	bootstrap: [AppComponent],
})
export class AppModule {
	constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
		if (!environment.production) {
			const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
			console.log(`Running ${platform} with appId=${appId}`);
		}
	}
}
