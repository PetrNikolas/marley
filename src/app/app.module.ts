// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// ------------------------------------------------------------------------------
// Import Modules
// ------------------------------------------------------------------------------
import { CoreModule } from './core/core.module';
import { StaticModule } from './static/static.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeModule } from './features/welcome/welcome.module';
import { ContactModule } from './features/contact/contact.module';


// ------------------------------------------------------------------------------
// Import Routings
// ------------------------------------------------------------------------------
import { ROUTING } from './app.routing';


// ------------------------------------------------------------------------------
// Import Components
// ------------------------------------------------------------------------------
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
    StaticModule,
    SharedModule,
    CoreModule,
    WelcomeModule,
    ContactModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
