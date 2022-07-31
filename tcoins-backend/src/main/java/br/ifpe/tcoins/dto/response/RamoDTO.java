package br.ifpe.tcoins.dto.response;

import org.modelmapper.ModelMapper;

import br.ifpe.tcoins.model.LojaRamos;

public class RamoDTO {
	
	private Long id;

	private String ramo;
	
	public static RamoDTO convertFromRamo(LojaRamos ramo) {
        return new ModelMapper().map(ramo, RamoDTO.class);
    }

    public LojaRamos convertToRamo() {
        return new ModelMapper().map(this, LojaRamos.class);
    }
    
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRamo() {
		return ramo;
	}

	public void setRamo(String ramo) {
		this.ramo = ramo;
	}
}
