// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// ------------------------------------------------------------------------------
// Import pages
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './pages/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }
