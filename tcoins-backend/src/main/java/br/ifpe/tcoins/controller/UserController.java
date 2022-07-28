package br.ifpe.tcoins.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.dto.request.UserRequestDTO;
import br.ifpe.tcoins.dto.request.UserUpdateRequestDTO;
import br.ifpe.tcoins.dto.response.UserDTO;
import br.ifpe.tcoins.exception.ResourceAlreadyExistsException;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.service.UserService;


@RestController
@RequestMapping("/usuario")
public class UserController {

	@Autowired
	UserService usuarioService;

   @GetMapping("")
   public ResponseEntity<UserDTO> getUsuarioByid(@RequestHeader final Long id)  {
           User user =  usuarioService.getUserById(id);
		   if (user == null)
			    throw new ResourceNotFoundException("Usuario não encontrado");
		   return  ResponseEntity.ok(UserDTO.convertFromUser(user));

   }

   @PostMapping("")
   public ResponseEntity<?> cadastrarUsuario(@RequestBody UserRequestDTO user){
       User user1 = user.convertToUser();
       if (usuarioService.findByEmail(user.getEmail()) != null) throw new ResourceAlreadyExistsException("Email já cadastrado");
       usuarioService.createUser(user1);
       System.out.println("User '"+user1.getNome()+"' Criado");
       return ResponseEntity.status(HttpStatus.CREATED).build();
   }

   @DeleteMapping("")
   public ResponseEntity deletarUsuario(@RequestHeader final Long id) throws Exception {
          usuarioService.deleteUser(id);
       return ResponseEntity.ok().build();
   }

   @PutMapping
   public ResponseEntity atualizarUsuario(@RequestHeader final Long UserId,
                                          @RequestBody UserUpdateRequestDTO requestDTO){
       User userAtt = usuarioService.getUserById(UserId);
       if (userAtt == null)
            throw new ResourceNotFoundException("Usúario não encontrado");
       userAtt.setNome(requestDTO.getNome());
       userAtt.setImagem(requestDTO.getImagem());
       usuarioService.updateUser(userAtt);
       return ResponseEntity.ok().build();
   }

}
