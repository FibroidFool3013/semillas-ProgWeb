import { Component, OnInit, Input } from '@angular/core';
import { ProductoService } from './../../services/producto.service';
import { Reference } from '@angular/compiler/src/render3/r3_ast';
import { DataDetailService } from 'app/services/data-detail.service';
import { Producto } from 'app/interfaces/producto';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  productoDetalle;
  detalle: string;


  constructor(private _productoService: ProductoService, public _detailService: DataDetailService) {

   }

  ngOnInit(): void {
    this.detalle = (this._detailService.getItem()).toString();

    this._productoService.getProducto(this.detalle).subscribe(
      result =>{
        this.productoDetalle = result;
      }, error => {
        console.log(<any>error);
    });
  }
  
}
