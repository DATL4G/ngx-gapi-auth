import { InjectionToken, Injectable, Inject, NgZone, NgModule } from '@angular/core';
import { Observable, of, ReplaySubject, interval } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/config/google-api.config.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgGapiClientConfig() { }
if (false) {
    /**
     * User for mocking auth flow to local storage save
     * @type {?}
     */
    NgGapiClientConfig.prototype.e2e;
    /**
     * The app's client ID, found and created in the Google Developers Console.
     * @type {?}
     */
    NgGapiClientConfig.prototype.client_id;
    /**
     * The domains for which to create sign-in cookies. Either a URI, single_host_origin, or none.
     * Defaults to single_host_origin if unspecified.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.cookie_policy;
    /**
     * The scopes to request, as a space-delimited string. Optional if fetch_basic_profile is not set to false.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.scope;
    /**
     * Fetch users' basic profile information when they sign in. Adds 'profile' and 'email' to the requested scopes. True if unspecified.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.fetch_basic_profile;
    /**
     * The Google Apps domain to which users must belong to sign in. This is susceptible to modification by clients,
     * so be sure to verify the hosted domain property of the returned user. Use GoogleUser.getHostedDomain() on the client,
     * and the hd claim in the ID Token on the server to verify the domain is what you expected.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.hosted_domain;
    /**
     * Used only for OpenID 2.0 client migration. Set to the value of the realm that you are currently using for OpenID 2.0,
     * as described in <a href="https://developers.google.com/accounts/docs/OpenID#openid-connect">OpenID 2.0 (Migration)</a>.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.openid_realm;
    /**
     * The UX mode to use for the sign-in flow.
     * By default, it will open the consent flow in a popup.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.ux_mode;
    /**
     * If using ux_mode='redirect', this parameter allows you to override the default redirect_uri that will be used at the end of the consent flow.
     * The default redirect_uri is the current URL stripped of query parameters and hash fragment.
     * @type {?|undefined}
     */
    NgGapiClientConfig.prototype.redirect_uri;
    /**
     * Describes the surface for a particular version of an API.
     * @type {?}
     */
    NgGapiClientConfig.prototype.discoveryDocs;
}
var GoogleApiConfig = /** @class */ (function () {
    function GoogleApiConfig(config) {
        this.clientConfig = config;
        this.mocked = config.e2e;
    }
    /**
     * @return {?}
     */
    GoogleApiConfig.prototype.getMocked = /**
     * @return {?}
     */
    function () {
        return this.mocked;
    };
    /**
     * @return {?}
     */
    GoogleApiConfig.prototype.getClientConfig = /**
     * @return {?}
     */
    function () {
        return this.clientConfig;
    };
    return GoogleApiConfig;
}());
if (false) {
    /**
     * @type {?}
     * @protected
     */
    GoogleApiConfig.prototype.clientConfig;
    /**
     * @type {?}
     * @protected
     */
    GoogleApiConfig.prototype.mocked;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/auth.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AuthUser = /** @class */ (function () {
    function AuthUser(id, firstName, lastName, email, avatar, idToken, tokenExpiresAt) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.avatar = avatar;
        this.idToken = idToken;
        this.tokenExpiresAt = tokenExpiresAt;
    }
    return AuthUser;
}());
if (false) {
    /** @type {?} */
    AuthUser.prototype.id;
    /** @type {?} */
    AuthUser.prototype.firstName;
    /** @type {?} */
    AuthUser.prototype.lastName;
    /** @type {?} */
    AuthUser.prototype.email;
    /** @type {?} */
    AuthUser.prototype.avatar;
    /** @type {?} */
    AuthUser.prototype.idToken;
    /** @type {?} */
    AuthUser.prototype.tokenExpiresAt;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-api-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NG_GAPI_CONFIG = new InjectionToken('ng-gapi.config');
var GoogleApiLoaderService = /** @class */ (function () {
    function GoogleApiLoaderService(config) {
        this.gapiUrl = 'https://apis.google.com/js/api.js';
        this.config = new GoogleApiConfig(config);
        this.loadGapi().subscribe();
    }
    /**
     * @return {?}
     */
    GoogleApiLoaderService.prototype.onLoad = /**
     * @return {?}
     */
    function () {
        return this.loadGapi();
    };
    /**
     * @return {?}
     */
    GoogleApiLoaderService.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return this.config;
    };
    /**
     * @return {?}
     */
    GoogleApiLoaderService.prototype.isMocked = /**
     * @return {?}
     */
    function () {
        return this.config.getMocked();
    };
    /**
     * @private
     * @return {?}
     */
    GoogleApiLoaderService.prototype.loadGapi = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            /** @type {?} */
            var node = document.createElement('script');
            node.src = _this.gapiUrl;
            node.type = 'text/javascript';
            node.charset = 'utf-8';
            document.getElementsByTagName('head')[0].appendChild(node);
            node.onload = (/**
             * @return {?}
             */
            function () {
                observer.next(true);
                observer.complete();
            });
        }));
    };
    GoogleApiLoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleApiLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [NG_GAPI_CONFIG,] }] }
    ]; };
    return GoogleApiLoaderService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.gapiUrl;
    /**
     * @type {?}
     * @private
     */
    GoogleApiLoaderService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-auth2-loader.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleAuth2LoaderService = /** @class */ (function () {
    function GoogleAuth2LoaderService(googleApi) {
        var _this = this;
        this.googleApi = googleApi;
        this.GoogleAuth = undefined;
        this.googleApi.onLoad().subscribe((/**
         * @return {?}
         */
        function () {
            _this.loadGoogleAuth2().subscribe();
        }));
    }
    /**
     * @param {?=} newInstance
     * @return {?}
     */
    GoogleAuth2LoaderService.prototype.getAuth = /**
     * @param {?=} newInstance
     * @return {?}
     */
    function (newInstance) {
        var _this = this;
        if (newInstance === void 0) { newInstance = false; }
        if (!this.GoogleAuth || newInstance) {
            return this.googleApi.onLoad()
                .pipe(mergeMap((/**
             * @return {?}
             */
            function () { return _this.loadGoogleAuth2(); })));
        }
        return of(this.GoogleAuth);
    };
    /**
     * @private
     * @return {?}
     */
    GoogleAuth2LoaderService.prototype.loadGoogleAuth2 = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            gapi.load('auth2', (/**
             * @return {?}
             */
            function () {
                gapi.auth2.init(_this.googleApi.getConfig().getClientConfig()).then((/**
                 * @param {?} auth
                 * @return {?}
                 */
                function (auth) {
                    _this.GoogleAuth = auth;
                    observer.next(auth);
                    observer.complete();
                })).catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) { return observer.error(err); }));
            }));
        }));
    };
    GoogleAuth2LoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuth2LoaderService.ctorParameters = function () { return [
        { type: GoogleApiLoaderService }
    ]; };
    return GoogleAuth2LoaderService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleAuth2LoaderService.prototype.GoogleAuth;
    /**
     * @type {?}
     * @private
     */
    GoogleAuth2LoaderService.prototype.googleApi;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/google-auth.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleAuthService = /** @class */ (function () {
    function GoogleAuthService(googleAuth2LoaderService, googleApiLoaderService, ngZone) {
        var _this = this;
        this.googleAuth2LoaderService = googleAuth2LoaderService;
        this.googleApiLoaderService = googleApiLoaderService;
        this.ngZone = ngZone;
        this._authState = new ReplaySubject(1);
        if (this.googleApiLoaderService.isMocked()) {
            this.signIn();
        }
        else {
            this.googleApiLoaderService.onLoad().subscribe((/**
             * @return {?}
             */
            function () {
                _this.googleAuth2LoaderService.getAuth().subscribe((/**
                 * @param {?} auth
                 * @return {?}
                 */
                function (auth) {
                    _this.auth = auth;
                    if (_this.auth.currentUser.get().isSignedIn()) {
                        _this.refreshToken();
                    }
                    else {
                        _this._authState.next(null);
                    }
                }));
                interval(20 * 60 * 1000).pipe(// run every 20min
                tap((/**
                 * @return {?}
                 */
                function () { return _this.refreshToken(); }))).subscribe();
            }));
        }
    }
    Object.defineProperty(GoogleAuthService.prototype, "authState", {
        get: /**
         * @return {?}
         */
        function () {
            return this._authState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.signIn = /**
     * @return {?}
     */
    function () {
        if (this.googleApiLoaderService.isMocked()) {
            this._authState.next(JSON.parse(localStorage.getItem('user')));
        }
        else {
            this.auth.signIn({
                prompt: 'select_account',
                ux_mode: 'redirect',
                redirect_uri: window.location.origin
            });
        }
    };
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.signOut = /**
     * @return {?}
     */
    function () {
        if (!this.googleApiLoaderService.isMocked()) {
            this.auth.signOut();
        }
        this._authState.next(null);
    };
    /**
     * @return {?}
     */
    GoogleAuthService.prototype.refreshToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.auth.currentUser.get().reloadAuthResponse().then((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () { return _this._authState.next(_this.getProfile(r.id_token, r.expires_at)); }));
        }));
    };
    /**
     * @private
     * @param {?} token
     * @param {?} expiresAt
     * @return {?}
     */
    GoogleAuthService.prototype.getProfile = /**
     * @private
     * @param {?} token
     * @param {?} expiresAt
     * @return {?}
     */
    function (token, expiresAt) {
        /** @type {?} */
        var p = this.auth.currentUser.get().getBasicProfile();
        return p ? {
            id: p.getId(),
            email: p.getEmail(),
            firstName: p.getGivenName(),
            lastName: p.getFamilyName(),
            avatar: p.getImageUrl(),
            idToken: token,
            tokenExpiresAt: expiresAt
        } : null;
    };
    GoogleAuthService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    GoogleAuthService.ctorParameters = function () { return [
        { type: GoogleAuth2LoaderService },
        { type: GoogleApiLoaderService },
        { type: NgZone }
    ]; };
    return GoogleAuthService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype._authState;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.auth;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.googleAuth2LoaderService;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.googleApiLoaderService;
    /**
     * @type {?}
     * @private
     */
    GoogleAuthService.prototype.ngZone;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/common-util-google-oauth.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GoogleOauthModule = /** @class */ (function () {
    function GoogleOauthModule() {
    }
    /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    GoogleOauthModule.forRoot = /**
     * @param {?} gapiConfigProvider
     * @return {?}
     */
    function (gapiConfigProvider) {
        return {
            ngModule: GoogleOauthModule,
            providers: [
                gapiConfigProvider,
                GoogleApiLoaderService,
                GoogleAuth2LoaderService,
                GoogleAuthService
            ]
        };
    };
    GoogleOauthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule]
                },] }
    ];
    return GoogleOauthModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-gapi-auth2.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AuthUser, GoogleApiConfig, GoogleApiLoaderService, GoogleAuth2LoaderService, GoogleAuthService, GoogleOauthModule, NG_GAPI_CONFIG };
//# sourceMappingURL=ngx-gapi-auth2.js.map
