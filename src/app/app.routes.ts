// Imports
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Modules
import { WelcomeComponent } from './welcome/container/welcome.component';
import { ContactComponent } from './contact/container/contact.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
