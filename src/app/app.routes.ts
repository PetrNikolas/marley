// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// ------------------------------------------------------------------------------
// Import Modules
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './welcome/pages/welcome.component';
import { ContactComponent } from './contact/pages/contact.component';


// ------------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
export const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
