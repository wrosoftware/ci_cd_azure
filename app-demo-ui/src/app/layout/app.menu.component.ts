import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/']},
            {label: 'Landing page', icon: 'pi pi-globe', routerLink: ['/landing']},
            {label: 'Demo', icon: 'pi pi-fw pi-prime', url: 'https://verona.primeng.org/', target: '_blank'},
            {label: 'Contract order', icon: 'pi pi-file-edit', routerLink: ['/contract/order-analysis']}
        ];
    }
}
