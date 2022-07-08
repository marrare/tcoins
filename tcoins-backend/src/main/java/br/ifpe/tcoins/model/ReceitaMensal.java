package br.ifpe.tcoins.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name = "receita_mensal")
public class ReceitaMensal extends ObjetoGeral {
    
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id", nullable=false)
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "loja_id", referencedColumnName = "id", nullable=false)
    private Loja loja;
    
    @Column(columnDefinition="DECIMAL(10,2)", nullable=false)
    private Double valor;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Loja getLoja() {
		return loja;
	}

	public void setLoja(Loja loja) {
		this.loja = loja;
	}

	public Double getValor() {
		return valor;
	}

	public void setValor(Double valor) {
		this.valor = valor;
	}
    
}
