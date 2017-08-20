// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/container/welcome.component';
import { ContactComponent } from './contact/container/contact.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
