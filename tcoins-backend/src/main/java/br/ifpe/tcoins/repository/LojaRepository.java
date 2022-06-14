package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Loja;

public interface LojaRepository extends JpaRepository<Loja, Long> {

    public Page<Loja> findAll(Pageable pageable, Sort sort);

    public  Page<Loja> findAllbyNomeContains(Pageable pageable, String busca);

    public Page<Loja> findAllByRamoContains(Pageable pageable);
}