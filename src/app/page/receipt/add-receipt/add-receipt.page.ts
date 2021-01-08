import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScannerService} from "../../../service/scaner/scanner.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs/operators";
import {NavService} from "../../../service/nav/nav-service";

@Component({
    selector: 'app-addReceipt',
    templateUrl: './add-receipt.page.html',
    styleUrls: ['./add-receipt.page.scss'],
})
export class CreateTripPage implements OnInit {

    receipt = {
        title: '',
        date: new Date()
    };

    manually: boolean;

    constructor(private scannerService: ScannerService, private router: Router, private navService: NavService) {
    }

    ngOnInit() {
        this.manually = this.navService.getData().manually;
    }

    async addReceipt() {
        const receipt = {
            title: this.receipt.title,
            date: Timestamp.fromDate(new Date(this.receipt.date)),
            products: [],
            user: undefined
        };
        const docRef = await this.scannerService.addReceipt(receipt);
        this.navService.setData({receiptId: docRef.id});
        if (this.manually) {
            await this.router.navigate(['/edit-receipt']);
        } else {
            await this.router.navigate(['/ocr-scanner']);
        }
    }
}
