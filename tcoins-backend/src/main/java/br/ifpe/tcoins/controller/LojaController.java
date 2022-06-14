package br.ifpe.tcoins.controller;

import java.util.List;

import br.ifpe.tcoins.service.LojaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.Loja;

@RestController
@RequestMapping("/loja")
public class LojaController {

	@Autowired
    LojaService lojaService;
	
    @GetMapping()
    public ResponseEntity<List<Loja>> getLoja(@RequestHeader int page,
                                              @RequestHeader int pageSize,
                                              @RequestHeader String buscaPorNome,
                                              @RequestHeader String buscaPorRamo){
         try {
                //em caso de não haver busca, passar null ou string vazia.

             Page<Loja> lojas = lojaService.getLojas(page, pageSize, buscaPorNome, buscaPorRamo);

             if (lojas.getSize() == 0)
                 return ResponseEntity.status(HttpStatus.NOT_FOUND).body(lojas.getContent());
             else
                 return ResponseEntity.status(HttpStatus.OK).body(lojas.getContent());

         } catch (Exception e){
             System.out.println("Erro: "+e.getMessage());
             e.printStackTrace();
             return ResponseEntity.internalServerError().build();
         }

    }

}
