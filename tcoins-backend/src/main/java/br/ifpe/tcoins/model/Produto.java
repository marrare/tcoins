package br.ifpe.tcoins.model;

import java.security.Timestamp;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
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
    
    @Lob
    private byte[] imagem;
    
    @Column(columnDefinition = "TINYINT DEFAULT 0", nullable=false)
	@Type(type = "org.hibernate.type.NumericBooleanType")
    private boolean deleted;
    
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
	private Timestamp updatedAt;

	@Override
	public String toString() {
		return "Produto [id=" + id + ", loja=" + loja + ", nome=" + nome + ", descricao=" + descricao + ", precoTcoins="
				+ precoTcoins + ", valorRecompensa=" + valorRecompensa + ", imagem=" + Arrays.toString(imagem)
				+ ", deleted=" + deleted + ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
