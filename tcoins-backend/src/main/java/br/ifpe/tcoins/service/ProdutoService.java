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
	
	public Page<ProdutoDTO> getAllByLojaId(Integer page, Integer pageSize, Long lojaId) {
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize, Sort.by(Sort.Direction.ASC, "nome"));
		// TODO - Não retornar produtos deletadas
		return produtoRepository.findAllByLoja_Id(lojaId, reqPage).map(ProdutoDTO::convertFromProduto);
	}
	
	public Produto getProdutoById(Long id) {
		// TODO - Não retornar produtos deletadas
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
