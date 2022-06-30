package br.ifpe.tcoins.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.ifpe.tcoins.model.Loja;

public interface LojaRepository extends JpaRepository<Loja, Long> {

    public Page<Loja> findAll(Pageable pageable);
    
    /*
     * é necessário o uso do countQuery e nativeQuery, quando se tem interesse de paginar junto com query customizada @Query
     */
//    @Query(value = "SELECT * FROM loja l JOIN loja_ramos lr ON l.ramo_id = lr.id WHERE lr.ramo like :ramo",
//		countQuery = "SELECT count(*) FROM loja l JOIN loja_ramos lr ON l.ramo_id = lr.id WHERE lr.ramo like :ramo",
//	    nativeQuery = true)
    public Page<Loja> findByRamo_RamoContainingIgnoreCase(Pageable pageable, String ramo);

    public Page<Loja> findByNomeContainingIgnoreCaseAndRamo_RamoContainingIgnoreCase(Pageable pageable, String nome, String ramo);
    
    public Page<Loja> findByNomeContainingIgnoreCase(Pageable pageable, String nome);

    public Loja findByNomeIgnoreCase(String nome);
}