package br.ifpe.tcoins.model;

import java.security.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

@Entity
public class Pedido {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne
	@JoinColumn(name = "cliente_id", referencedColumnName = "id", nullable=false)
	private User cliente;

	@Column(name = "uso_saldo", columnDefinition = "TINYINT DEFAULT 0", nullable=false)
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean usoSaldo;

	@Column(columnDefinition = "TINYINT DEFAULT 0", nullable=false)
	@Type(type = "org.hibernate.type.NumericBooleanType")
	private boolean deleted;

	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	private Timestamp updatedAt;
	
	@Override
	public String toString() {
		return "Pedido [id=" + id + ", cliente=" + cliente + ", usoSaldo=" + usoSaldo + ", deleted=" + deleted
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public Timestamp getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}

	public Timestamp getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}
	
}
