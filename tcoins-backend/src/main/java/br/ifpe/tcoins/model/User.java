package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User extends ObjetoGeral {
	
	@OneToOne(optional = true)
	@JoinColumn(name = "plano_vigente", referencedColumnName = "id", nullable = true)
	private UserPlano planoVigente;
	
	@Column(length = 45, nullable=false)
	private String nome;
	
	@Column(length = 100, nullable=false)
	private String email;
	
	@Column(length = 10, name = "codigo_user", nullable=false)
	private String codigoUser;
	
	@Column(length = 45, nullable=false)
	private String senha;
	
	@Column(name = "google_token_id", length = 45)
	private String googleTokenId;
	
	private Byte[] imagem;
	
	@Column(columnDefinition = "boolean default false")
	private boolean deleted;

	public UserPlano getPlanoVigente() {
		return planoVigente;
	}

	public void setPlanoVigente(UserPlano planoVigente) {
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

	public boolean isDeleted() {
		return deleted;
	}

	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	
}