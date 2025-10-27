package com.example.hackathon.repository;

import com.example.hackathon.model.Academico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.Optional;

@Repository
public interface AcademicoRepository extends JpaRepository<Academico, Long> {

    //Conuslta sql para validar credenciales
    //INVESTIGAR EL SELECT
    @Query(value = "SELECT CASE WHEN COUNT(*) > 0 THEN TRUE ELSE FALSE END " +
            "FROM academico a " +
            "JOIN usuario u ON a.idusuario = u.idusuario " +
            "WHERE a.rfc = :rfc AND u.contrasenia = :contrasenia",
            nativeQuery = true)
    boolean validarCredenciales(@Param("rfc") String rfc, @Param("contrasenia") String contrasenia);

}
