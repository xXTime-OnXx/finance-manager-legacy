import { Component } from '@angular/core';
import { ScannerService } from 'src/app/service/scaner/scanner.service';
import {Router} from "@angular/router";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Observable} from "rxjs";
import {Receipt} from "../../../service/scaner/Receipt.type";
import { Reference } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-receipt-scanner',
  templateUrl: 'receipt-scanner.page.html',
  styleUrls: ['receipt-scanner.page.scss']
})
export class ReceiptScannerPage {

  receipts: Observable<Receipt[]>

  constructor(private scannerService: ScannerService, private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    this.receipts = this.scannerService.getUsersReceipts();
  }

  async showReceipt(receipt: Receipt) {
    console.log({receipt})
    await this.router.navigate(['/edit-receipt', {id: receipt.id}]);
  }

  async addReceipt() {
    await this.router.navigate(['/addReceipt']);
  }
}
