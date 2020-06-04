import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Producto } from './../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private api = 'http://localhost:3000';

  constructor(
    public _http: HttpClient
  ) { }

  getAllProductos(){
    const path = `${this.api}/productos`;
    return this._http.get<Producto[]>(path);
  }
  
  getProductosCategory(seccion_id: string){
    const path = `${this.api}/productos/seccion/${seccion_id}`;
    return this._http.get<Producto[]>(path);
  }

  getProducto(id: string){
    const path = `${this.api}/productos/${id}`;
    return this._http.get<Producto>(path);
  }
}
