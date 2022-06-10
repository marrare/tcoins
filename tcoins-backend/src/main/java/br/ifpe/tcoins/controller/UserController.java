package br.ifpe.tcoins.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.service.UserService;


@RestController
public class UserController {
	
//	@Autowired
//	UserService usuarioService;
//
//    @GetMapping("/usuario")
//    public void getUsuarioByid(@RequestHeader Long id){
//        return;
//    }
//    
//    @PostMapping("/usuario")
//    public void cadastrarUsuario(@RequestHeader User user){
//        usuarioService.createUser(user);
//    }
//    
//    @DeleteMapping("/usuario")
//    public void deletarUsuario(@RequestHeader Long id){
//        usuarioService.deleteUser(id);
//    }

}
