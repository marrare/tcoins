package Tcoins.tcoins.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class Usuario {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private Long planoVigente;
	
	private String email;
	
	private String senha;
	
	private String googleTokenId;
	
	@Lob
	private Byte[] imagem;
	
	private int deleted;
	
	private Date createdAt;
	
	private Date updatesAt;
	
	public Usuario(Long id, Long planoVigente, String email, String senha, String googleTokenId, Byte[] imagem,
			int deleted, Date createdAt, Date updatesAt) {
		super();
		this.id = id;
		this.planoVigente = planoVigente;
		this.email = email;
		this.senha = senha;
		this.googleTokenId = googleTokenId;
		this.imagem = imagem;
		this.deleted = deleted;
		this.createdAt = createdAt;
		this.updatesAt = updatesAt;
	}

	public Usuario() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getPlanoVigente() {
		return planoVigente;
	}

	public void setPlanoVigente(Long planoVigente) {
		this.planoVigente = planoVigente;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public String getGoogleTokenId() {
		return googleTokenId;
	}

	public void setGoogleTokenId(String googleTokenId) {
		this.googleTokenId = googleTokenId;
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
