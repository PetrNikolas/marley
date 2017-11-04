//------------------------------------------------------------------------------
// Import Angular libs
//------------------------------------------------------------------------------
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//------------------------------------------------------------------------------
// Import Modules
//------------------------------------------------------------------------------
import { WelcomeModule } from './welcome/welcome.module';
import { ContactModule } from './contact/contact.module';


//------------------------------------------------------------------------------
// Import Routings
//------------------------------------------------------------------------------
import { routing } from './app.routes';


//------------------------------------------------------------------------------
// Import Components
//------------------------------------------------------------------------------
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    WelcomeModule,
    ContactModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
