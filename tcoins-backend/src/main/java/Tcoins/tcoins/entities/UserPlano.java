package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
public class UserPlano {

    @Id
    private Long id;
    @OneToOne //    TODO ajustar relação
    private Planos plano;
    private Long precoPago;
    private Date dataExpiracao;
    private Date createdAt;
    private Date updatedAt;


    public UserPlano() {
    }

    public UserPlano(Long id, Planos plano, Long precoPago, Date dataExpiracao, Date createdAt, Date updatedAt) {
        this.id = id;
        this.plano = plano;
        this.precoPago = precoPago;
        this.dataExpiracao = dataExpiracao;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
