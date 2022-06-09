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
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "plano_vigente", referencedColumnName = "id")
	private Planos planoVigente;
	
	private String nome;
	
	private String email;
	
	@JoinColumn(name = "codigo_user")
	private String codigoUser;
	
	private String senha;
	
	@JoinColumn(name = "google_token_id")
	private String googleTokenId;
	
	@Lob
	private Byte[] imagem;
	
	private int deleted;
	
	@JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
	private Date updatesAt;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Planos getPlanoVigente() {
		return planoVigente;
	}

	public void setPlanoVigente(Planos planoVigente) {
		this.planoVigente = planoVigente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCodigoUser() {
		return codigoUser;
	}

	public void setCodigoUser(String codigoUser) {
		this.codigoUser = codigoUser;
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

	@Override
	public String toString() {
		return "User [id=" + id + ", planoVigente=" + planoVigente + ", nome=" + nome + ", email=" + email
				+ ", codigoUser=" + codigoUser + ", senha=" + senha + ", googleTokenId=" + googleTokenId + ", imagem="
				+ Arrays.toString(imagem) + ", deleted=" + deleted + ", createdAt=" + createdAt + ", updatesAt="
				+ updatesAt + "]";
	}
	
}