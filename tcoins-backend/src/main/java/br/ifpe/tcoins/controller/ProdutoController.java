package br.ifpe.tcoins.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.service.ProdutoService;

@RestController
@RequestMapping("/produto")
public class ProdutoController {
    
    @Autowired
    private ProdutoService produtoService;

    @GetMapping("")
    public ResponseEntity<Produto> getProdutoById(@RequestHeader final Long id){
        try{
            return ResponseEntity.ok(produtoService.buscarProdutoPorId(id));
        } catch(Exception e){
             e.printStackTrace();
             return ResponseEntity.internalServerError().build();
        }
    }

    public ResponseEntity cadastrarProduto(@RequestHeader final Produto produto){
        Produto produtoValidado = produtoService.findByNome(produto.getNome());
        if(produtoValidado != null)
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Produto já cadastrado");
        produtoService.criarProduto(produto);
        return ResponseEntity.ok().build();
    }
    
    @DeleteMapping("")
    public ResponseEntity deletarUsuario(@RequestHeader final Long id){
       try {
           produtoService.apagarProduto(id);
       } catch (Exception e){
           System.out.println("Erro: " + e.getMessage());
           e.printStackTrace();
           return ResponseEntity.internalServerError().build();
       }
        return ResponseEntity.ok().build();
    }


}
