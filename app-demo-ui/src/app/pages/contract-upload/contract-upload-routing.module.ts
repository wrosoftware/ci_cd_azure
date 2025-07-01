import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContractUploadComponent} from "./component/contract-upload/contract-upload.component";
import {ChooseClientComponent} from "./component/choose-client/choose-client.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: "", component: ContractUploadComponent},
        { path: 'file-upload', component: ContractUploadComponent},
        { path: 'choose-client', component: ChooseClientComponent }

    ])],
    exports: [RouterModule]
})
export class ContractUploadRoutingModule { }
