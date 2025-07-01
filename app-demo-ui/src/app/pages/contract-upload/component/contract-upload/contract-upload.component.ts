import {Component, ElementRef, Input, QueryList, ViewChildren} from '@angular/core';
import {MessageService} from 'primeng/api';
import {ContractUploadService} from "../../service/contract-upload.service";


@Component({
    selector: 'app-contract-upload',
    templateUrl: './contract-upload.component.html',
    styleUrl: './contract-upload.component.scss',
    providers: [MessageService]
})
export class ContractUploadComponent {

    @Input()
    asCard = true;
    uploadedFiles: any[] = [];
    chooseClientPopup = false;

    @ViewChildren('buttonEl') buttonEl!: QueryList<ElementRef>;

    constructor(private messageService: MessageService,
                private contractUploadService: ContractUploadService) {
    }

    onUpload(event: any) {
        this.contractUploadService.uploadFiles(event.files)
            .subscribe((response) => {
                for (let file of event.files) {
                    this.uploadedFiles.push(file);
                }
                this.messageService.add({key: 'contract-upload', severity: 'success', summary: 'Success', detail: 'File uploaded successfully'});
            });
    }

    onImageMouseOver(file: File) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'flex' : null;
        })
    }

    onImageMouseLeave(file: File) {
        this.buttonEl.toArray().forEach(el => {
            el.nativeElement.id === file.name ? el.nativeElement.style.display = 'none' : null;
        })
    }

    onNextClick() {
        this.chooseClientPopup = true;
    }

    onCloseChooseClient() {
        this.chooseClientPopup = false;
    }

    removeImage(event: Event, file: any) {
        event.stopPropagation();
        this.uploadedFiles = this.uploadedFiles.filter(i => i !== file);
    }

    get showTextArea(): boolean {
        return this.uploadedFiles.length > 0;
    }
}
