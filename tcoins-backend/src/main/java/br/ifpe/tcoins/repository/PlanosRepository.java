package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Planos;

public interface PlanosRepository extends JpaRepository<Planos, Long> {
	
}