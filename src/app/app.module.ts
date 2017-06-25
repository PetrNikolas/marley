import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routings
import { routing } from './app.routes';

// Components
import { AppComponent } from './modules/app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

// Services 
import { HttpApiService } from './services/http-api.service';

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
    routing
  ],
  providers: [
    HttpApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
