package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Pedido extends ObjetoGeral {

	@ManyToOne
	@JoinColumn(name = "cliente_id", referencedColumnName = "id", nullable=false)
	private User cliente;

	@Column(name = "uso_saldo", columnDefinition = "boolean default false")
	private boolean usoSaldo;

	@Column(columnDefinition = "boolean default false")
	private boolean deleted;

	public User getCliente() {
		return cliente;
	}

	public void setCliente(User cliente) {
		this.cliente = cliente;
	}

	public boolean isUsoSaldo() {
		return usoSaldo;
	}

	public void setUsoSaldo(boolean usoSaldo) {
		this.usoSaldo = usoSaldo;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	
}
