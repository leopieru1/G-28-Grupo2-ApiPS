package com.minticg28.g28mintic.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.minticg28.g28mintic.model.Producto;
import com.minticg28.g28mintic.service.ProductoService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://144.22.240.30")
//@RequiredArgsConstructor
public class ProductoController {
    @Autowired
    private ProductoService productoService;

    // guadar productos
    @PostMapping("/producto")
    public void save(@RequestBody Producto productos) {
        productoService.save(productos);
    }

    //Listar productos
    @GetMapping("/productos")
    public List<Producto> findAll() {
        return productoService.findAll();
    }

    //consultar producto por Id
    @GetMapping("/producto/{id}")
    public Producto findById(@PathVariable String id){
        return productoService.findById(id).get();
    }

    //Eliminar por Id
    @DeleteMapping("/producto/{id}")
    public void deleteById(@PathVariable String id){
        productoService.deleteById(id);
    }

    //Editar producto
    @PutMapping("/producto")
    public void update(@RequestBody Producto producto){
        productoService.save(producto);
    }

}
