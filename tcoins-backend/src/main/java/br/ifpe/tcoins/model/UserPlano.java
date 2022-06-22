package br.ifpe.tcoins.model;

import java.security.Timestamp;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "user_plano")
public class UserPlano {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_plano_generator")
	@SequenceGenerator(name="user_plano_generator", sequenceName = "user_plano_seq")
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;
    
    @ManyToOne
	@JoinColumn(name = "plano_id", referencedColumnName = "id", nullable=false)
    private Planos plano;
    
    @Column(name = "preco_pago", columnDefinition="DECIMAL(10,2)",  nullable=false)
    private Double precoPago;
	
    @Column(name = "data_expiracao",  nullable=false)
    @Temporal(TemporalType.DATE)
    private Date dataExpiracao;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP")
	private Timestamp updatedAt;

	@Override
	public String toString() {
		return "UserPlano [id=" + id + ", plano=" + plano + ", precoPago=" + precoPago + ", dataExpiracao="
				+ dataExpiracao + ", createdAt=" + createdAt + ", updatesAt=" + updatedAt + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Planos getPlano() {
		return plano;
	}

	public void setPlano(Planos plano) {
		this.plano = plano;
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
