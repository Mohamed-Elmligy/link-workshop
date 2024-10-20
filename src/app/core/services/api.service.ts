import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageEvent } from '@angular/material/paginator';
import { removeFalseValues } from '../utils/data-formatting';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private HTTP = inject(HttpClient);

  getData<TResponse extends object>(
    baseURL: string,
    pagination?: Partial<PageEvent>,
    filter?: any,
    responseType?: any
  ) {
    if (filter) {
      filter = removeFalseValues;
    }
    return this.HTTP.get<TResponse>(baseURL, {
      params: { ...pagination, ...filter },
      responseType,
    });
  }

  getDataById<TResponse extends object>(baseURL: string, id: number) {
    return this.HTTP.get<TResponse>(baseURL + id);
  }

  sendData<TResponse extends object, TBody extends object>(
    baseURL: string,
    model: TBody,
    id?: string
  ) {
    return this.HTTP.post<TResponse>(id ? baseURL + id : baseURL, model);
  }

  updateData<TResponse extends object, TBody extends object>(
    method: 'put' | 'patch',
    baseURL: string,
    model: TBody,
    id?: string
  ) {
    return this.HTTP[method]<TResponse>(id ? baseURL + id : baseURL, model);
  }

  deleteData<TResponse extends object>(baseURL: string, id: string) {
    return this.HTTP.delete<TResponse>(baseURL + id);
  }
}
