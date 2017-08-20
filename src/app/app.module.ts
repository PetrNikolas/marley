import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routings
import { routing } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { WelcomeComponent } from './welcome/container/welcome.component';
import { ContactComponent } from './contact/container/contact.component';
import { FooterComponent } from './shared-components/footer/footer.component';

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
