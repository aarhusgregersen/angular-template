import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEnvironment } from 'src/environments/environment.interface';

type THttpOptions = {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe?: 'body';
  // tslint:disable-next-line: no-any
  params?: any;
  reportProgress?: boolean;
  // tslint:disable-next-line: no-any
  responseType?: any; // 'blob' | 'json'
  withCredentials?: boolean;
  'Content-Type'?: string;
};

@Injectable({
  providedIn: 'root',
})
export class ApiClientService {
  constructor(
    @Inject('ENV') private env: IEnvironment,
    public httpClient: HttpClient
  ) {}

  public get<T>(endPoint: string, options?: THttpOptions): Observable<T> {
    return this.httpClient.get<T>(this.env.apiUrl + endPoint, options);
  }

  public uploadMedia<T>(endPoint: string, files: File[]): Observable<T> {
    const formData = new FormData();
    const isSingle = files.length === 1;

    if (isSingle) {
      formData.append('file', files[0]);
    } else {
      files.forEach((file, index) => {
        formData.append(`file[${index}]`, file);
      });
    }

    return this.httpClient.post<T>(this.env.apiUrl + endPoint, formData);
  }

  public delete<T>(endPoint: string, options?: THttpOptions): Observable<T> {
    return this.httpClient.delete<T>(this.env.apiUrl + endPoint, options);
  }

  public post<T>(
    endPoint: string,
    body?: any,
    options?: THttpOptions
  ): Observable<T> {
    if (typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.httpClient.post<T>(this.env.apiUrl + endPoint, body, options);
  }

  public patch<T>(
    endPoint: string,
    body?: any,
    options?: THttpOptions
  ): Observable<T> {
    if (typeof body !== 'string') {
      body = JSON.stringify(body);
    }

    return this.httpClient.patch<T>(this.env.apiUrl + endPoint, body, options);
  }

  public put<T>(
    endPoint: string,
    body?: any,
    options?: THttpOptions
  ): Observable<T> {
    return this.httpClient.put<T>(this.env.apiUrl + endPoint, body, options);
  }
}
