package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Loja;

public interface LojaRepository extends JpaRepository<Loja, Long> {

    public Page<Loja> findAll(Pageable pageable);
    
    /*
     * é necessário o uso do countQuery e nativeQuery, quando se tem interesse de paginar junto com query customizada @Query
     */
    public Page<Loja> findByRamo_RamoContainingIgnoreCase(Pageable pageable, String ramo);

    public Page<Loja> findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCase(Pageable pageable, String nome, String ramo);
    
    public Page<Loja> findByNomeContainingIgnoreCase(Pageable pageable, String nome);

    public Loja findByNomeIgnoreCase(String nome);

    public Page<Loja> findByDono_id(Pageable pageable, Long userId);
}