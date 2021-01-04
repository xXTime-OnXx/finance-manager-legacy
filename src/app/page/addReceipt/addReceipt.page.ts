import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ScannerService} from "../../service/scaner/scanner.service";
import firebase from "firebase";
import Timestamp = firebase.firestore.Timestamp;
import {Router} from "@angular/router";

@Component({
    selector: 'app-addReceipt',
    templateUrl: './addReceipt.page.html',
    styleUrls: ['./addReceipt.page.scss'],
})
export class CreateTripPage implements OnInit {

    trip: any;

    constructor(private scannerService: ScannerService, private router: Router) {
    }

    ngOnInit() {
        this.trip = {
            name: '',
            start: new Date(),
        };
    }

    async addReceipt() {
        const trip = {
            name: this.trip.name,
            start: Timestamp.fromDate(new Date(this.trip.start)),
            participants: []
        };
        await this.router.navigate(['/tabs/trip']);
    }
}
