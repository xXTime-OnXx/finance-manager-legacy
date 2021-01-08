import {Component, OnInit} from '@angular/core';
import {ScannerService} from "../../../service/scaner/scanner.service";
import {Router, ActivatedRoute} from "@angular/router";
import {switchMap} from 'rxjs/operators';
import {Receipt} from "../../../service/scaner/receipt.type";
import {Observable} from "rxjs";
import {User} from "../../../service/user/user.type";
import {AuthService} from "../../../service/auth/auth.service";
import {UserService} from "../../../service/user/user.service";
import {NavService} from "../../../service/nav/nav-service";

@Component({
    selector: 'app-edit-receipt',
    templateUrl: './edit-receipt.page.html',
    styleUrls: ['./edit-receipt.page.scss'],
})
export class EditReceiptPage implements OnInit {

    receipt: Observable<Receipt>;
    productTemplate = {amount: 0, text: '', price: 0, user: ''};
    products = [{amount: 0, text: '', price: 0, user: ''}];
    participants: Observable<User>;

    receiptId: string;
    currentUserId: string;

    constructor(
        private navService: NavService,
        private scannerService: ScannerService,
        private router: Router,
        private authService: AuthService,
        private userService: UserService) {
    }

    async ngOnInit() {
        const navParams = this.navService.getData();
        this.receiptId = navParams.receiptId;
        this.receipt = this.scannerService.getReceipts(this.receiptId);
        if (navParams.products) {
            this.setProductsByNavParams(navParams.products);
        }
        this.currentUserId = (await this.authService.getCurrentUser()).uid;
        this.participants = this.userService.getUser(this.currentUserId);
    }

    async addProduct() {
        this.products.push(this.productTemplate);
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

    private setProductsByNavParams(products: any[]): void {
        this.products = products.map((product) => {
            return {
                amount: product.amount,
                text: product.text,
                price: product.price,
                user: '',
            }
        })
    }
}
