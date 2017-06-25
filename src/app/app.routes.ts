// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { ContactComponent } from './modules/contact/contact.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
