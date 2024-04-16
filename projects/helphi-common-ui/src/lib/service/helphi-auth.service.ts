import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { lastValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HelphiAuthService {
    constructor(private auth0: AuthService) {}

    // public getToken(): Promise<string> {
    //     const cookieToken = this.getTokenFromCookie('helphi');

    //     if (cookieToken != null) {
    //         return cookieToken;
    //     }

    //     lastValueFrom(this.auth0.getAccessTokenSilently()).then(token => {});
    // }

    private getTokenFromCookie(name: string): string | null {
        const nameLenPlus = name.length + 1;
        return (
            document.cookie
                .split(';')
                .map(c => c.trim())
                .filter(cookie => {
                    return cookie.substring(0, nameLenPlus) === `${name}=`;
                })
                .map(cookie => {
                    return decodeURIComponent(cookie.substring(nameLenPlus));
                })[0] || null
        );
    }
}
