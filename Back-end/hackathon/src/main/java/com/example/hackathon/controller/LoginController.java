package com.example.hackathon.controller;

import com.example.hackathon.dto.LoginRequest;
import com.example.hackathon.dto.LoginResponse;
import com.example.hackathon.repository.AcademicoRepository;
import com.example.hackathon.service.LoginService;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class LoginController {

    private final LoginService loginService;

    //contructor
    public LoginController(AcademicoRepository academicoRepository) {
        this.loginService = new LoginService(academicoRepository);
    }




    @PostMapping("/login")
    public ResponseEntity<?> login(
            @Valid @RequestBody LoginRequest request,
            BindingResult result) {


        if (result.hasErrors()) {
            String mensaje = result.getAllErrors().get(0).getDefaultMessage();
            return ResponseEntity.badRequest().body(mensaje);
        }

        LoginResponse response = loginService.login(request);

        //manda el error
        if (response == null) {
            return ResponseEntity.status(401)
                    .body("{\"mensaje\": " +
                            "\"Credenciales inválidas\"" +
                            "}");
        }


        return ResponseEntity.ok(response);
        }

    }
