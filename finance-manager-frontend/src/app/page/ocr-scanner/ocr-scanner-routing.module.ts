import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OcrScannerPage } from './ocr-scanner.page';

const routes: Routes = [
  {
    path: '',
    component: OcrScannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OcrScannerPageRoutingModule {}
