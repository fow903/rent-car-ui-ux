import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient ) { }

  getAllTiposVeh(): Observable<any>{
    console.log(this.baseurl)
    return this.http.get(this.baseurl+'/tipoveh/',
      {headers:this.httpHeaders});
  }

  getOneTiposVeh(id): Observable<any>{
    console.log(this.baseurl)
    return this.http.get(this.baseurl+'/tipoveh/' + id +'/',
      {headers:this.httpHeaders});
  }

  updateTiposVeh(tipo): Observable<any>{
    console.log(tipo.descripcion);
    const body = {descripcion: tipo.descripcion, estado: tipo.estado};
    return this.http.put(this.baseurl+'/tipoveh/' + tipo.id +'/', body,
      {headers:this.httpHeaders});
  }

  createTiposVeh(tipo): Observable<any>{
    const body = {descripcion: tipo.descripcion, estado: tipo.estado};
    return this.http.post(this.baseurl+'/tipoveh/', body,
      {headers:this.httpHeaders});
  }
}
