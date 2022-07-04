package br.ifpe.tcoins.controller;

import java.time.LocalDate;
import java.util.List;

import br.ifpe.tcoins.model.User;
import br.ifpe.tcoins.repository.PlanosRepository;
import br.ifpe.tcoins.repository.UserPlanoRepository;
import br.ifpe.tcoins.service.RamoService;
import br.ifpe.tcoins.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
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

	@PostMapping
	public ResponseEntity cadastarLoja(@RequestHeader(required = true) Long donoId, @RequestHeader(required = true) Long ramoId,
									   @RequestHeader(required = true) String nome, @RequestHeader(required = true) String descricao,
									   @RequestHeader(required = true) Double latitude, @RequestHeader(required = true) Double longitude,
									   @RequestHeader(required = false) Byte[] imagem ){
		try {
			if (lojaService.getLojaByNome(nome) == null){
				Loja loja = new Loja();
				loja.setDeleted(false);
				loja.setCreatedAt(LocalDate.now());
				loja.setUpdatedAt(LocalDate.now());
				loja.setDono(userService.getUserById(donoId));
				loja.setRamo(ramoService.getRamoById(ramoId));
				loja.setNome(nome); loja.setDescricao(descricao);
				loja.setImagem(imagem); loja.setLatitude(latitude); loja.setLongitude(longitude);
				lojaService.cadastrarLoja(loja);
				return ResponseEntity.ok().build();
			}else
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Nome já existe");
		}catch (Exception e){
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
	}

	@DeleteMapping
	public ResponseEntity deleteLoja(@RequestHeader Long lojaId){
		try {
			Loja loja = lojaService.getLojabyId(lojaId);
			lojaService.deletarLojaById(lojaId);
		}catch (EmptyResultDataAccessException e){
			return ResponseEntity.noContent().build();
		}
		catch (Exception e){
			e.printStackTrace();
			return ResponseEntity.internalServerError().build();
		}
		return ResponseEntity.ok().build();

	}

	@GetMapping("usuario")
	public ResponseEntity<List<Loja>> listarLojaPorUsuario(
			@RequestHeader Integer page,
			@RequestHeader Integer pageSize,
			@RequestHeader Long userId){

		List<Loja> lojas = lojaService.getLojaByUserId(page, pageSize, userId)
						.getContent();

			return  ResponseEntity.ok(lojas);
	}

}
