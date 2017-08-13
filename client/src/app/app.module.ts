// Angular libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { Home } from './home/home.component';
import { Header } from './header/header.component';
import { Footer } from './footer/footer.component';

// Module
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  declarations: [ 
    AppComponent, 
    Home 
  ],
  exports: [ 
    AppComponent,
    Header,
    Footer 
  ]
})

export class AppModule {}
