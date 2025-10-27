package com.example.hackathon.model;


import jakarta.persistence.*;

@Entity
@Table (name = "miembro")
public class Miembro {

    @Id
    @Column(name = "idmiembro", nullable = false)
    private Long idmiembro;


    @Column(length = 50, nullable = false)
    private String nombre;
    @Column(length = 50, nullable = false)
    private String paterno;
    @Column(length = 50, nullable = false)
    private String materno;
    @Column(length = 50, nullable = false)
    private String semblanza;

    @ManyToOne
    @JoinColumn(name = "idgrado", nullable = false)
    private Grado grado;

    @ManyToOne
    @JoinColumn(name = "idtipo", nullable = false)
    private Tipo tipo;
}
