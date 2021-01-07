import {Component, OnInit} from '@angular/core';
import {ScannerService} from "../../../service/scaner/scanner.service";
import firebase from "firebase";
import {Router, ActivatedRoute} from "@angular/router";
import {switchMap} from 'rxjs/operators';
import {Receipt} from "../../../service/scaner/receipt.type";
import {Observable} from "rxjs";
import {User} from "../../../service/user/user.type";

@Component({
    selector: 'app-edit-receipt',
    templateUrl: './edit-receipt.page.html',
    styleUrls: ['./edit-receipt.page.scss'],
})
export class EditReceiptPage implements OnInit {

    receipt: Observable<Receipt>;
    productTemplate = {amount: 0, text: '', price: 0, user: ''};
    products = [{amount: 0, text: '', price: 0, user: ''}];
    participants: Observable<User[]>;

    receiptId: string;

    constructor(private route: ActivatedRoute, private scannerService: ScannerService, private router: Router) {
    }

    ngOnInit() {
        this.receipt = this.route.paramMap.pipe(
            switchMap(params => {
              const id = params.get('id');
              this.receiptId = id;
              this.participants = this.scannerService.getParticipantsWithReceiptId(id);
              return this.scannerService.getReceipts(id);
            })
        );
    }

    async addProduct() {
        this.products.push(this.productTemplate);
        console.log(this.receiptId);
    }

    async removeProduct(index: number) {
        this.products.splice(index, 1);
    }

    async addProductsToReceipt() {
        const products = this.mapListToProductArray();
        await this.scannerService.addProductsToReceipt(this.receiptId, products);
        await this.router.navigate(['/tabs/receipt-scanner']);
    }

    private mapListToProductArray(): any[] {
        return this.products.map((product) => {
            return {
                amount: product.amount,
                text: product.text,
                price: product.price,
                consumer: product.user,
            };
        })
    }
}
