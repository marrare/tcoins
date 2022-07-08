package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class Planos extends ObjetoGeral {
    
    @Column(length = 45, nullable=false)
	private String nome;

    @Column(columnDefinition="DECIMAL(10,2)", nullable=false)
    private Double preco;

    @Column(nullable=false)
    private int lojas;

    @Column(name = "produtos_por_loja", nullable=false)
    private int produtosPorLoja;

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
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
	
}
