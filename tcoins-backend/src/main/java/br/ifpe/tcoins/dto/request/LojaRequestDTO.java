package br.ifpe.tcoins.dto.request;

import java.io.Serializable;

import org.modelmapper.ModelMapper;

import br.ifpe.tcoins.model.Loja;

public class LojaRequestDTO implements Serializable {
	//TODO - Validar atributos
	private static final long serialVersionUID = -4791804965759766994L;
	
	private String nome;
	
	private String descricao;

	private Double latitude;

	private Double longitude;
	
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
