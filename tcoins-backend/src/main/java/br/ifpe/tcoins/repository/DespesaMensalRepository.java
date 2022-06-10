package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.DespesaMensal;

public interface DespesaMensalRepository extends JpaRepository<DespesaMensal, Long> {

}