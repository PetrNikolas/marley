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
// Import custom preload strategy
// ------------------------------------------------------------------------------
import { SelectivePreloadingStrategy } from "./preloading-strategy";

// -----------------------------------------------------------------------------
// Route Configuration
// ------------------------------------------------------------------------------
const routes: Routes = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: 'contact', loadChildren: 'app/features/contact/contact.module#ContactModule', data: { preload: true } }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    enableTracing: true, // <-- debugging purposes only
    preloadingStrategy: SelectivePreloadingStrategy,
  })],
  providers: [
    SelectivePreloadingStrategy
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
