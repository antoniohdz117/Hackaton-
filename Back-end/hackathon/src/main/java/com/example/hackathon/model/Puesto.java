package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "puesto")
public class Puesto {

    @Id
    @Column(name = "idpuesto", nullable = false)
    private Long idpuesto;

    @Column(length = 120, nullable = false)
    private String nombre;


}
