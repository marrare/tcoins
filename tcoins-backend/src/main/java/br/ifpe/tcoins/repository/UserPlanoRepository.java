package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.UserPlano;

public interface UserPlanoRepository extends JpaRepository<UserPlano,Long> {
	
}