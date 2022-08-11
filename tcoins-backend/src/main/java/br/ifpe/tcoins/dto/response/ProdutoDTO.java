package br.ifpe.tcoins.dto.response;

import br.ifpe.tcoins.model.Produto;
import org.modelmapper.ModelMapper;

public class ProdutoDTO {

    private Long id;

    private String nome;

    private String descricao;

    private Double precoTcoins;

    private Double valorRecompensa;

    private byte[] imagem;

    private boolean deleted;

    public static ProdutoDTO convertFromProduto(Produto produto) {
        return new ModelMapper().map(produto, ProdutoDTO.class);
    }

    public Produto convertToProduto() {
        return new ModelMapper().map(this, Produto.class);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public boolean isDeleted() {
        return deleted;
    }

    public void setDeleted(boolean deleted) {
        this.deleted = deleted;
    }
}
