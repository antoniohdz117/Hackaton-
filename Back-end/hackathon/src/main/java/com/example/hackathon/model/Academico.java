package com.example.hackathon.model;

//
import jakarta.persistence.*;

@Entity
@Table(name = "academico")
public class Academico {

    //INICIALIAZAMOS LA CLASE


    @Id
    @Column(name = "idusuario")
    private Long idusuario;

    @Column(nullable = false, length = 13, unique = true)
    private String rfc;

    @Column(name = "idpuesto")
    private Long idpuesto;

    @Column(name = "idarea")
    private Long idarea;

    @OneToOne
    @JoinColumn(name = "idusuario", referencedColumnName = "idusuario", insertable = false, updatable = false)
    private Usuario usuario;

    // Getters y setters


    public Long getIdusuario() {
        return idusuario;
    }

    public void setIdusuario(Long idusuario) {
        this.idusuario = idusuario;
    }

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }

    public Long getIdpuesto() {
        return idpuesto;
    }

    public void setIdpuesto(Long idpuesto) {
        this.idpuesto = idpuesto;
    }

    public Long getIdarea() {
        return idarea;
    }

    public void setIdarea(Long idarea) {
        this.idarea = idarea;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}
