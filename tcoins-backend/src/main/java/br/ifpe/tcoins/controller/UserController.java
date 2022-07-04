package br.ifpe.tcoins.controller;

import br.ifpe.tcoins.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ifpe.tcoins.service.UserService;
import java.util.List;


@RestController
@RequestMapping("/usuario")
public class UserController {
	
	@Autowired
	UserService usuarioService;

    @GetMapping("")
    public ResponseEntity<User> getUsuarioByid(@RequestHeader final Long id){
        try {
            return ResponseEntity.ok(usuarioService.getUserById(id));
        } catch (Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("")
    public ResponseEntity cadastrarUsuario(@RequestHeader final User user){
        User userMail = usuarioService.findByEmail(user.getEmail());
        if(userMail != null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Email já cadastrado");
        usuarioService.createUser(user);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("")
    public ResponseEntity deletarUsuario(@RequestHeader final Long id){
       try {
           usuarioService.deleteUser(id);
       } catch (Exception e){
           System.out.println("Erro: " + e.getMessage());
           e.printStackTrace();
           return ResponseEntity.internalServerError().build();
       }
        return ResponseEntity.ok().build();
    }

	@GetMapping("todos")
	public ResponseEntity<List<User>> getAllUsers(int page, int pageSize){
        try {
           ResponseEntity.ok(usuarioService.getAllUser(page,pageSize).getContent());
        }catch (Exception e ){
            e.printStackTrace();
        }
        return ResponseEntity.internalServerError().build();
	}

    @PostMapping("login")
    public ResponseEntity login(@RequestHeader String email, @RequestHeader String senha){
        User usuario = usuarioService.findByEmail(email);
        if (usuario.getSenha().equals(senha))
            return ResponseEntity.ok(usuario);
        return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
    }

}
