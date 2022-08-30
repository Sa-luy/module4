import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from './book';
const API_URL = `${environment.ApiBookUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }
  getAll():Observable<Book[]> {
    return this.http.get<Book[]>(API_URL );
  }


  getById( id:any ):Observable<Book> {
    return this.http.get<Book>(`${API_URL}/${id}`);
  }


  store( book:Book ): Observable<Book>{
    return this.http.post<Book>(API_URL , book);
  }


  update( id:number, book:Book ): Observable<Book>{
    return this.http.put<Book>(`${API_URL}/${id}`, book);
  }


  destroy(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/${id}`);

  }


}
