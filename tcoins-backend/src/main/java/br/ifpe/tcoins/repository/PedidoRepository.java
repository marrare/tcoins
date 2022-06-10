package br.ifpe.tcoins.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ifpe.tcoins.model.Pedido;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}