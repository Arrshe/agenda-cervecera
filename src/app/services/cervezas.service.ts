import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CervezasService {

  constructor(private http:HttpClient) {}

  getCervezasApi():Observable<any>{
    return this.http.get("https://api.punkapi.com/v2/beers?page=2&per_page=10");
  }

  
}
