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
public class Loja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", columnDefinition = "serial", updatable = false, nullable = false)
	private Long id;
	
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
	
	@Lob
	private Byte[] imagem;
	
	@Column(columnDefinition = "boolean default true", nullable=false)
	private boolean deleted;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;
	
	@Override
	public String toString() {
		return "Loja [id=" + id + ", dono=" + dono + ", ramo=" + ramo + ", nome=" + nome + ", descricao=" + descricao
				+ ", latitude=" + latitude + ", longitude=" + longitude + ", imagem=" + Arrays.toString(imagem)
				+ ", deleted=" + deleted + ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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
