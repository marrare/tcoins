package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "receita_mensal")
public class ReceitaMensal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "loja_id", referencedColumnName = "id")
    private Loja loja;
    private Double valor;
    
    @JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
    private Date updatesAt;


    public ReceitaMensal() {
    }

    public ReceitaMensal(Long id, User user, Loja loja, Double valor, Date createdAt, Date updatesAt) {
        this.id = id;
        this.user = user;
        this.loja = loja;
        this.valor = valor;
        this.createdAt = createdAt;
        this.updatesAt = updatesAt;
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

    public Date getUpdatesAt() {
        return updatesAt;
    }

    public void setUpdatesAt(Date updatesAt) {
        this.updatesAt = updatesAt;
    }
}
