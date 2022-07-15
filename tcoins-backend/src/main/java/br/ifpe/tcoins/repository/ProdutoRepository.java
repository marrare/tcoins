package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {
	
    public Optional<Produto> findByNome(String nome);
}