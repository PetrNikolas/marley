// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// ------------------------------------------------------------------------------
// Import Modules
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './features/welcome/pages/welcome.component';
import { ContactComponent } from './features/contact/pages/contact.component';


// ------------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
export const ROUTES: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: './features/contact/contact.module#ContactModule' }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
