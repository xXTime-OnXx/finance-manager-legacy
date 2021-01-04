import { Component, OnInit } from '@angular/core';
import {createWorker, Worker} from "tesseract.js";

@Component({
  selector: 'app-ocr-scanner',
  templateUrl: './ocr-scanner.page.html',
  styleUrls: ['./ocr-scanner.page.scss'],
})
export class OcrScannerPage implements OnInit {

  image: '../../../assets/receipt.jpg';
  ocrResult = '';

  private worker: Worker;

  constructor() {
  }

  async ngOnInit() {
    await this.loadWorker();
  }

  async loadWorker() {
    this.worker = createWorker({
      logger: progress => {
        console.log(progress);
      }
    });
    await this.worker.load();
    await this.worker.loadLanguage('eng')
    await this.worker.initialize();
  }

  async recognizeImage() {
    const result = await this.worker.recognize('../../../assets/receipt.jpg');
    console.log(result.data.text);
  }
}
