import {Injectable} from '@nestjs/common';
import {PinRepository} from "../../aggregate/pin/pin.repository";
import {CreatePin} from "../../aggregate/pin/add-pin.type";

@Injectable()
export class PinManager {

    constructor(private pinRepository: PinRepository) {
    }

    public async add(uid: string, createPin: CreatePin): Promise<void> {
        await this.pinRepository.create(uid, createPin);
    }
}
