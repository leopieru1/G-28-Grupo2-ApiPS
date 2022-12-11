import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url:string="http://144.22.240.30:8080/servitecpc/api/productos"

  constructor(private http:HttpClient) {
   
   }
   //Vamos a hacer metodo para obtener productos del backend para mostrar en el frontend.
   getAll():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
   }
   //Vamos a hacer metodo para crear el producto.
   create(producto:Producto):Observable<Producto>{
    return this.http.post<Producto>(this.url, producto);
   }
   // Vamos a crear un metodo para obtener un producto.
   get(id:string):Observable<Producto>{
    return this.http.get<Producto>(this.url+'/'+id);
   }
   //vamos a hacer metodo para actualizar un producto.
   update(producto:Producto):Observable<Producto>{
    return this.http.put<Producto>(this.url, producto);
   }
   //Vamos a hacer el metodo para eliminar un producto.
   delete(id:string):Observable<Producto>{
    return this.http.delete<Producto>(this.url+'/'+id);
   }
}
