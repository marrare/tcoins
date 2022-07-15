package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {
	
    public Produto findByNome(String nome);
}