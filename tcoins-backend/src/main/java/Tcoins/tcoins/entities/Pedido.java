package Tcoins.tcoins.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pedido {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long clienteId;
	
	private int usoSaldo;
	
	private int deleted;
	
	private Date createdAt;
	
	private Date updatedAt;
	
	

	public Pedido() {
		super();
	}

	public Pedido(Long id, Long clienteId, int usoSaldo, int deleted, Date createdAt, Date updatedAt) {
		super();
		this.id = id;
		this.clienteId = clienteId;
		this.usoSaldo = usoSaldo;
		this.deleted = deleted;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getClienteId() {
		return clienteId;
	}

	public void setClienteId(Long clienteId) {
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
