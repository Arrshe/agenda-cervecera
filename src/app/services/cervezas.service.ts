import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import Cerveza from '../model/Cerveza';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  constructor(private http:HttpClient) {}

  getCervezasApi():Observable<Cerveza[]>{
    return this.http.get<Cerveza[]>("https://api.punkapi.com/v2/beers?page=1&per_page=10");
  }

  
}
