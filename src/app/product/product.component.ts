import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Producto } from '../producto';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productos:Producto[];
  constructor(private productoService:ProductService) {}

  ngOnInit(): void {
    this.productoService.getAll().subscribe(
      e=>this.productos=e
    );
  }

}
