import { Injectable } from '@angular/core';
import { Producto } from 'app/interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class DataDetailService {
  sharedData: number;
 
  addItem(item: number) {
      this.sharedData = item;
  }

  getItem(){
      return this.sharedData;
  }

  constructor() { }
}
