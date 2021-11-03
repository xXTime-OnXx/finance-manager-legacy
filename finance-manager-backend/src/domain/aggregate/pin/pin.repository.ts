import {CreatePin} from "./add-pin.type";

export abstract class PinRepository {
    async abstract create(uid: string, createPin: CreatePin): Promise<void>;
}
