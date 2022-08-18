package br.ifpe.tcoins.controller;

import java.util.List;

import br.ifpe.tcoins.dto.request.CardPaymentDTO;
import br.ifpe.tcoins.dto.response.PaymentResponseDTO;
import br.ifpe.tcoins.service.PagamentoService;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
import br.ifpe.tcoins.service.LojaService;
import br.ifpe.tcoins.service.RamoService;
import br.ifpe.tcoins.service.UserService;

import javax.validation.Valid;

@RestController
@RequestMapping("/loja")
@CrossOrigin(origins = "*")
public class LojaController {

	@Autowired
	LojaService lojaService;
	@Autowired
	UserService userService;
	@Autowired
	RamoService ramoService;
	@Autowired
	PagamentoService pagamentoService;

	@GetMapping
	public ResponseEntity<List<LojaDTO>> getAll(
		@RequestParam(required = false) final Integer currentPage,
		@RequestParam(required = false) final Integer pageSize,
		@RequestHeader(required = false, defaultValue = "") final String nomeLoja,
		@RequestHeader(required = false, defaultValue = "") final String ramoLoja) {

		Page<LojaDTO> lojas = lojaService.getLojas(currentPage, pageSize, nomeLoja, ramoLoja);
		if (lojas.getNumberOfElements() == 0) throw new ResourceNotFoundException("Not found lojas");
		
		String totalPages = String.valueOf(lojas.getTotalPages());
		return ResponseEntity.ok().header("totalPages", totalPages).body(lojas.getContent());
	}
	
	@GetMapping("info")
	public ResponseEntity<LojaDTO> getLoja(@RequestHeader final Long lojaId) {
		Loja loja = lojaService.getLojaById(lojaId);
		
		if(loja == null) throw new ResourceNotFoundException("Loja not found");
		
		LojaDTO lojaDto = LojaDTO.convertFromLoja(loja);
		return ResponseEntity.ok(lojaDto);
	}

	@PostMapping
	public ResponseEntity cadastarLoja(
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
	public ResponseEntity deleteLoja(@RequestHeader final Long lojaId) {
		lojaService.deletarLojaById(lojaId);

		return ResponseEntity.ok().build();
	}
	
	@GetMapping("usuario")
	public ResponseEntity<List<LojaDTO>> listarLojaPorUsuario(
		@RequestHeader(required = false) final Integer page,
		@RequestHeader(required = false) final Integer pageSize,
		@RequestHeader final Long userId){

		Page<LojaDTO> lojas = lojaService.getLojaByUserId(page, pageSize, userId);
		if (lojas.getNumberOfElements() == 0) throw new ResourceNotFoundException("Not found lojas");

		return  ResponseEntity.ok(lojas.getContent());
	}

	@PostMapping("/pay")
	public ResponseEntity<PaymentResponseDTO> processPayment(@RequestBody @Valid CardPaymentDTO cardPaymentDTO) throws MPException {
		PaymentResponseDTO payment = pagamentoService.processPayment(cardPaymentDTO);
		return ResponseEntity.status(HttpStatus.CREATED).body(payment);
	}

}
