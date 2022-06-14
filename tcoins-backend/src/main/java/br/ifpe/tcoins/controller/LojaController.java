package br.ifpe.tcoins.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.service.LojaService;

@RestController
@RequestMapping("/loja")
public class LojaController {

	@Autowired
	LojaService lojaService;
	
    @GetMapping("")
    public ResponseEntity<List<Loja>> getLoja(){
         List<Loja> lojas = lojaService.getLojas();
         
	     if(lojas.size() == 0) return ResponseEntity.status(HttpStatus.NOT_FOUND).body(lojas);
	     else return ResponseEntity.status(HttpStatus.OK).body(lojas);
    }

}
