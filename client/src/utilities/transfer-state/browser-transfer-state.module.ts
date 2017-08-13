// Angular libs
import { NgModule } from '@angular/core';

// Services
import { TransferState } from './transfer-state.service';

// Function
export function getTransferState(): TransferState {
  const transferState = new TransferState();
  transferState.initialize(window['TRANSFER_STATE'] || {});
  return transferState;
}

// Module
@NgModule({
  providers: [
    {
      provide: TransferState,
      useFactory: getTransferState
    }
  ]
})

export class BrowserTransferStateModule {}
