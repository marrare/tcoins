package Tcoins.tcoins.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import Tcoins.tcoins.entities.Loja;
import Tcoins.tcoins.services.LojaService;
import Tcoins.tcoins.services.UserService;

@RestController
public class lojaController {

	@Autowired
	UserService usuarioService;
	
	@Autowired
	LojaService lojaService;
	
    @GetMapping("/lojas")
    public void getLojaByid(@RequestHeader Long id){
        lojaService.getLojaById(id);
    }
    
    @PostMapping("/loja")
    public void cadastrarLoja(@RequestHeader Loja loja){
        lojaService.cadastrarloja(loja);
    }
    
    @DeleteMapping("/loja")
    public void deletarUsuario(@RequestHeader Long id){
        lojaService.deleteLojabyId(id);
    }
	
}
