import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PageEvent } from '@angular/material/paginator';
import { removeFalseValues } from '../utils/data-formatting';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private HTTP = inject(HttpClient);

  getData(
    baseURL: string,
    pagination?: Partial<PageEvent>,
    filter?: any,
    responseType?: any
  ) {
    if (filter) {
      filter = removeFalseValues;
    }
    return this.HTTP.get(baseURL, {
      params: { ...pagination, ...filter },
      responseType,
    });
  }

  getDataById(baseURL: string, id: number) {
    return this.HTTP.get(baseURL + id);
  }

  sendData(baseURL: string, model: unknown, id?: string) {
    return this.HTTP.post(id ? baseURL + id : baseURL, model);
  }

  updateData(
    method: 'put' | 'patch',
    baseURL: string,
    model: unknown,
    id?: string
  ) {
    return this.HTTP[method](id ? baseURL + id : baseURL, model);
  }

  deleteData(baseURL: string, id: string) {
    return this.HTTP.delete(baseURL + id);
  }
}
