package Tcoins.tcoins.entities;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Produto {

    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(name = "loja_id", referencedColumnName = "id")
    private Loja loja;
    private String nome;
    private String descricao;
    @JoinColumn(name = "preco_tcoins")
    private Double precoTcoins;
    @JoinColumn(name = "valor_recompensa")
    private Double valorRecompensa;
    @Lob
    private byte[] imagem;
    private int deleted;
    
    @JoinColumn(name = "created_at")
	private Date createdAt;
	
	@JoinColumn(name = "updates_at")
    private Date updatesAt;

    public Produto() {

    }
    public Produto(Long id, Loja loja, String nome, String descricao, Double precoTcoins, Double valorRecompensa, byte[] imagem, int deleted, Date createdAt, Date updatesAt) {
        this.id = id;
        this.loja = loja;
        this.nome = nome;
        this.descricao = descricao;
        this.precoTcoins = precoTcoins;
        this.valorRecompensa = valorRecompensa;
        this.imagem = imagem;
        this.deleted = deleted;
        this.createdAt = createdAt;
        this.updatesAt = updatesAt;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Loja getLoja() {
        return loja;
    }

    public void setLoja(Loja loja) {
        this.loja = loja;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPrecoTcoins() {
        return precoTcoins;
    }

    public void setPrecoTcoins(Double precoTcoins) {
        this.precoTcoins = precoTcoins;
    }

    public Double getValorRecompensa() {
        return valorRecompensa;
    }

    public void setValorRecompensa(Double valorRecompensa) {
        this.valorRecompensa = valorRecompensa;
    }

    public byte[] getImagem() {
        return imagem;
    }

    public void setImagem(byte[] imagem) {
        this.imagem = imagem;
    }

    public int getDeleted() {
        return deleted;
    }

    public void setDeleted(int deleted) {
        this.deleted = deleted;
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

    public void setUpdateAt(Date updatesAt) {
        this.updatesAt = updatesAt;
    }
}
