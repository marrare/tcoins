package br.ifpe.tcoins.dto.request;

import java.io.Serializable;

import javax.validation.constraints.DecimalMax;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

import org.modelmapper.ModelMapper;
import org.springframework.lang.Nullable;

import br.ifpe.tcoins.model.Loja;

public class LojaRequestDTO implements Serializable {
	//TODO - Validar atributos
	private static final long serialVersionUID = -4791804965759766994L;
	
	@NotNull
	@Size(min = 1, max = 45)
	private String nome;
	
	@Nullable
	private String descricao;

	@NotNull
	private Double latitude;

	@NotNull
	private Double longitude;
	@Nullable
	private Byte[] imagem;
	
	public static LojaRequestDTO convertFromLoja(Loja loja) {
		return new ModelMapper().map(loja, LojaRequestDTO.class);
	}
	
	public Loja convertToLoja() {
		return new ModelMapper().map(this, Loja.class);
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

}
