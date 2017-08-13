import { Component, OnInit } from '@angular/core';
import { TransferState } from '../utilities/transfer-state/transfer-state.service';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Component({
  selector: 'app-root',
  template: `
    <h1>Universal Demo using Angular</h1>
    <a routerLink="/">Home</a>
    <a routerLink="/lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.scss']
})
export class AppComponent implements OnInit {
  constructor(private cache: TransferState) { }

  ngOnInit() {
    // This is an example
    this.cache.set('message', 'Hello World');
  }
}
