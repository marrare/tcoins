package Tcoins.tcoins.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import Tcoins.tcoins.entities.Loja;

public interface LojaDAO extends JpaRepository<Loja, Long> {
	
	public Loja findByLoja(Loja loja);
}
