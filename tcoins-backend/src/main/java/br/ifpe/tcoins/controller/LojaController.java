package br.ifpe.tcoins.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.dto.request.LojaRequestDTO;
import br.ifpe.tcoins.dto.response.LojaDTO;
import br.ifpe.tcoins.exception.ResourceAlreadyExistsException;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.repository.PlanosRepository;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.service.LojaService;
import br.ifpe.tcoins.service.RamoService;
import br.ifpe.tcoins.service.UserService;

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
	public ResponseEntity<List<LojaDTO>> getLoja(
		@RequestParam(required = true, defaultValue = "1") final Integer currentPage,
		@RequestParam(required = true, defaultValue = "10") final Integer pageSize,
		@RequestHeader(required = false, defaultValue = "") final String nomeLoja,
		@RequestHeader(required = false, defaultValue = "") final String ramoLoja) {

		Page<LojaDTO> lojas = lojaService.getLojas(currentPage, pageSize, nomeLoja, ramoLoja);

		if (lojas.getNumberOfElements() == 0) throw new ResourceNotFoundException("Not found lojas");
		
		return ResponseEntity.ok(lojas.getContent());
	}

	@PostMapping
	public ResponseEntity<?> cadastarLoja(
		@RequestHeader final Long userId,
		@RequestHeader final Long ramoId,
		@RequestBody final LojaRequestDTO lojaDto) {
		
		Loja loja = lojaDto.convertToLoja();
		loja.setDono(userService.getUserById(userId));
		loja.setRamo(ramoService.getRamoById(ramoId));
		
		if (lojaService.getLojaByNome(loja.getNome()) != null) throw new ResourceAlreadyExistsException("Loja já cadastrado");
		
		lojaService.cadastrarLoja(loja);
				
		return ResponseEntity.status(HttpStatus.CREATED).build();
	}

	@DeleteMapping
	public ResponseEntity<?> deleteLoja(@RequestHeader Long lojaId) {
		lojaService.deletarLojaById(lojaId);

		return ResponseEntity.ok().build();
	}
	
	@GetMapping("usuario")
	public ResponseEntity<List<LojaDTO>> listarLojaPorUsuario(
		@RequestHeader Integer page,
		@RequestHeader Integer pageSize,
		@RequestHeader Long userId){

		Page<LojaDTO> lojas = lojaService.getLojaByUserId(page, pageSize, userId);
		if (lojas.getNumberOfElements() == 0) throw new ResourceNotFoundException("Not found lojas");

		return  ResponseEntity.ok(lojas.getContent());
	}

}
