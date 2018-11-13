// ------------------------------------------------------------------------------
// Angular libs
// ------------------------------------------------------------------------------
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [CommonModule, HttpClientModule],
	providers: [],
})
export class CoreModule {
	/* Make sure CoreModule is imported only by one NgModule the AppModule */
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: CoreModule
	) {
		if (parentModule) {
			throw new Error('CoreModule is already loaded. Import only in AppModule');
		}
	}
}
