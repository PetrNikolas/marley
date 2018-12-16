// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, Inject, APP_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// ------------------------------------------------------------------------------
// Import componnets
// ------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';

// ------------------------------------------------------------------------------
// Import libs
// ------------------------------------------------------------------------------
import { UiShellModule } from '@shell/ui-shell';

// ------------------------------------------------------------------------------
// Import environments
// ------------------------------------------------------------------------------
import { environment } from '../environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, NxModule.forRoot(), UiShellModule],
	providers: [],
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
