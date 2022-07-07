package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import org.hibernate.annotations.Type;

@Entity
public class Loja extends ObjetoGeral {
	
	@ManyToOne
	@JoinColumn(name = "dono_id", referencedColumnName = "id", nullable=false)
	private User dono;
	
	@ManyToOne
	@JoinColumn(name = "ramo_id", referencedColumnName = "id", nullable=false)
	private LojaRamos ramo;
	
	@Column(length = 45, unique = true, nullable=false)
	private String nome;
	
	@Type(type="org.hibernate.type.TextType")
	private String descricao;
	
	@Column(nullable=false, columnDefinition="DECIMAL(10,8)")
	private Double latitude;
	
	@Column(nullable=false, columnDefinition="DECIMAL(11,8)")
	private Double longitude;
	
	private Byte[] imagem;
	
	@Column(columnDefinition = "boolean default false")
	private boolean deleted;

	public User getDono() {
		return dono;
	}

	public void setDono(User dono) {
		this.dono = dono;
	}

	public LojaRamos getRamo() {
		return ramo;
	}

	public void setRamo(LojaRamos ramo) {
		this.ramo = ramo;
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

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public Byte[] getImagem() {
		return imagem;
	}

	public void setImagem(Byte[] imagem) {
		this.imagem = imagem;
	}

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}

}
