import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {modelGroupProvider} from "@angular/forms/src/directives/ng_model_group";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient ) { }
  // Tipos de Vehiculos
  getAll(slash): Observable<any>{
    return this.http.get(this.baseurl+ slash,
      {headers:this.httpHeaders});
  }

  getOne(id,slash): Observable<any>{
    return this.http.get(this.baseurl+ slash + id +'/',
      {headers:this.httpHeaders});
  }

  update(object,slash): Observable<any>{
    const body = object;
    return this.http.put(this.baseurl+ slash + object.id +'/', body,
      {headers:this.httpHeaders});
  }

  create(object,slash): Observable<any>{
    const body = object;
    return this.http.post(this.baseurl+ slash, body,
      {headers:this.httpHeaders});
  }

}
