// Angular libs
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

// Components
import {Lazy} from './components/lazy.component'

// Module
@NgModule({
  declarations: [Lazy],
  imports: [
    RouterModule.forChild([
      { path: '', component: Lazy, pathMatch: 'full'}
    ])
  ]
})

export class LazyModule {}
