package br.ifpe.tcoins.dto.response;

import java.io.Serializable;

import org.modelmapper.ModelMapper;

import br.ifpe.tcoins.model.Loja;

public class LojaDTO implements Serializable {

	private static final long serialVersionUID = -2345142241051723236L;
	
	private Long lojaId;
	
	private Long donoId;
	
	private String ramo;
	
	private String nome;
	
	private String descricao;

	private Double latitude;

	private Double longitude;
	
	private Byte[] imagem;
	
	public static LojaDTO convertFromLoja(Loja loja) {
		LojaDTO lojaDto = new ModelMapper().map(loja, LojaDTO.class);
		lojaDto.setRamo(loja.getRamo().getRamo());
		return lojaDto;
	}
	
	public Loja convertToLoja() {
		return new ModelMapper().map(this, Loja.class);
	}

	public Long getLojaId() {
		return lojaId;
	}

	public void setLojaId(Long lojaId) {
		this.lojaId = lojaId;
	}

	public Long getDonoId() {
		return donoId;
	}

	public void setDonoId(Long donoId) {
		this.donoId = donoId;
	}

	public String getRamo() {
		return ramo;
	}

	public void setRamo(String ramo) {
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

}
