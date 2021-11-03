import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import {LoginDto} from "../../dto/login.dto";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {
    }

    public async login(loginDto: LoginDto): Promise<void> {
        let result;
        try {
            result = await this.http.post(environment.host + '/auth/login', loginDto).toPromise();
        } catch (e) {
            console.error(e);
        }
        localStorage.setItem(environment.bearerToken, result.access_token);
    }

    async register(registerDto: any) {
        try {
            await this.http.post(environment.host + '/auth/register', registerDto).toPromise();
        } catch (e) {
            console.error(e);
        }
    }

    get authenticated() {
        const bearerToken = localStorage.getItem(environment.bearerToken);
        if (bearerToken) {
            const tokenContent = extractJwtPayload(bearerToken);
            return {
                token: bearerToken,
                verified: tokenContent.exp * 1000 >= Date.now() + 5 * 1000,
                exp: tokenContent.exp
            };
        }
        return null;
    }
}

export function extractJwtPayload(bearerToken: string) {
    const encryptedPayloadUrl = bearerToken.split('.')[1];
    const encryptedPayload = encryptedPayloadUrl.replace('-', '+').replace('_', '/');
    return JSON.parse(atob(encryptedPayload));
}
