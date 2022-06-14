package br.ifpe.tcoins.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.service.UserService;


@RestController
@RequestMapping("/usuario")
public class UserController {
	
	@Autowired
	UserService usuarioService;

//    @GetMapping("")
//    public void getUsuarioByid(@RequestHeader final Long id){
//        return;
//    }
//    
//    @PostMapping("")
//    public void cadastrarUsuario(@RequestHeader final User user){
//        usuarioService.createUser(user);
//    }
//    
//    @DeleteMapping("")
//    public void deletarUsuario(@RequestHeader final Long id){
//        usuarioService.deleteUser(id);
//    }

}
