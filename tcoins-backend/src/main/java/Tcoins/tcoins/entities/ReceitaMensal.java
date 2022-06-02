package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.util.Date;

@Entity
public class ReceitaMensal {
    @Id
    private Long id;
    @OneToOne //TODO definir relação
    private User user;
    @OneToOne //TODO definir relação
    private Loja loja;
    private Double valor;
    private Date createdAt;
    private Date updatedAt;


    public ReceitaMensal() {
    }

    public ReceitaMensal(Long id, User user, Loja loja, Double valor, Date createdAt, Date updatedAt) {
        this.id = id;
        this.user = user;
        this.loja = loja;
        this.valor = valor;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
