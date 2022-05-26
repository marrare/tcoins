package Tcoins.tcoins.entities;

import java.text.DateFormat;
import java.util.Date;

public class DespesaMensal {

	private Long id;
	
	private Long usuarioId;
	
	private Long lojaId;
	
	private double valor;
	
	
	private Date createdAt;
	
	private Date updatesAt;
	
	
	
	public DespesaMensal() {
		super();
	}

	public DespesaMensal(Long id, Long usuarioId, Long lojaId, double valor, Date createdAt, Date updatesAt) {
		super();
		this.id = id;
		this.usuarioId = usuarioId;
		this.lojaId = lojaId;
		this.valor = valor;
		this.createdAt = createdAt;
		this.updatesAt = updatesAt;
	}

	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}

	public Long getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(Long usuarioId) {
		this.usuarioId = usuarioId;
	}

	public Long getLojaId() {
		return lojaId;
	}

	public void setLojaId(Long lojaId) {
		this.lojaId = lojaId;
	}

	public double getValor() {
		return valor;
	}

	public void setValor(double valor) {
		this.valor = valor;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public Date getUpdatesAt() {
		return updatesAt;
	}

	public void setUpdatesAt(Date updatesAt) {
		this.updatesAt = updatesAt;
	}
	
	
}
