// Angular libs
import { NgModule } from '@angular/core';

// Services
import { ServerTransferState } from './server-transfer-state.service';
import { TransferState } from './transfer-state.service';

// Module
@NgModule({
  providers: [
    { provide: TransferState, useClass: ServerTransferState }
  ]
})

export class ServerTransferStateModule {}
