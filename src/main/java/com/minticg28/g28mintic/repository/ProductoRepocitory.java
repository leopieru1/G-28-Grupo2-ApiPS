package com.minticg28.g28mintic.repository;
import com.minticg28.g28mintic.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;

//@CrossOrigin //permite consulta para todos los dominios en este caso 8080 y 4200
//@Repository
public interface ProductoRepocitory extends MongoRepository<Producto, String>{
    

}
