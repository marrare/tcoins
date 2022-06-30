package br.ifpe.tcoins.model;

import java.time.LocalDate;

import javax.persistence.*;


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
//    @Temporal(TemporalType.DATE)
    private LocalDate dataExpiracao;
	
	@Column(name = "created_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDate createdAt;
	
	@Column(name = "updated_at", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private LocalDate updatedAt;

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

	public LocalDate getDataExpiracao() {
		return dataExpiracao;
	}

	public void setDataExpiracao(LocalDate dataExpiracao) {
		this.dataExpiracao = dataExpiracao;
	}

	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}

	public LocalDate getUpdatedAt() {
		return updatedAt;
	}

	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}

}
