package com.example.hackathon.service;

import com.example.hackathon.model.Academico;
import com.example.hackathon.repository.AcademicoRepository;

import org.springframework.stereotype.Service;

@Service
public class LoginService {

    private final AcademicoRepository academicoRepository;

    //Inyeccion sin autowired por el momneto
    public LoginService(AcademicoRepository academicoRepository) {
        this.academicoRepository = academicoRepository;
    }

    public boolean validarCredenciales(String rfc, String contrasenia) {
        return academicoRepository.validarCredenciales(rfc, contrasenia);
    }

}
