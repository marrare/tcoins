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
@Table(name = "receita_mensal")
public class PedidoProduto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "pedido_id", referencedColumnName = "id")
	private Pedido pedidoId;
	@ManyToOne
	@JoinColumn(name = "produto_id", referencedColumnName = "id")
	private Produto produtoId;
	@JoinColumn(name = "qtd_produto")
	private int qtdProduto;
	@JoinColumn(name = "preco_tcoins")
	private double precoTcoins;
	@JoinColumn(name = "valor_recompensa")
	private double valorRecompensa;
	
	@JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
	private Date updatesAt;
	
	
	@Override
	public String toString() {
		return "PedidoProduto [id=" + id + ", pedidoId=" + pedidoId + ", produtoId=" + produtoId + ", qtdProduto="
				+ qtdProduto + ", precoTcoins=" + precoTcoins + ", valorRecompensa=" + valorRecompensa + ", createdAt="
				+ createdAt + ", updatesAt=" + updatesAt + "]";
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public Pedido getPedidoId() {
		return pedidoId;
	}


	public void setPedidoId(Pedido pedidoId) {
		this.pedidoId = pedidoId;
	}


	public Produto getProdutoId() {
		return produtoId;
	}


	public void setProdutoId(Produto produtoId) {
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
