package com.example.hackathon.model;

import jakarta.persistence.*;

@Entity
@Table (name = "usuario")
public class Usuario {

    @Id
    @Column (name = "idusuario")
    private int idusuario;

    private String nombre;
    private String paterno;
    private String materno;
    private String numerofijo;
    private String numerocelular;
    private String correo;
    private String contrasenia;


    @ManyToOne
    @JoinColumn(name ="idrol",nullable = false)
    private Rol idrol;
}
