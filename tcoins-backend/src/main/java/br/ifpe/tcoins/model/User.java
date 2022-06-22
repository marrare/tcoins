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
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;


@Entity
@Table(name="users")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_generator")
	@SequenceGenerator(name="user_generator", sequenceName = "user_seq")
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "plano_vigente", referencedColumnName = "id", nullable=false)
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
	
	@Lob
	private Byte[] imagem;
	
	@Column(columnDefinition = "boolean default true")
	private boolean deleted;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;

	@Override
	public String toString() {
		return "User [id=" + id + ", planoVigente=" + planoVigente + ", nome=" + nome + ", email=" + email
				+ ", codigoUser=" + codigoUser + ", senha=" + senha + ", googleTokenId=" + googleTokenId + ", imagem="
				+ Arrays.toString(imagem) + ", deleted=" + deleted + ", createdAt=" + createdAt + ", updatesAt="
				+ updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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