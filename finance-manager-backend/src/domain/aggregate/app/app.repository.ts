import {App} from "./app.type";

export abstract class AppRepository {
    async abstract getAll(): Promise<App[]>;
}
