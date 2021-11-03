import {Injectable} from "@nestjs/common";
import {AppRepository} from "../../domain/aggregate/app/app.repository";
import {App} from "../../domain/aggregate/app/app.type";

@Injectable()
export class AppRepositoryImpl extends AppRepository {

    async getAll(): Promise<App[]> {
        return Promise.resolve([]);
    }

}
