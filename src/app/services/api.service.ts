import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Item } from '../models/item-model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get<any>('assets/data.json')
      .pipe(catchError(this.handleError));
  }

  updateItem(params: any) {
    return this.http.post('assets/data.json', params);
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'error on get data';

    return errorMessage;
  }
}
