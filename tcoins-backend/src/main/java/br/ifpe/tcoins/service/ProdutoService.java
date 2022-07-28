package br.ifpe.tcoins.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public Page<ProdutoDTO> getAllByLojaId(Integer page, Integer pageSize, Long lojaId, String nomeProduto) {
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));
		
		if(nomeProduto.isBlank()) {
			return produtoRepository.findAllByDeletedFalseAndLoja_IdAndDeletedFalse(reqPage, lojaId).map(ProdutoDTO::convertFromProduto);
		} else {
			return produtoRepository.findByNomeContainingIgnoreCaseAndDeletedFalseAndLoja_IdAndDeletedFalse(reqPage, nomeProduto, lojaId).map(ProdutoDTO::convertFromProduto);
		}
	}
	
	public Produto getProdutoById(Long id) {
		return this.produtoRepository.findById(id).orElse(null);
	}
	
	public void createOrUpdateProduto(Produto produto) {
		this.produtoRepository.save(produto);
	}
	
	public void deleteProduto(Long id) {
		Produto produto = produtoRepository.getById(id);
		produto.setDeleted(true);
		produtoRepository.save(produto);
	}
	
}