import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserInfo} from "../../model/user-info";
import {AuthService} from "../../service/auth.service";
import {ApiError} from "../../../../common/model/api-error";
import {MessageService} from "primeng/api";
import {environment} from "../../../../../environments/environment";

declare const google: any;
declare const FB: any;

@Component({
    selector: 'app-auth-form',
    templateUrl: './auth-form.component.html',
    styleUrl: './auth-form.component.scss'
})
export class AuthFormComponent implements AfterViewInit {

    signInForm;
    validated = false;
    error: string | null = null;
    private googleObserver: MutationObserver | null = null;
    private googleButtonRendered = false;
    @Output()
    onSignIn = new EventEmitter<UserInfo>();
    @Output()
    onOpenRegister = new EventEmitter<any>();


    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private messageService: MessageService) {
        this.signInForm = formBuilder.group({
            login: [null, Validators.required],
            password: [null, Validators.required],
        })
    }

    ngAfterViewInit() {
        this.tryRenderGoogleButton();
        this.loadFacebookSDK();
    }

    private tryRenderGoogleButton() {
        const btn = document.getElementById('google-login-btn');

        if (btn && !this.googleButtonRendered) {
            google.accounts.id.initialize({
                client_id: environment.google_client_id,
                callback: this.handleCredentialResponse.bind(this)
            });

            google.accounts.id.renderButton(btn, {
                theme: 'outline',
                size: 'large',
                shape: 'circle',
                type: 'standard'
            });

            this.googleButtonRendered = true;
            return;
        }

        // Jeśli przycisku nie ma jeszcze, to obserwuj DOM
        this.googleObserver = new MutationObserver(() => {
            const btnCheck = document.getElementById('google-login-btn');
            if (btnCheck && !this.googleButtonRendered) {
                google.accounts.id.initialize({
                    client_id: environment.google_client_id,
                    callback: this.handleCredentialResponse.bind(this)
                });

                google.accounts.id.renderButton(btnCheck, {
                    theme: 'outline',
                    size: 'large',
                    shape: 'circle',
                    type: 'standard'
                });

                this.googleButtonRendered = true;
                if (this.googleObserver) this.googleObserver.disconnect();
            }
        });

        this.googleObserver.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }

    ngOnDestroy() {
        if (this.googleObserver) this.googleObserver.disconnect();
    }


    handleCredentialResponse(response: any) {
        this.authService.loginWithGoogleToken(response.credential)
            .subscribe({
            next: (response) => this.onSignIn.emit(response),
            error: (error: ApiError) => this.messageService.add({key: 'login', severity: 'error', summary: error.message})
        });
    }

    loadFacebookSDK() {
        (window as any).fbAsyncInit = () => {
            FB.init({
                appId      : '2057484041396980',
                cookie     : false,
                xfbml      : false,
                version    : 'v22.0' // lub najnowsza dostępna
            });
        };
    }

    loginWithFacebook() {
        FB.login((response: any) => {
            if (response.authResponse) {
                console.log('Zalogowano przez Facebook:', response);
                // Możesz teraz pobrać dane użytkownika lub token
                FB.api('/me', { fields: 'name,email,picture' }, (userInfo: any) => {
                    console.log('Informacje o użytkowniku:', userInfo);
                    // Tutaj możesz przekazać dane do backendu lub zalogować użytkownika w aplikacji
                });
            } else {
                console.warn('Logowanie nie powiodło się:', response);
            }
        }, { scope: 'email,public_profile' });
    }

    async signIn() {
        this.validated = true;
        this.error = null;
        this.signInForm.markAllAsTouched();
        if(this.signInForm.valid) {
            this.authService.login(
                this.signInForm.get('login')?.value || '',
                this.signInForm.get('password')?.value || ''
            )
                .subscribe({
                    next: (response) => this.onSignIn.emit(response),
                    error: (error: ApiError) => this.messageService.add({key: 'login', severity: 'error', summary: error.message})
                });
        }
    }

    signUpp() {
        this.onOpenRegister.emit();
    }

    loginWithGoogle() {
        google.accounts.id.prompt();
    }
}
