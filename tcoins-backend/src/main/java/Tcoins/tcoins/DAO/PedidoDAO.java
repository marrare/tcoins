package Tcoins.tcoins.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import Tcoins.tcoins.entities.Pedido;

public interface PedidoDAO extends JpaRepository<Pedido, Long> {

}
