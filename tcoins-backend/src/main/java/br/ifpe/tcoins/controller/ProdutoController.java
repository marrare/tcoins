package br.ifpe.tcoins.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.dto.request.ProdutoRequestDTO;
import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.exception.ResourceNotFoundException;
import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.service.LojaService;
import br.ifpe.tcoins.service.ProdutoService;


@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*")
public class ProdutoController {
    
    @Autowired
    private ProdutoService produtoService;
    @Autowired
    private LojaService lojaService;

    @GetMapping
    public ResponseEntity<List<ProdutoDTO>> getProdutos(
		@RequestParam(required = false) final Integer currentPage,
		@RequestParam(required = false) final Integer pageSize,
		@RequestHeader(required = true) final Long lojaId,
		@RequestHeader(required = false, defaultValue = "") final String nomeProduto) {
    	
        Page<ProdutoDTO> produtos = produtoService.getAllByLojaId(currentPage, pageSize, lojaId, nomeProduto);
        if (produtos.getNumberOfElements() == 0) throw new ResourceNotFoundException("Not found produtos");
        
        return ResponseEntity.ok(produtos.getContent());
    }
    
    @GetMapping("info")
    public ResponseEntity<ProdutoDTO> getProdutoById(@RequestHeader final Long lojaId){
        Produto produto = produtoService.getProdutoById(lojaId);
        
        if(produto == null) throw new ResourceNotFoundException("produto not found");
        
        ProdutoDTO produtoDto = ProdutoDTO.convertFromProduto(produto);
        return ResponseEntity.ok(produtoDto);
    }

    @PostMapping
    public ResponseEntity cadastrarProduto(
		@RequestHeader final Long lojaId, 
		@RequestBody final ProdutoRequestDTO produtoDto){
    	
        Produto produto = produtoDto.convertToProduto();
        produto.setLoja(lojaService.getLojaById(lojaId));
        
        produtoService.createOrUpdateProduto(produto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping
    public ResponseEntity deletarProduto(@RequestHeader final Long id){
        produtoService.deleteProduto(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping
    public ResponseEntity updateProduto(
		@RequestHeader final Long produtoId,
		@RequestHeader final Long lojaId, 
		@RequestBody final ProdutoDTO produtoDto){
    	
    	Produto produto = produtoDto.convertToProduto();
		produto.setId(produtoId);
		produto.setLoja(lojaService.getLojaById(lojaId));
    	
        produtoService.createOrUpdateProduto(produto);
        return ResponseEntity.ok().build();
    }
    
}