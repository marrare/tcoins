package br.ifpe.tcoins.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.service.LojaService;

@RestController
@RequestMapping("/loja")
public class LojaController {

	@Autowired
	LojaService lojaService;

	@GetMapping()
	public ResponseEntity<List<Loja>> getLoja(
		@RequestHeader final int page,
		@RequestHeader final int pageSize,
		@RequestHeader(required = false, defaultValue = "") final String nomeProduto, 
		@RequestHeader(required = false, defaultValue = "") final String ramoProduto) {
		try {
			Page<Loja> lojas = lojaService.getLojas(page, pageSize, nomeProduto, ramoProduto);

			if (lojas.getTotalElements() == 0)
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(lojas.getContent());
			else
				return ResponseEntity.status(HttpStatus.OK).body(lojas.getContent());

		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}

	}

}
