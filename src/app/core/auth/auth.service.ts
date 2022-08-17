import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TResults } from 'src/app/models/results.interface';
import { ILoginResponse } from 'src/app/models/login.interface';
import { ApiClientService } from '../api/api.service';

export type TLoginDTO = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private api: ApiClientService) {}

  public login(data: TLoginDTO): Observable<ILoginResponse> {
    return this.api
      .post<TResults<ILoginResponse>>('/api/v1/users/login', data)
      .pipe(
        map((response) => {
          return response.data;
        })
      );
  }
}
