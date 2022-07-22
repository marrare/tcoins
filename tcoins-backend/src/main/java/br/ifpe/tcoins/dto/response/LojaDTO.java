package br.ifpe.tcoins.dto.response;

import java.io.Serializable;

import javax.validation.constraints.Max;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Null;
import javax.validation.constraints.Size;

import org.modelmapper.ModelMapper;
import org.springframework.lang.Nullable;

import br.ifpe.tcoins.model.Loja;

public class LojaDTO implements Serializable {

	private static final long serialVersionUID = -2345142241051723236L;
	
	private Long donoId;

	private Long ramoId;
	
	private String nome;

	private String descricao;

	private Double latitude;

	private Double longitude;
	
	private Byte[] imagem;
	
	public static LojaDTO convertFromLoja(Loja loja) {
		return new ModelMapper().map(loja, LojaDTO.class);
	}
	
	public Loja convertToLoja() {
		return new ModelMapper().map(this, Loja.class);
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
