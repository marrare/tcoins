package br.ifpe.tcoins.controller;

import java.util.List;

import br.ifpe.tcoins.dto.request.ProdutoRequestDTO;
import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.service.LojaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.service.ProdutoService;


@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*")
public class ProdutoController {
    
    @Autowired
    private ProdutoService produtoService;
    @Autowired
    private LojaService lojaService;

    @GetMapping()
    public ResponseEntity<ProdutoDTO> getProdutoById(@RequestHeader Long id){
        ProdutoDTO produto = produtoService.findProdutoById(id);
        return ResponseEntity.ok(produto);
    }

    @PostMapping()
    public ResponseEntity cadastrarProduto(@RequestHeader Long lojaId,
                                           @RequestBody ProdutoRequestDTO produtoDto){
        Produto produto = produtoDto.convertToProduto();
        Loja loja = lojaService.getLojaById(lojaId);
        produto.setLoja(loja);
        produtoService.createProduto(produto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping()
    public ResponseEntity deletarProduto(@RequestHeader final Long id){
        produtoService.deleteProduto(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProdutoDTO>> getAllProdutos(@RequestHeader(defaultValue = "1") int page,
                                                           @RequestHeader(defaultValue = "10") int pageSize,
                                                           @RequestHeader(defaultValue = "") String pesquisa) {
            return ResponseEntity.ok(produtoService.getAllProdutos(page, pageSize, pesquisa));
    }

    @PutMapping()
    public  ResponseEntity updateProduto(@RequestHeader Long produtoId,@RequestHeader Long lojaId, @RequestBody ProdutoDTO produtoDto){
         produtoService.updateProduto(produtoId, lojaId, produtoDto);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/loja")
    public ResponseEntity<List<ProdutoDTO>> getAllByLojaId(
            @RequestHeader Long lojaId,
            @RequestHeader(defaultValue = "1") int page,
            @RequestHeader(defaultValue = "10") int pageSize){
        List<ProdutoDTO> listaProdutos = produtoService.getAllByLojaId(lojaId, page, pageSize);
        return ResponseEntity.ok(listaProdutos);
    }





}
