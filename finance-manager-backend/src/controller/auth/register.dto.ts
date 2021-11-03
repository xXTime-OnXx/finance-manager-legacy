import {IsNotEmpty, IsString, Matches} from "class-validator";

export class RegisterDto {

    @IsNotEmpty()
    @IsString()
    @Matches(/[0-9a-zA-Z]{5,}/)
    username: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)
    password: string;

    @IsNotEmpty()
    @IsString()
    @Matches(/^\+(?:[0-9]●?){6,14}[0-9]$/)
    phone: string
}
