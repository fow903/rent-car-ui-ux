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
  getAllTiposVeh(): Observable<any>{
    return this.http.get(this.baseurl+'/tipoveh/',
      {headers:this.httpHeaders});
  }

  getOneTiposVeh(id): Observable<any>{
    return this.http.get(this.baseurl+'/tipoveh/' + id +'/',
      {headers:this.httpHeaders});
  }

  updateTiposVeh(tipo): Observable<any>{
    const body = {descripcion: tipo.descripcion, estado: tipo.estado};
    return this.http.put(this.baseurl+'/tipoveh/' + tipo.id +'/', body,
      {headers:this.httpHeaders});
  }

  createTiposVeh(tipo): Observable<any>{
    const body = {descripcion: tipo.descripcion, estado: tipo.estado};
    return this.http.post(this.baseurl+'/tipoveh/', body,
      {headers:this.httpHeaders});
  }

  //  Marcas
  getAllMarcas(): Observable<any>{
    return this.http.get(this.baseurl+'/marca/',
      {headers:this.httpHeaders});
  }

  getOneMarca(id): Observable<any>{
    return this.http.get(this.baseurl+'/marca/' + id +'/',
      {headers:this.httpHeaders});
  }

  updateMarca(marca): Observable<any>{
    const body = {descripcion: marca.descripcion, estado: marca.estado};
    return this.http.put(this.baseurl+'/marca/' + marca.id +'/', body,
      {headers:this.httpHeaders});
  }

  createMarca(marca): Observable<any>{
    const body = {descripcion: marca.descripcion, estado: marca.estado};
    return this.http.post(this.baseurl+'/marca/', body,
      {headers:this.httpHeaders});
  }

  // Modelos de Vehiculos

  getAllModelos(): Observable<any>{
    return this.http.get(this.baseurl+'/modelo/',
      {headers:this.httpHeaders});
  }

  getOneModelo(id): Observable<any>{
    return this.http.get(this.baseurl+'/modelo/' + id +'/',
      {headers:this.httpHeaders});
  }

  updateModelo(modelo): Observable<any>{
    const body = {marca: modelo.marca, descripcion: modelo.descripcion, estado: modelo.estado};
    return this.http.put(this.baseurl+'/modelo/' + modelo.id +'/', body,
      {headers:this.httpHeaders});
  }

  createModelo(modelo): Observable<any>{
    const body = {marca: modelo.marca, descripcion: modelo.descripcion, estado: modelo.estado};
    return this.http.post(this.baseurl+'/modelo/', body,
      {headers:this.httpHeaders});
  }


}
