package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "pedido_produto")
public class PedidoProduto extends ObjetoGeral {
	
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
	
}
