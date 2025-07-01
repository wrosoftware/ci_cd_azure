import {Component, OnInit} from '@angular/core';
import {LayoutService} from "./service/app.layout.service";
import {AppInfoService} from "./service/app.info.service";

@Component({
  selector: 'app-footer',
  templateUrl: './app.footer.component.html'
})
export class AppFooterComponent implements OnInit {

    appName = '';
    appVersion = '0.0.1-dev'

    constructor(public layoutService: LayoutService,
                private appService: AppInfoService) {}


    ngOnInit() {
        this.appService.getApplicationInfo()
            .subscribe(resp => {
                this.appName = resp.name;
                this.appVersion = resp.version;
            })
    }

    get colorScheme(): string {
        return this.layoutService.config().colorScheme;
    }
}
