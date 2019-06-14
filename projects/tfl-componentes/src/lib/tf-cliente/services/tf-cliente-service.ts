import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TfCliente } from '../interfaces/tf-cliente';

const URL = '/api/cliente';

@Injectable()
export class TfClienteService {
  constructor(private http: HttpClient) { }

  get(): Observable<TfCliente[]> {
    return this.http.get<TfCliente[]>(URL);
  }

  getById(id: number): Observable<TfCliente> {
    if (id) {
      return this.http.get<TfCliente>(`${URL}/${id}`);
    } else {
      return of({
        id: 0,
        ragioneSociale: '',
        contatto: '',
        indirizzo: '',
        citta: '',
        nazione: '',
        premium: false
      });
    }
  }

  add(item: TfCliente) {
    return this.http.post<TfCliente>(URL, item);
  }

  update(id: number, item: TfCliente) {
    return this.http.put<TfCliente>(`${URL}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete<TfCliente>(`${URL}/${id}`);
  }

  save(item: TfCliente) {
    if (item.id === 0) {
      return this.add(item);
    } else {
      return this.update(item.id, item);
    }
  }
}
