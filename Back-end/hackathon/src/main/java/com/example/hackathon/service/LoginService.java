package com.example.hackathon.service;

import com.example.hackathon.dto.LoginRequest;
import com.example.hackathon.dto.LoginResponse;
import com.example.hackathon.model.Usuario;
import com.example.hackathon.repository.AcademicoRepository;

import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoginService {

    private final AcademicoRepository academicoRepository;


    //Inyeccion sin autowired por el momneto
    public LoginService(AcademicoRepository academicoRepository) {

        this.academicoRepository = academicoRepository;
    }

    public LoginResponse login(LoginRequest request) {
        boolean credencialesValidas = academicoRepository.validarCredenciales(
                request.getRfc(), request.getContrasenia());

        if (!credencialesValidas) {
            return null;
        }


        Optional<Usuario> optUsuario = academicoRepository.findUsuarioByRfc(request.getRfc());

        if (optUsuario.isEmpty()) {
            return null;
        }

        Usuario u = optUsuario.get();

        //datos del usuario
        return new LoginResponse(
                u.getIdusuario(),
                u.getNombre(),
                u.getPaterno(),
                u.getMaterno(),
                u.getNumerofijo(),
                u.getNumerocelular(),
                u.getCorreo(),
                u.getRol().getIdrol()
        );
    }
}

