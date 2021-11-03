import {Module} from '@nestjs/common';
import {AppController} from "./app/app.controller";
import {DomainModule} from "../domain/domain.module";
import {PinController} from "./pin/pin.controller";
import {SecurityModule} from "../security/security.module";
import {AuthController} from "./auth/auth.controller";

@Module({
    imports: [DomainModule, SecurityModule],
    controllers: [AppController, AuthController, PinController],
    providers: [],
})
export class ControllerModule {
}
