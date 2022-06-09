package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import java.util.Date;

@Entity
public class Planos {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Double preco;
    private int lojas;
    
    @JoinColumn(name = "produtos_por_loja")
    private int produtosPorLoja;
    
    @JoinColumn(name = "created_at")
    private Date createdAt;
    
    @JoinColumn(name = "updates_at")
    private Date updatesAt;

    public Planos(Long id, Double preco, int lojas, int produtosPorLoja, Date createdAt, Date updatedAt) {
        this.id = id;
        this.preco = preco;
        this.lojas = lojas;
        this.produtosPorLoja = produtosPorLoja;
        this.createdAt = createdAt;
        this.updatesAt = updatedAt;
    }

    public Planos() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public int getLojas() {
        return lojas;
    }

    public void setLojas(int lojas) {
        this.lojas = lojas;
    }

    public int getProdutosPorLoja() {
        return produtosPorLoja;
    }

    public void setProdutosPorLoja(int produtosPorLoja) {
        this.produtosPorLoja = produtosPorLoja;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatesAt;
    }

    public void setUpdatedAt(Date updatesAt) {
        this.updatesAt = updatesAt;
    }
}
