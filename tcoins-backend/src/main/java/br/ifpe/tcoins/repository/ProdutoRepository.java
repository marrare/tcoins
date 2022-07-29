package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Produto;

public interface ProdutoRepository extends JpaRepository<Produto,Long> {

    public Page<Produto> findAllByDeletedFalseAndLoja_IdAndDeletedFalse( Pageable pageable, Long id);

    public Page<Produto> findByNomeContainingIgnoreCaseAndDeletedFalseAndLoja_IdAndDeletedFalse(Pageable pageable, String nome, Long lojaId);
}