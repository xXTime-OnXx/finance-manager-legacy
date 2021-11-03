import {Body, Controller, Post, Request, UseGuards} from '@nestjs/common';
import {PinManager} from "../../domain/usecase/pin/pin.manager";
import {AddPinDto} from "./add-pin.dto";
import {JwtAuthGuard} from "../../security/guard/jwt-auth.guard";
import {RolesGuard} from "../../security/guard/roles.guard";
import {Roles} from "../../security/decorator/roles.decorator";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";

@Controller("pin")
@UseGuards(JwtAuthGuard, RolesGuard)
export class PinController {

    constructor(private pinManager: PinManager) {
    }

    @Post("add")
    @Roles(UserRole.USER)
    public async add(@Request() req, @Body() addPinDto: AddPinDto): Promise<void> {
        await this.pinManager.add(req.user.id, addPinDto);
    }
}
