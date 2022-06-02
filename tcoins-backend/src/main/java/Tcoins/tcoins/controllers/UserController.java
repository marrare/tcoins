package Tcoins.tcoins.controllers;

import Tcoins.tcoins.entities.User;
import Tcoins.tcoins.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class UserController {
	
	@Autowired
	UserService usuarioService;

    @GetMapping("/usuario")
    public void getUsuarioByid(@RequestHeader Long id){
        return;
    }
    
    @PostMapping("/usuario")
    public void cadastrarUsuario(@RequestHeader User user){
        usuarioService.createUser(user);
    }
    
    @DeleteMapping("/usuario")
    public void deletarUsuario(@RequestHeader Long id){
        usuarioService.deleteUser(id);
    }

}
