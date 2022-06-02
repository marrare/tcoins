package Tcoins.tcoins.DAO;

import Tcoins.tcoins.entities.Produto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProdutoDAO extends JpaRepository<Produto,Long> {
}
