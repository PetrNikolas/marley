import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Others libs
import { Ng2PageTransitionModule } from "ng2-page-transition";

// Routings
import { routing } from './app.routes';

// Components
import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Ng2PageTransitionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
