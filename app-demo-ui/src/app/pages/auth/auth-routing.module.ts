import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AuthPageComponent} from "./component/auth-page/auth-page.component";
import {RegisterFormComponent} from "./component/register-form/register-form.component";

@NgModule({
    imports: [RouterModule.forChild([
        { path: "", component: AuthPageComponent},
        { path: 'login', component: AuthPageComponent},
        { path: 'registration', component: RegisterFormComponent},

    ])],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
