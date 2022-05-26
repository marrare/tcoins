package Tcoins.tcoins.entities;

import java.util.Date;

public class PedidoProduto {
	
	private Long id;
	private Long pedidoId;
	private Long produtoId;
	private int qtdProduto;
	private double precoTcoins;
	private double valorRecompensa;
	private Date createdAt;
	private Date updatesAt;
	
	
	
	public PedidoProduto() {
		super();
	}

	public PedidoProduto(Long id, Long pedidoId, Long produtoId, int qtdProduto, double precoTcoins,
			double valorRecompensa, Date createdAt, Date updatesAt) {
		super();
		this.id = id;
		this.pedidoId = pedidoId;
		this.produtoId = produtoId;
		this.qtdProduto = qtdProduto;
		this.precoTcoins = precoTcoins;
		this.valorRecompensa = valorRecompensa;
		this.createdAt = createdAt;
		this.updatesAt = updatesAt;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPedidoId() {
		return pedidoId;
	}

	public void setPedidoId(Long pedidoId) {
		this.pedidoId = pedidoId;
	}

	public Long getProdutoId() {
		return produtoId;
	}

	public void setProdutoId(Long produtoId) {
		this.produtoId = produtoId;
	}

	public int getQtdProduto() {
		return qtdProduto;
	}

	public void setQtdProduto(int qtdProduto) {
		this.qtdProduto = qtdProduto;
	}

	public double getPrecoTcoins() {
		return precoTcoins;
	}

	public void setPrecoTcoins(double precoTcoins) {
		this.precoTcoins = precoTcoins;
	}

	public double getValorRecompensa() {
		return valorRecompensa;
	}

	public void setValorRecompensa(double valorRecompensa) {
		this.valorRecompensa = valorRecompensa;
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
