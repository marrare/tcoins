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
	
	public List<Produto> getAllProdutos(){
		
		return this.produtoRepository.findAll();
	}
	
	public void createProduto(Produto produto) {
		
		this.produtoRepository.save(produto);
	}
	
	public void updateProduto(Produto produto) {
		this.produtoRepository.save(produto);
	}
	public void deleteProduto(Long id) {
		this.produtoRepository.deleteById(id);
	}
	
	public Produto findProdutoById(Long id) {
		
		return this.produtoRepository.findById(id).get();
	}

	public Produto findByNome(String nome){
		return this.produtoRepository.findByNome(nome);
	}
}
