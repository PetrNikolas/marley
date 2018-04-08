// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// ------------------------------------------------------------------------------
// Import pages
// ------------------------------------------------------------------------------
import { ContactComponent } from './pages/contact.component';


// ------------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
export const routes: Routes = [
  { path: 'contact', component: ContactComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
