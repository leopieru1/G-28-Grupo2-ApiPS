import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[];
  constructor(private productoService:ProductService) {}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e=>this.productos=e
    );
  }

}
