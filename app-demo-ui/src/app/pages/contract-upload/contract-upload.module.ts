import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContractUploadRoutingModule} from "./contract-upload-routing.module";
import {ContractUploadComponent} from "./component/contract-upload/contract-upload.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {MessageService} from "primeng/api";
import {TranslateModule} from "@ngx-translate/core";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ChooseClientComponent} from "./component/choose-client/choose-client.component";
import {DialogModule} from "primeng/dialog";
import {AuthModule} from "../auth/auth.module";
import {ToggleButtonModule} from "primeng/togglebutton";
import {InputSwitchModule} from "primeng/inputswitch";
import {TooltipModule} from "primeng/tooltip";
import {InputGroupModule} from "primeng/inputgroup";
import {InputGroupAddonModule} from "primeng/inputgroupaddon";
import {InputTextModule} from "primeng/inputtext";


@NgModule({
    declarations: [
        ContractUploadComponent,
        ChooseClientComponent
    ],
    imports: [
        CommonModule,
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule,
        InputTextareaModule,
        ButtonModule,
        RippleModule,
        DialogModule,
        InputSwitchModule,
        TooltipModule,
        InputGroupModule,
        InputGroupAddonModule,
        InputTextModule,
        TranslateModule,

        ContractUploadRoutingModule,
        AuthModule
    ],
    exports: [
        ContractUploadComponent
    ],
    providers: [
        MessageService
    ]
})
export class ContractUploadModule { }
