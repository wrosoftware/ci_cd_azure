import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {UserInfo} from "../../model/user-info";
import {ApiError} from "../../../../common/model/api-error";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {

    @Output()
    onCancel = new EventEmitter<any>();
    @Output()
    onRegistered = new EventEmitter<UserInfo>();

    asCompany: boolean = false;
    signUpIndividualForm
    signUpCompanyForm
    loginDataForm
    validated = false;

    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private messageService: MessageService) {
        this.signUpIndividualForm = formBuilder.group({
            name: [null, Validators.required],
            surname: [null, Validators.required],
        });
        this.signUpCompanyForm = formBuilder.group({
            name: [null, Validators.required],
            nip: [null, Validators.required],
            city: [null, Validators.required],
            street: [null, Validators.required],
            zipCode: [null, Validators.required],
            homeNumber: [null, Validators.required],
        });
        this.loginDataForm = formBuilder.group({
            login: [null, Validators.required],
            password: [null, Validators.required],
            repeatPassword: [null, Validators.required],
        }, {
            validator: this.passwordValidator()
        })
    }

    cancel() {
        this.onCancel.emit();
    }

    save() {
        this.signUpIndividualForm.markAllAsTouched();
        if(this.asCompany) {
            this.signUpCompanyForm.markAllAsTouched();
        }
        this.loginDataForm.markAllAsTouched();
        if(this.signUpIndividualForm.valid && this.loginDataForm.valid && (!this.asCompany || (this.asCompany && this.signUpCompanyForm.valid))) {
            this.authService.register({
                accountType: this.asCompany? 'COMPANY' : 'INDIVIDUAL' ?? null,

                login: this.loginDataForm.get('login')?.value ?? null,
                email: this.loginDataForm.get('login')?.value ?? null,
                password: this.loginDataForm.get('password')?.value ?? null,

                firstName: this.signUpIndividualForm.get('name')?.value ?? null,
                surname: this.signUpIndividualForm.get('surname')?.value ?? null,

                companyName: this.signUpCompanyForm.get('name')?.value ?? null,
                nip: this.signUpCompanyForm.get('nip')?.value ?? null,
                city: this.signUpCompanyForm.get('city')?.value ?? null,
                street: this.signUpCompanyForm.get('street')?.value ?? null,
                zipCode: this.signUpCompanyForm.get('zipCode')?.value ?? null,
                homeNumber: this.signUpCompanyForm.get('homeNumber')?.value ?? null
            })
                .subscribe({
                    next: (response) => this.onRegistered.emit(response),
                    error: (error: ApiError) => this.messageService.add({key: 'login', severity: 'error', summary: error.message})
                });
        }
    }

    private passwordValidator() {
        return (formGroup: AbstractControl) => {
            let passwordControl = formGroup.get('password');
            let repeatPasswordControl = formGroup.get('repeatPassword');

            let password = passwordControl?.value;
            let repeatPassword = repeatPasswordControl?.value;

            if(!passwordControl || !repeatPasswordControl) {
                return null;
            }
            if(repeatPassword?.errors || !repeatPassword?.errors['registration.error.matchPassword']) {
                return null;
            }

            if(password !== repeatPassword) {
                repeatPasswordControl.setErrors({
                    'registration.error.matchPassword': true
                })
                return {
                    'registration.error.matchPassword': true
                };
            } else {
                repeatPasswordControl.setErrors(null);
                return null;
            }
        }

    }
}
