package br.ifpe.tcoins.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.service.LojaService;

@RestController
public class LojaController {

//	@Autowired
//	LojaService lojaService;
//	
//    @GetMapping("/")
//    public void getLojaByid(@RequestHeader Long id){
//        lojaService.getLoja(id);
//    }
//    
//    @PostMapping("/")
//    public void cadastrarLoja(@RequestHeader Loja loja){
//        lojaService.cadastrarloja(loja);
//    }
//    
//    @DeleteMapping("/")
//    public void deletarUsuario(@RequestHeader Long id){
//        lojaService.deleteLojabyId(id);
//    }

}
