import { Injectable, OnDestroy } from '@angular/core';
import { AuthService, GetTokenSilentlyOptions } from '@auth0/auth0-angular';
import {
    firstValueFrom,
    lastValueFrom,
    Observable,
    Subject,
    Subscription,
    takeUntil,
} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class HelphiAuthService {
    private accessToken?: string;

    constructor(private auth0: AuthService) {}

    async authenticate() {
        const loggedIn = await firstValueFrom(this.auth0.isAuthenticated$);

        if (loggedIn) {
            const options: GetTokenSilentlyOptions = {
                authorizationParams: { audience: 'dev.api.helphi' },
            };

            this.accessToken = await lastValueFrom(
                this.auth0.getAccessTokenSilently(options)
            );
        } else {
            this.auth0.loginWithRedirect();
        }
    }

    logout() {
        this.auth0.logout();
    }

    getAccessToken() {
        return this.accessToken;
    }

    async getEmail(): Promise<string | undefined> {
        const claims = await firstValueFrom(this.auth0.idTokenClaims$);
        if (claims) {
            return claims['email'];
        } else {
            return undefined;
        }
    }

    async getId(): Promise<string | undefined> {
        const claims = await firstValueFrom(this.auth0.idTokenClaims$);
        if (claims) {
            return claims['user_id'];
        } else {
            return undefined;
        }
    }
}
