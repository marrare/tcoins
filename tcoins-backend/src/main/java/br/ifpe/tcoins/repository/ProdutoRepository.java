package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

    public Page<Produto> findAllByLoja_Id(Long id, Pageable pageable);
}