package Tcoins.tcoins.entities;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Planos {
    @Id
    private Long id;
    private Double preco;
    private int lojas;
    private int produtosPorLoja;
    private Date createdAt;
    private Date updatedAt;

    public Planos(Long id, Double preco, int lojas, int produtosPorLoja, Date createdAt, Date updatedAt) {
        this.id = id;
        this.preco = preco;
        this.lojas = lojas;
        this.produtosPorLoja = produtosPorLoja;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
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
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
