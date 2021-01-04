import { Component } from '@angular/core';
import { ScannerService } from 'src/app/service/scaner/scanner.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-receipt-scanner',
  templateUrl: 'receipt-scanner.page.html',
  styleUrls: ['receipt-scanner.page.scss']
})
export class ReceiptScannerPage {

  constructor(private scannerService: ScannerService, private router: Router) {
  }

      async addReceipt(): Promise<void> {
        await this.router.navigate(['/addReceipt']);
    }
}
