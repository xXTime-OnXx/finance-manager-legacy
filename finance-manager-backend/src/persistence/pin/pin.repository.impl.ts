import {Injectable} from "@nestjs/common";
import {PinRepository} from "../../domain/aggregate/pin/pin.repository";
import {AddPinDto} from "../../controller/pin/add-pin.dto";

@Injectable()
export class PinRepositoryImpl extends PinRepository {

    async create(uid: string, createPinDto: AddPinDto): Promise<void> {
        return Promise.resolve(undefined);
    }

}
