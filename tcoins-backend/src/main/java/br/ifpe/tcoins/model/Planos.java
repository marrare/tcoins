package br.ifpe.tcoins.model;

import java.security.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Planos {
	
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "planos_generator")
	@SequenceGenerator(name="planos_generator", sequenceName = "planos_seq")
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    
    @Column(columnDefinition="DECIMAL(10,2)", nullable=false)
    private Double preco;
    
    @Column(nullable=false)
    private int lojas;
    
    @Column(name = "produtos_por_loja", nullable=false)
    private int produtosPorLoja;
    
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;

    @Override
	public String toString() {
		return "Planos [id=" + id + ", preco=" + preco + ", lojas=" + lojas + ", produtosPorLoja=" + produtosPorLoja
				+ ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Double getPreco() {
		return preco;
	}

	public void setPreco(Double preco) {
		this.preco = preco;
	}

	public int getLojas() {
		return lojas;
	}

	public void setLojas(int lojas) {
		this.lojas = lojas;
	}

	public int getProdutosPorLoja() {
		return produtosPorLoja;
	}

	public void setProdutosPorLoja(int produtosPorLoja) {
		this.produtosPorLoja = produtosPorLoja;
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
