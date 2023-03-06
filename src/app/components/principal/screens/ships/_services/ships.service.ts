import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { ServiceResponseInterface } from './_interfaces/service-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  url: string = 'https://swapi.dev/api/starships/'
  headerDict = {
    'Authorization': 'none',
    'Access-Control-Allow-Origin': '*'
  }
  requestOptions = {
    headers: new HttpHeaders(this.headerDict),
  };

  constructor(private http: HttpClient) { }

  getShips(page: number): Observable<ServiceResponseInterface> {
    return this.http.get<ServiceResponseInterface>(`${this.url}?page=${page}`).pipe(
      map(data => { return data })
    );
  }
}
