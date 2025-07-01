import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Emitter} from "@fullcalendar/core/internal";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserInfo} from "../../../auth/model/user-info";

@Component({
  selector: 'app-choose-client',
  templateUrl: './choose-client.component.html',
  styleUrl: './choose-client.component.scss'
})
export class ChooseClientComponent {

    @Input()
    visible = false;
    @Output()
    onClose = new EventEmitter();


    asGuest = false;
    asCompany = false;
    userDataForm: FormGroup;
    user: UserInfo | null = null;

    constructor(formBuilder: FormBuilder) {
        this.userDataForm = formBuilder.group({
            name: [null],
            surname: [null],
            phone: [null, Validators.required],
            email: [null, Validators.required]
        });
        this.userDataForm.markAsUntouched();
    }

    loadUserData(user: UserInfo) {
        this.user = user;
    }


    close() {
        this.onClose.emit();
    }
}
