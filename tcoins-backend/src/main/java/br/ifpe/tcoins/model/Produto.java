package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

@Entity
public class Produto extends ObjetoGeral {
    
    @ManyToOne
    @JoinColumn(name = "loja_id", referencedColumnName = "id", nullable=false)
    private Loja loja;
    
    @Column(length = 45, nullable=false)
    private String nome;
    
    @Column(nullable=false)
    @Type(type = "org.hibernate.type.TextType")
    private String descricao;
    
    @Column(name = "preco_tcoins", columnDefinition="DECIMAL(10,2)")
    private Double precoTcoins;
    
    @Column(name = "valor_recompensa", columnDefinition="DECIMAL(10,2)")
    private Double valorRecompensa;
    
    private byte[] imagem;
    
    @Column(columnDefinition = "boolean default false")
    private boolean deleted;

	public Loja getLoja() {
		return loja;
	}

	public void setLoja(Loja loja) {
		this.loja = loja;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
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

	public byte[] getImagem() {
		return imagem;
	}

	public void setImagem(byte[] imagem) {
		this.imagem = imagem;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

}
