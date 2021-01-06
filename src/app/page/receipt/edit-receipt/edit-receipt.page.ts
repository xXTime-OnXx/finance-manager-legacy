import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScannerService} from "../../../service/scaner/scanner.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Router, ActivatedRoute} from "@angular/router";
import {switchMap} from 'rxjs/operators';

@Component({
    selector: 'app-edit-receipt',
    templateUrl: './edit-receipt.page.html',
    styleUrls: ['./edit-receipt.page.scss'],
})
export class CreateTripPage implements OnInit {

    receipt: any;

    constructor(private route: ActivatedRoute, private scannerService: ScannerService, private router: Router) {
    }

    ngOnInit() {
        this.receipt = this.route.paramMap.pipe(
            switchMap(params => {
              const id = params.get('id');
              return this.scannerService.getReceipts(id);
            })
        );
    }

    async addReceipt() {
        const receipt = {
            title: this.receipt.title,
            date: Timestamp.fromDate(new Date(this.receipt.start)),
            receipts: []
        };
        await this.scannerService.addReceipt(this.receipt);
        await this.router.navigate(['/tabs/receipt-scanner']);
    }
}
