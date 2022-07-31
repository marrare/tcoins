package br.ifpe.tcoins.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "user_plano")
public class UserPlano extends ObjetoGeral {
    
    @ManyToOne
	@JoinColumn(name = "plano_id", referencedColumnName = "id", nullable=false)
    private Planos plano;
    
    @OneToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id", nullable=false)
	private User userId;
    
    @Column(name = "preco_pago", columnDefinition="DECIMAL(10,2)",  nullable=false)
    private Double precoPago;
	
    @Column(name = "data_expiracao",  nullable=false)
    @Temporal(TemporalType.DATE)
    private Date dataExpiracao;

	public Planos getPlano() {
		return plano;
	}

	public void setPlano(Planos plano) {
		this.plano = plano;
	}

	public User getUserId() {
		return userId;
	}

	public void setUserId(User userId) {
		this.userId = userId;
	}

	public Double getPrecoPago() {
		return precoPago;
	}

	public void setPrecoPago(Double precoPago) {
		this.precoPago = precoPago;
	}

	public Date getDataExpiracao() {
		return dataExpiracao;
	}

	public void setDataExpiracao(Date dataExpiracao) {
		this.dataExpiracao = dataExpiracao;
	}

}
