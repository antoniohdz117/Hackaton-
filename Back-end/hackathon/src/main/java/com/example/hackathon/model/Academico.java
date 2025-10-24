package com.example.hackathon.model;

//
import jakarta.persistence.*;

@Entity
@Table(name = "academico")
public class Academico {

    @Id
    @Column(name = "idusuario")
    private Long idUsuario;

    @Column(nullable = false, length = 13, unique = true)
    private String rfc;

    @Column(name = "idpuesto")
    private Long idPuesto;

    @Column(name = "idarea")
    private Long idArea;

    @OneToOne
    @JoinColumn(name = "idUsuario", referencedColumnName = "idUsuario", insertable = false, updatable = false)
    private Usuario usuario;

    // Getters y setters
    // ...
}
