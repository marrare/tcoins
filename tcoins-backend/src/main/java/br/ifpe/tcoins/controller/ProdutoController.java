package br.ifpe.tcoins.controller;

import java.util.List;

import br.ifpe.tcoins.dto.response.ProdutoDTO;
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

    @GetMapping("")
    public ResponseEntity<ProdutoDTO> getProdutoById(@RequestHeader Long id){
        ProdutoDTO produto = produtoService.findProdutoById(id);
        return ResponseEntity.ok(produto);
    }

    public ResponseEntity cadastrarProduto(@RequestHeader final Produto produto){
        ProdutoDTO produtoValidado = produtoService.findByNome(produto.getNome());
        if(produtoValidado != null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Produto já cadastrado");
        produtoService.createProduto(produto);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("")
    public ResponseEntity deletarUsuario(@RequestHeader final Long id){
       try {
           produtoService.deleteProduto(id);
       } catch (Exception e){
           System.out.println("Erro: " + e.getMessage());
           e.printStackTrace();
           return ResponseEntity.internalServerError().build();
       }
        return ResponseEntity.ok().build();
    }

    @GetMapping("")
    public ResponseEntity<List<Produto>> getMethodName(int page, int pageSize) {
        try{
            return ResponseEntity.ok(produtoService.getAllProdutos());
        } catch(Exception e){
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }

    }





}
