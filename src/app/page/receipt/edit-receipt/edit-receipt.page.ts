import {Component, OnInit} from '@angular/core';
import {ScannerService} from "../../../service/scaner/scanner.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Router, ActivatedRoute} from "@angular/router";
import {switchMap} from 'rxjs/operators';
import {Receipt} from "../../../service/scaner/receipt.type";
import {Observable} from "rxjs";
import {AddReceiptDto} from "../../../service/scaner/add-receipt.dto";

@Component({
    selector: 'app-edit-receipt',
    templateUrl: './edit-receipt.page.html',
    styleUrls: ['./edit-receipt.page.scss'],
})
export class EditReceiptPage implements OnInit {

    receipt: Observable<Receipt>;

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

    async addProductsToReceipt(receipt: Receipt) {
        // await this.scannerService.addReceipt();
        await this.router.navigate(['/tabs/receipt-scanner']);
    }
}
