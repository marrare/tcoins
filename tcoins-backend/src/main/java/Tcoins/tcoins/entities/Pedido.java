package Tcoins.tcoins.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "created_at", referencedColumnName = "id")
	private User clienteId;
	@JoinColumn(name = "uso_saldo")
	private int usoSaldo;
	
	private int deleted;
	
	@JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
	private Date updatedAt;

	@Override
	public String toString() {
		return "Pedido [id=" + id + ", clienteId=" + clienteId + ", usoSaldo=" + usoSaldo + ", deleted=" + deleted
				+ ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getClienteId() {
		return clienteId;
	}

	public void setClienteId(User clienteId) {
		this.clienteId = clienteId;
	}

	public int getUsoSaldo() {
		return usoSaldo;
	}

	public void setUsoSaldo(int usoSaldo) {
		this.usoSaldo = usoSaldo;
	}

	public int getDeleted() {
		return deleted;
	}

	public void setDeleted(int deleted) {
		this.deleted = deleted;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(Date updatedAt) {
		this.updatedAt = updatedAt;
	}
	
	

	
	
}
