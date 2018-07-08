// ------------------------------------------------------------------------------
// Import Angular libs
// ------------------------------------------------------------------------------
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ------------------------------------------------------------------------------
// Import components/pages
// ------------------------------------------------------------------------------
import { WelcomeComponent } from './features/welcome/pages/welcome.component';
import { ContactComponent } from './features/contact/pages/contact.component';

// ------------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: './features/contact/contact.module#ContactModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
