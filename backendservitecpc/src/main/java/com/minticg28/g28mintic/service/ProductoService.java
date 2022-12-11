package com.minticg28.g28mintic.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import com.minticg28.g28mintic.model.Producto;
import com.minticg28.g28mintic.repository.ProductoRepocitory;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductoService {

    private final ProductoRepocitory productoRepocitory;

    //guardar
    public void save (Producto producto){
        productoRepocitory.save(producto);
    }

    //listar todos los productos
    public List<Producto> findAll(){
        return productoRepocitory.findAll();
    }

    //buscar productos por Id
    public Optional<Producto> findById(String id){
        return productoRepocitory.findById(id);
    }
    
    //eliminar por Id
    public void deleteById(String id){
        productoRepocitory.deleteById(id);
    }
}
