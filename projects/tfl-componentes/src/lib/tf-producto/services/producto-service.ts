import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Producto } from '../interfaces/producto';

const URL = '/api/prodotto';

@Injectable()
export class ProductoService {
  constructor(private http: HttpClient) { }

  get(): Observable<Producto[]> {
    return this.http.get<Producto[]>(URL);
  }

  getById(id: number): Observable<Producto> {
    if (id) {
      return this.http.get<Producto>(`${URL}/${id}`);
    } else {
      return of({
                id: 0,
                descrizione: '',
                tipologia: '',
                prezzo: '',
                disponibile: false,
                fornitore: ''

      });
    }
  }

  add(item: Producto) {
    return this.http.post<Producto>(URL, item);
  }

  update(id: number, item: Producto) {
    return this.http.put<Producto>(`${URL}/${id}`, item);
  }

  delete(id: number) {
    return this.http.delete<Producto>(`${URL}/${id}`);
  }

  save(item: Producto) {
    if (item.id === 0) {
      return this.add(item);
    } else {
      return this.update(item.id, item);
    }
  }
}
