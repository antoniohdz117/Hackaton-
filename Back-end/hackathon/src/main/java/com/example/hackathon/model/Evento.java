package com.example.hackathon.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table (name = "evento")
public class Evento {

    @Id
    @Column(name = "idevento", nullable = false)
    private Long idEvento;

    @Column(length = 150, nullable = false)
    private String nombre;

    @Column(nullable = false)
    private LocalDateTime horaincio;

    @Column(nullable = false)
    private LocalDateTime horafinal;

    @Column(nullable = false)
    private LocalDate fechainicio;

    @Column(nullable = false)
    private LocalDate fechafin;

    @ManyToOne
    @JoinColumn(name = "idcategoria", nullable = false)
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "idmegaevento")
    private Evento megaevento;

}
