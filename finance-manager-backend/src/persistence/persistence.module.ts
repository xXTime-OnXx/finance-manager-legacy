import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConnectionOptions} from "typeorm";

import {AppRepository} from "../domain/aggregate/app/app.repository";
import {AppRepositoryImpl} from "./app/app.repository.impl";
import {PinRepository} from "../domain/aggregate/pin/pin.repository";
import {PinRepositoryImpl} from "./pin/pin.repository.impl";
import {UserRepositoryImpl} from "./user/user.repository.impl";
import {UserRepository} from "../domain/aggregate/user/user.repository";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useFactory: async () => ({
                type: "postgres",
                host: "localhost",
                port: 5432,
                username: "finance-manager",
                password: "2nd",
                database: "finance-manager",
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [
                    __dirname + '/migration/**/*{.ts,.js}',
                ],
                cli: {
                    migrationsDir: __dirname + '/migration',
                },
                migrationsRun: true,
                synchronize: true,
            } as ConnectionOptions),
            inject: [],
        }),
    ],
    providers: [
        {
            useClass: AppRepositoryImpl,
            provide: AppRepository
        },
        {
            useClass: PinRepositoryImpl,
            provide: PinRepository
        },
        {
            useClass: UserRepositoryImpl,
            provide: UserRepository
        },
    ],
    exports: [AppRepository, PinRepository, UserRepository],
})
export class PersistenceModule {
}
