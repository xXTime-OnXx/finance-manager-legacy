import {Component, OnInit} from '@angular/core';
import {createWorker, Worker} from "tesseract.js";
import {Router} from "@angular/router";
import {NavService} from "../../service/nav/nav-service";

@Component({
    selector: 'app-ocr-scanner',
    templateUrl: './ocr-scanner.page.html',
    styleUrls: ['./ocr-scanner.page.scss'],
})
export class OcrScannerPage implements OnInit {

    image: '/assets/receipt.jpeg';
    isReady = false;
    isRecognizing = false;
    progress = 0;

    private worker: Worker;
    private receiptId: string;

    constructor(private router: Router, private navService: NavService) {
    }

    async ngOnInit() {
        this.receiptId = this.navService.getData().receiptId;
        await this.loadWorker();
    }

    async loadWorker() {
        this.worker = createWorker({
            logger: progress => {
                this.progress = progress.progress;
            }
        });
        await this.worker.load();
        await this.worker.loadLanguage('eng')
        await this.worker.initialize();
        this.progress = 0;
        this.isReady = true;
    }

    async recognizeImage() {
        this.isRecognizing = true;
        const result = await this.worker.recognize('/assets/receipt.jpeg');
        const lines = result.data.text.split('\n');
        const products = []
        for (let line of lines) {
            if (line.match(/^\d+.*\d+\.\d{0,2}$/g)) {
                const lineParts = line.trim().split(' ');
                products.push({
                    amount: lineParts.splice(0, 1)[0],
                    text: lineParts.splice(0, lineParts.length - 1).join(),
                    price: lineParts[0]
                });
            }
        }
        this.navService.setData({receiptId: this.receiptId, products: products});
        await this.router.navigate(['/edit-receipt']);
        this.isRecognizing = false;
    }
}
