// Angular libs
import { Component, OnInit } from '@angular/core';

// RxJS
import { Observable } from 'rxjs/Observable';

// Services
import { TransferState } from '../../utilities/transfer-state/transfer-state.service';

// Component
@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})

export class Home implements OnInit {

  public message: string;

  constructor(private transferState: TransferState) {}

  ngOnInit() {
    this.message = this.transferState.get('message');
  }
}
