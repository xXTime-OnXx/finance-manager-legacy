import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavService {

    data: any;

    constructor() {
    }

    setData(data: any): void {
        this.data = data;
    }

    getData(): any {
        const data = { ...this.data };
        this.data = undefined;
        return data;
    }
}
