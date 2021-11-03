import {Module} from '@nestjs/common';
import {AuthService} from "./service/auth.service";
import {LocalStrategy} from "./strategy/local.strategy";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {JwtStrategy} from "./strategy/jwt.strategy";
import {DomainModule} from "../domain/domain.module";

@Module({
    imports: [
        DomainModule,
        PassportModule,
        JwtModule.register({
            // TODO: refactor!!
            secret: 'TEMP_JWT_SECRET',
            signOptions: { expiresIn: '900s' },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
    ],
    exports: [
        AuthService
    ]
})
export class SecurityModule {}
