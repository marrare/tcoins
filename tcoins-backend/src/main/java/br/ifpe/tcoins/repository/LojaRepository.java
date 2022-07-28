package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Loja;

public interface LojaRepository extends JpaRepository<Loja, Long> {

    public Page<Loja> findAll(Pageable pageable);
    
    public Page<Loja> findByRamo_RamoContainingIgnoreCaseAndDeletedFalse(Pageable pageable, String ramo);

    public Page<Loja> findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCaseAndDeletedFalse(Pageable pageable, String nome, String ramo);
    
    public Page<Loja> findByNomeContainingIgnoreCaseAndDeletedFalse(Pageable pageable, String nome);

    public Loja findByNomeIgnoreCaseAndDeletedFalse(String nome);

    public Page<Loja> findByDono_idAndDeletedFalse(Pageable pageable, Long userId);

    public Loja findByIdAndDeletedFalse(Long id);

    public Page<Loja> findByDeletedFalse(Pageable pageable);
}