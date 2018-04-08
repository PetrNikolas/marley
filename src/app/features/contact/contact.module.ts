// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


// ------------------------------------------------------------------------------
// Import pages
// ------------------------------------------------------------------------------
import { ContactComponent } from './pages/contact.component';


// ------------------------------------------------------------------------------
// Import Routings
// ------------------------------------------------------------------------------
import { routing } from './contact.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    ContactComponent
  ],
  providers: []
})
export class ContactModule { }
