import {Component, OnInit} from '@angular/core';
import {ScannerService} from 'src/app/service/scaner/scanner.service';
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Receipt} from "../../../service/scaner/receipt.type";
import {NavService} from "../../../service/nav/nav-service";

@Component({
    selector: 'app-receipt-scanner',
    templateUrl: 'receipt-scanner.page.html',
    styleUrls: ['receipt-scanner.page.scss']
})
export class ReceiptScannerPage implements OnInit {

    receipts: Observable<Receipt[]>

    constructor(private scannerService: ScannerService, private router: Router, private navService: NavService) {
    }

    async ngOnInit(): Promise<void> {
        this.receipts = await this.scannerService.getUsersReceipts();
    }

    async showReceipt(receipt: Receipt) {
        this.navService.setData({receiptId: receipt.id});
        await this.router.navigate(['/edit-receipt']);
    }

    async addReceiptManually() {
        this.navService.setData({manually: true});
        await this.router.navigate(['/addReceipt']);
    }

    async addReceiptWithPhoto() {
        this.navService.setData({manually: false});
        await this.router.navigate(['/addReceipt']);
    }

}
