import { Component } from '@angular/core';
import { ScannerService } from 'src/app/service/scaner/scanner.service';
import {Router} from "@angular/router";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import { Reference } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-receipt-scanner',
  templateUrl: 'receipt-scanner.page.html',
  styleUrls: ['receipt-scanner.page.scss']
})
export class ReceiptScannerPage {

  receipt: any;

  constructor(private scannerService: ScannerService, private router: Router) {
  }

  ngOnInit() {
    this.receipt = {
        title: '',
        date: new Date(),
    };
}

  async addReceipt() {
    await this.router.navigate(['/addReceipt']);
}
}
