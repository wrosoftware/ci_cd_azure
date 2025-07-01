import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContractUploadService {

    private baseUrl = `http://localhost:8080/contract-analysis/order`;

  constructor(private http: HttpClient) { }

    uploadFiles(files: any): Observable<any> {
        // const formData = new FormData();
        // for (let file of files) {
        //     formData.append('files', file);
        // }
        // return this.http.post(`${this.baseUrl}/upload-files`, formData);
        return of("test");
    }
}
