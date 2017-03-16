// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ContactComponent } from './components/contact/contact.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
