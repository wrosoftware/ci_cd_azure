import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {TranslateService} from "@ngx-translate/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,
                private translate: TranslateService) {
        this.translate.setDefaultLang("pl");
        this.translate.use("pl");
    }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
    }
}

