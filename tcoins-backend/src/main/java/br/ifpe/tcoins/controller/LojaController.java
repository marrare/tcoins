package br.ifpe.tcoins.controller;

import java.util.List;

import br.ifpe.tcoins.repository.PlanosRepository;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.service.RamoService;
import br.ifpe.tcoins.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.service.LojaService;

@RestController
@RequestMapping("/loja")
public class LojaController {

	@Autowired
	LojaService lojaService;
	@Autowired
	UserService userService;
	@Autowired
	RamoService ramoService;
	@Autowired
	PlanosRepository planosRepository;
	@Autowired
	UserPlanoRepository userPlanoRepository;


	@GetMapping()
	public ResponseEntity<List<Loja>> getLoja(
		@RequestParam(required = true, defaultValue = "1") final Integer currentPage,
		@RequestParam(required = true, defaultValue = "10") final Integer pageSize,
		@RequestHeader(required = false, defaultValue = "") final String nomeLoja,
		@RequestHeader(required = false, defaultValue = "") final String ramoLoja) {
		try {
			Page<Loja> lojas = lojaService.getLojas(currentPage, pageSize, nomeLoja, ramoLoja);

			if (lojas.getNumberOfElements() == 0) {
				System.out.println("nada encontrado");
				return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
			} else {
				return ResponseEntity.status(HttpStatus.OK).body(lojas.getContent());
			}
		} catch (Exception e) {
			System.out.println("Erro: " + e.getMessage());
			e.printStackTrace();
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		}

	}

}
