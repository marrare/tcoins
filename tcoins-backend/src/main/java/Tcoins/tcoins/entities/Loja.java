package Tcoins.tcoins.entities;

import java.util.Arrays;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

@Entity
public class Loja {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long Id;
	
	@ManyToOne
	@JoinColumn(name = "dono_id", referencedColumnName = "id")
	private User donoId;
	@ManyToOne
	@JoinColumn(name = "ramo_id", referencedColumnName = "id")
	private LojaRamos ramoId;
	
	private String nome;
	
	private String descricao;
	
	private double longitude;
	
	private double latitude;
	
	@Lob
	private Byte[] imagem;
	
	private int deleted;
	
	@JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
	private Date updatesAt;

	@Override
	public String toString() {
		return "Loja [Id=" + Id + ", donoId=" + donoId + ", ramoId=" + ramoId + ", nome=" + nome + ", descricao="
				+ descricao + ", longitude=" + longitude + ", latitude=" + latitude + ", imagem="
				+ Arrays.toString(imagem) + ", deleted=" + deleted + ", createdAt=" + createdAt + ", updatesAt="
				+ updatesAt + "]";
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public User getDonoId() {
		return donoId;
	}

	public void setDonoId(User donoId) {
		this.donoId = donoId;
	}

	public LojaRamos getRamoId() {
		return ramoId;
	}

	public void setRamoId(LojaRamos ramoId) {
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
