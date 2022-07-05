package br.ifpe.tcoins.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public List<Produto> listarProdutos(){
		
		return this.produtoRepository.findAll();
	}
	
	public void criarProduto(Produto produto) {
		
		this.produtoRepository.save(produto);
	}
	
	public void alterarProduto(Produto produto) {
		
		this.produtoRepository.save(produto);
	}
	
	public void apagarProduto(Long id) {
		
		this.produtoRepository.deleteById(id);
		
	}
	
	public void buscarProdutoPorId(Long id) {
		
		this.produtoRepository.findById(id).get();
	}
}
