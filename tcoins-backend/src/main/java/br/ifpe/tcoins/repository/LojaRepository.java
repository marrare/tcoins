package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Loja;

public interface LojaRepository extends JpaRepository<Loja, Long> {
	
//	public Loja findByLoja(Loja loja);
}
