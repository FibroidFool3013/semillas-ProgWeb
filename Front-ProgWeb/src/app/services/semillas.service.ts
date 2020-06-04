import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Semillas } from './../interfaces/semillas';

@Injectable({
  providedIn: 'root'
})
export class SemillasService {
  private api = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getAllSemillas(){
    const path = `${this.api}/semillas`;
    return this.http.get<Semillas[]>(path);
  }
  getSemilla(id: string){
    const path = `${this.api}/semillas/${id}`;
    return this.http.get<Semillas>(path);
  }
}
