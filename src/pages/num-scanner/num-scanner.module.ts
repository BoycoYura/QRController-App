import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumScannerPage } from './num-scanner';

@NgModule({
  declarations: [
    NumScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(NumScannerPage),
  ],
})
export class NumScannerPageModule {}
