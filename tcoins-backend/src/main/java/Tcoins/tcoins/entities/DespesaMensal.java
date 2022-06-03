package Tcoins.tcoins.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="despesa_mensal")
public class DespesaMensal {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User usuarioId;
	@ManyToOne
	@JoinColumn(name = "loja_id", referencedColumnName = "id")
	private Loja lojaId;
	
	private double valor;
	
	
	@JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
	private Date updatesAt;

	@Override
	public String toString() {
		return "DespesaMensal [id=" + id + ", usuarioId=" + usuarioId + ", lojaId=" + lojaId + ", valor=" + valor
				+ ", createdAt=" + createdAt + ", updatesAt=" + updatesAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUsuarioId() {
		return usuarioId;
	}

	public void setUsuarioId(User usuarioId) {
		this.usuarioId = usuarioId;
	}

	public Loja getLojaId() {
		return lojaId;
	}

	public void setLojaId(Loja lojaId) {
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
