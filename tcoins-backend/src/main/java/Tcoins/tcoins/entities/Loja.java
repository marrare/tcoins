package Tcoins.tcoins.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Loja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	private Long donoId;
	
	private Long ramoId;
	
	private String nome;
	
	private String descricao;
	
	private double longitude;
	
	private double latitude;
	
	@Lob
	private Byte[] imagem;
	
	private int deleted;
	
	private Date createdAt;
	
	private Date updatesAt;
	
	

	public Loja() {
		super();
	}

	public Loja(Long id, Long donoId, Long ramoId, String nome, String descricao, double longitude, double latitude,
			Byte[] imagem, int deleted, Date createdAt, Date updatesAt) {
		super();
		Id = id;
		this.donoId = donoId;
		this.ramoId = ramoId;
		this.nome = nome;
		this.descricao = descricao;
		this.longitude = longitude;
		this.latitude = latitude;
		this.imagem = imagem;
		this.deleted = deleted;
		this.createdAt = createdAt;
		this.updatesAt = updatesAt;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public Long getDonoId() {
		return donoId;
	}

	public void setDonoId(Long donoId) {
		this.donoId = donoId;
	}

	public Long getRamoId() {
		return ramoId;
	}

	public void setRamoId(Long ramoId) {
		this.ramoId = ramoId;
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

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public Byte[] getImagem() {
		return imagem;
	}

	public void setImagem(Byte[] imagem) {
		this.imagem = imagem;
	}

	public int getDeleted() {
		return deleted;
	}

	public void setDeleted(int deleted) {
		this.deleted = deleted;
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
