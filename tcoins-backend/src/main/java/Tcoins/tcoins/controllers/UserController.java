package Tcoins.tcoins.controllers;

import Tcoins.tcoins.entities.Usuario;
import Tcoins.tcoins.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class UserController {
	
	@Autowired
	UserService usuarioService;

    @GetMapping("/user/{id}")
    public void getUsuarioByid(Long id){
        return;
    }
    
    @PostMapping("/usuario")
    public void cadastrarUsuario(@RequestHeader Usuario user){
        usuarioService.createUser(user);
    }
    
    @DeleteMapping("/usuario/{id}")
    public void deletarUsuario(@RequestParam Long id){
        usuarioService.deleteUser(id);
    }

}
