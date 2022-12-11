package com.minticg28.g28mintic.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Document(value = "producto")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Producto {

    @Id
    private String id;
    private String nombre_producto;
    private float precio;
    private String categoria;
    private float descuento;
    private int cantidad_total;
    private int existencia;
    private String marca;
    
}
