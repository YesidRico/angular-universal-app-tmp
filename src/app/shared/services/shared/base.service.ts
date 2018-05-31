import { Injectable } from '@angular/core';
import { IBase } from './ibase';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { APP_ROOT } from '../../constants/service.contants';
import { HandleServiceError } from './handle-service-error';


@Injectable({
  providedIn: 'root'
})
export class BaseService<T> implements IBase<T> {

  constructor(protected _httpClient: HttpClient) { }

  getAll(endPoint: string): Observable<T[]> {
    return this._httpClient.get<T[]>(`${APP_ROOT}/${endPoint}`)
      .pipe(
        retry(2),
        catchError(HandleServiceError.handleError)
      )
  }

  getById(endPoint: string, id: string | number): Observable<T> {
    return this._httpClient.get<T>(`${APP_ROOT}/${endPoint}/${id}`)
      .pipe(
        retry(2),
        catchError(HandleServiceError.handleError)
      )
  }
  save(endPoint: string, object: T): Observable<T> {
    return this._httpClient.post<T>(`${APP_ROOT}/${endPoint}`, object)
      .pipe(
        retry(2),
        catchError(HandleServiceError.handleError)
      )
  }
  saveAll(endPoint: string, object: T[]): Observable<T[]> {
    return this._httpClient.post<T[]>(`${APP_ROOT}/${endPoint}`, object)
      .pipe(
        retry(2),
        catchError(HandleServiceError.handleError)
      )
  }
  delete(endPoint: string, id: string | number): Observable<T> {
    return this._httpClient.delete<T>(`${APP_ROOT}/${endPoint}/${id}`)
      .pipe(
        retry(2),
        catchError(HandleServiceError.handleError)
      )
  }

}
