import {Controller, Get, UseGuards} from '@nestjs/common';
import {AppQuery} from "../../domain/usecase/app/app.query";
import {App} from "../../domain/aggregate/app/app.type";
import {JwtAuthGuard} from "../../security/guard/jwt-auth.guard";
import {Roles} from "../../security/decorator/roles.decorator";
import {UserRole} from "../../domain/aggregate/user/user-role.enum";
import {RolesGuard} from "../../security/guard/roles.guard";

@Controller()
@UseGuards(JwtAuthGuard, RolesGuard)
export class AppController {

    constructor(private readonly appQuery: AppQuery) {
    }

    @Get()
    @Roles(UserRole.USER)
    getHello(): Promise<App[]> {
        return this.appQuery.getAll();
    }

}
