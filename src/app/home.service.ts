import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {}

  searchWhois(query: null | Partial<QueryInterface>): Observable<any> {
      let url = (query?.name!=null)? `https://rdap.org/${query.type}/${query.name}`:'';
      return this.http.get<any>(url);
  }
}
export interface QueryInterface {
  type: string | null
  name: string | null
}