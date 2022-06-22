package br.ifpe.tcoins.model;

import java.security.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="despesa_mensal")
public class DespesaMensal {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "despesa_mensal_generator")
	@SequenceGenerator(name="despesa_mensal_generator", sequenceName = "despesa_mensal_seq")
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id", nullable=false)
	private User usuario;
	
	@ManyToOne
	@JoinColumn(name = "loja_id", referencedColumnName = "id", nullable=false)
	private Loja loja;
	
	@Column(columnDefinition="DECIMAL(10,2)", nullable=false)
	private Double valor;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;

	@Override
	public String toString() {
		return "DespesaMensal [id=" + id + ", usuario=" + usuario + ", loja=" + loja + ", valor=" + valor
				+ ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUsuario() {
		return usuario;
	}

	public void setUsuario(User usuario) {
		this.usuario = usuario;
	}

	public Loja getLoja() {
		return loja;
	}

	public void setLoja(Loja loja) {
		this.loja = loja;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
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
