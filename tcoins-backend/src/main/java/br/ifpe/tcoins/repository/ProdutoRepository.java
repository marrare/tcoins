package br.ifpe.tcoins.repository;

import br.ifpe.tcoins.model.Loja;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

import java.util.List;
import java.util.Optional;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

    public Page<Produto> findAllByLoja_IdAndDeletedFalse( Pageable pageable, Long id);

    public Page<Produto> findByNomeContainingIgnoreCaseAndDeletedFalse(Pageable pageable, String nome);
}