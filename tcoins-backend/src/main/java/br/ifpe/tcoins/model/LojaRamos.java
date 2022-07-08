package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="loja_ramos")
public class LojaRamos extends ObjetoGeral {
    
    @Column(length = 30, nullable=false)
    private String ramo;

	public String getRamo() {
		return ramo;
	}

	public void setRamo(String ramo) {
		this.ramo = ramo;
	}

}
