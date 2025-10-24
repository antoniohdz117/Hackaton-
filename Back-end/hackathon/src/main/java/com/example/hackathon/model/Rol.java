package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "rol")
public class Rol {

    @Id
    @Column (name = "idrol", nullable = false)
    private Long idrol;

    @Column(length = 20, nullable = false)
    private String rol;


}
