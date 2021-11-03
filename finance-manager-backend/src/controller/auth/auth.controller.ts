import {Controller, Request, Post, UseGuards, Get, Body} from '@nestjs/common';
import {LocalAuthGuard} from "../../security/guard/local-auth.guard";
import {AuthService} from "../../security/service/auth.service";
import {LoginDto} from "./login.dto";
import {RegisterDto} from "./register.dto";
import {UserManager} from "../../domain/usecase/user/user.manager";

@Controller('/auth')
export class AuthController {

    constructor(private authService: AuthService, private userManager: UserManager) {
    }

    @Post('/login')
    @UseGuards(LocalAuthGuard)
    async login(@Request() req, @Body() loginDto: LoginDto) {
        return this.authService.login(req.user);
    }

    @Post('/register')
    async getProfile(@Request() req, @Body() registerDto: RegisterDto) {
        await this.userManager.register(registerDto);
    }

}
