package br.ifpe.tcoins.dto.request;

import br.ifpe.tcoins.dto.response.ProdutoDTO;
import br.ifpe.tcoins.model.Produto;
import org.hibernate.annotations.Type;
import org.modelmapper.ModelMapper;

import javax.persistence.Column;

public class ProdutoRequestDTO {

    private String nome;

    private String descricao;

    private Double precoTcoins;

    private Double valorRecompensa;

    private byte[] imagem;


    public static ProdutoDTO convertFromPdoruto(Produto produto) {
        return new ModelMapper().map(produto, ProdutoDTO.class);
    }

    public Produto convertToProduto() {
        return new ModelMapper().map(this, Produto.class);
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
}
