package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "user_plano")
public class UserPlano {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
	@JoinColumn(name = "plano_id", referencedColumnName = "id")
    private Planos plano;
	@JoinColumn(name = "preco_pago")
    private Long precoPago;
	@JoinColumn(name = "data_expiracao")
    private Date dataExpiracao;
	@JoinColumn(name = "created_at")
    private Date createdAt;
	@JoinColumn(name = "updates_at")
    private Date updatesAt;


    public UserPlano() {
    }

    public UserPlano(Long id, Planos plano, Long precoPago, Date dataExpiracao, Date createdAt, Date updatesAt) {
        this.id = id;
        this.plano = plano;
        this.precoPago = precoPago;
        this.dataExpiracao = dataExpiracao;
        this.createdAt = createdAt;
        this.updatesAt = updatesAt;
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

    public Long getPrecoPago() {
        return precoPago;
    }

    public void setPrecoPago(Long precoPago) {
        this.precoPago = precoPago;
    }

    public Date getDataExpiracao() {
        return dataExpiracao;
    }

    public void setDataExpiracao(Date dataExpiracao) {
        this.dataExpiracao = dataExpiracao;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatesAt() {
        return updatesAt;
    }

    public void setUpdatesAt(Date updatesAt) {
        this.updatesAt = updatesAt;
    }
}
