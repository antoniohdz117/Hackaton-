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



    /*
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        boolean ok = loginService.validarCredenciales(request.rfc, request.contrasenia);
        return ok ? "ok" : "error";

    }

     */

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid @RequestBody LoginRequest request,
            BindingResult result) {

        // 🧩 Validación de campos vacíos
        if (result.hasErrors()) {
            String mensaje = result.getAllErrors().get(0).getDefaultMessage();
            return ResponseEntity.badRequest().body(new LoginResponse(false, mensaje));
        }

        // 🧩 Validación en base de datos
        boolean ok = loginService.validarCredenciales(request.getRfc(), request.getContrasenia());

        if (ok) {
            //Se deben regresar los campos de los datos del usuario autenficado
            return ResponseEntity.ok(new LoginResponse(true, "Login exitoso"));
        } else {
            return ResponseEntity.status(401).body(new LoginResponse(false, "Credenciales inválidas"));
        }
    }

}
