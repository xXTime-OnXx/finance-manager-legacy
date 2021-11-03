import {Module} from '@nestjs/common';
import {AppQuery} from "./usecase/app/app.query";
import {PersistenceModule} from "../persistence/persistence.module";
import {PinManager} from "./usecase/pin/pin.manager";
import {UserManager} from "./usecase/user/user.manager";
import {UserQuery} from "./usecase/user/user.query";

const managers = [PinManager, UserManager];
const queries = [AppQuery, UserQuery];
const services = [];

@Module({
    imports: [
        PersistenceModule,
    ],
    providers: [...managers, ...queries, ...services],
    exports: [...managers, ...queries],
})

export class DomainModule {
}
