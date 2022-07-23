package br.ifpe.tcoins.repository;

import br.ifpe.tcoins.model.Loja;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

import java.util.List;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {
	
    public Optional<Produto> findByNome(String nome);

    public Optional<List<Produto>> findAllByLoja_Id(Long id, Pageable pageable);

    public Page<Produto> findByNomeContainingIgnoreCase(Pageable pageable, String nome);
}