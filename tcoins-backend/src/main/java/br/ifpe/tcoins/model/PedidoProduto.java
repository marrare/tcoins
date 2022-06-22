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
@Table(name = "pedido_produto")
public class PedidoProduto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "pedido_produto_generator")
	@SequenceGenerator(name="pedido_produto_generator", sequenceName = "pedido_produto_seq")
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "pedido_id", referencedColumnName = "id", nullable=false)
	private Pedido pedido;
	
	@ManyToOne
	@JoinColumn(name = "produto_id", referencedColumnName = "id", nullable=false)
	private Produto produto;
	
	@Column(name = "qtd_produto", nullable=false)
	private int qtdProduto;
	
	@Column(name = "preco_tcoins", columnDefinition="DECIMAL(10,2)")
	private Double precoTcoins;
	
	@Column(name = "valor_recompensa", columnDefinition="DECIMAL(10,2)")
	private Double valorRecompensa;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;
	
	@Override
	public String toString() {
		return "PedidoProduto [id=" + id + ", pedido=" + pedido + ", produto=" + produto + ", qtdProduto=" + qtdProduto
				+ ", precoTcoins=" + precoTcoins + ", valorRecompensa=" + valorRecompensa + ", createdAt=" + createdAt
				+ ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}

	public int getQtdProduto() {
		return qtdProduto;
	}

	public void setQtdProduto(int qtdProduto) {
		this.qtdProduto = qtdProduto;
	}

	public Double getPrecoTcoins() {
		return precoTcoins;
	}

	public void setPrecoTcoins(Double precoTcoins) {
		this.precoTcoins = precoTcoins;
	}

	public Double getValorRecompensa() {
		return valorRecompensa;
	}

	public void setValorRecompensa(Double valorRecompensa) {
		this.valorRecompensa = valorRecompensa;
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
