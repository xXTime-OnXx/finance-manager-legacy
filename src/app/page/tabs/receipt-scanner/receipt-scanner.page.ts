import {Component, OnInit} from '@angular/core';
import {ScannerService} from 'src/app/service/scaner/scanner.service';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Receipt} from "../../../service/scaner/receipt.type";

@Component({
    selector: 'app-receipt-scanner',
    templateUrl: 'receipt-scanner.page.html',
    styleUrls: ['receipt-scanner.page.scss']
})
export class ReceiptScannerPage implements OnInit {

    receipts: Observable<Receipt[]>

    constructor(private scannerService: ScannerService, private router: Router) {
    }

    async ngOnInit(): Promise<void> {
        this.receipts = await this.scannerService.getUsersReceipts();
    }

    async showReceipt(receipt: Receipt) {
        await this.router.navigate(['/edit-receipt', {id: receipt.id}]);
    }

    async addReceipt() {
        await this.router.navigate(['/addReceipt']);
    }

    async scanReceipt() {
    }

}
