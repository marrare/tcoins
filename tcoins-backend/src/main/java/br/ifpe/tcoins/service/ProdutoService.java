package br.ifpe.tcoins.service;

import java.util.List;
import java.util.stream.Collectors;

import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.repository.LojaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.ifpe.tcoins.model.Produto;
import br.ifpe.tcoins.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	@Autowired
	private LojaRepository lojaRepository;
	
	public List<ProdutoDTO> getAllProdutos(int page, int pageSize){

		return this.produtoRepository.findAll(PageRequest.of(page, pageSize))
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

	public ProdutoDTO findByNome(String nome){
		return this.produtoRepository.findByNome(nome).map(ProdutoDTO::convertFromProduto).get();
	}

	public List<ProdutoDTO> getAllByLojaId(Long lojaId, int page, int pageSize) {
		return  produtoRepository.findAllByLoja_Id(lojaId, PageRequest.of(page, pageSize))
				.get()
				.stream()
				.map(ProdutoDTO::convertFromProduto)
				.collect(Collectors.toList());
	}
}
