package br.ifpe.tcoins.service;

import java.util.List;
import java.util.stream.Collectors;

import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.repository.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private LojaRepository lojaRepository;
	
	public List<ProdutoDTO> getAllProdutos(Integer page, Integer pageSize, String pesquisa){
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize);
		if (pesquisa.isBlank())
			return this.produtoRepository
					.findAll(PageRequest.of(page -1 , pageSize))
					.map(ProdutoDTO::convertFromProduto)
					.getContent();
		else
			return this.produtoRepository

					.findByNomeContainingIgnoreCaseAndDeletedFalse(reqPage, pesquisa)
					.map(ProdutoDTO::convertFromProduto)
					.getContent();
	}
	
	public void createProduto(Produto produto) {
		
		this.produtoRepository.save(produto);
	}
	
	public void updateProduto(Long produtoID, Long lojaId, ProdutoDTO produtoDTO) {

		Produto produto = produtoDTO.convertToProduto();
		produto.setId(produtoID);
		produto.setLoja(lojaRepository.findById(lojaId).get());
		this.produtoRepository.save(produto);
	}
	public void deleteProduto(Long id) {
		Produto produto = produtoRepository.findById(id).get();
		produto.setDeleted(true);
		produtoRepository.save(produto);
	}
	
	public ProdutoDTO findProdutoById(Long id) {
		
		return this.produtoRepository.findById(id).map(
				ProdutoDTO::convertFromProduto).get();
	}

	public List<ProdutoDTO> findByNome(Integer page, Integer pageSize, String nome){
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize);
		return this.produtoRepository.findByNomeContainingIgnoreCaseAndDeletedFalse(reqPage, nome).map(ProdutoDTO::convertFromProduto).getContent();
	}

	public List<ProdutoDTO> getAllByLojaId(Long lojaId, Integer page, Integer pageSize) {
		Pageable reqPage = page == null ? Pageable.unpaged() : PageRequest.of(page - 1, pageSize);
		return  produtoRepository.findAllByLoja_IdAndDeletedFalse(reqPage, lojaId)
				.map(ProdutoDTO::convertFromProduto).getContent();
	}
}
