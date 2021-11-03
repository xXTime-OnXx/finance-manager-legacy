import {Injectable} from '@nestjs/common';
import {AppRepository} from "../../aggregate/app/app.repository";
import {App} from "../../aggregate/app/app.type";

@Injectable()
export class AppQuery {

    constructor(private appRepository: AppRepository) {
    }

    public async getAll(): Promise<App[]> {
        return await this.appRepository.getAll();
    }
}
