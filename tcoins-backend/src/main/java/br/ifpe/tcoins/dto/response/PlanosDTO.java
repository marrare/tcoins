package br.ifpe.tcoins.dto.response;

import br.ifpe.tcoins.model.Loja;
import br.ifpe.tcoins.model.Planos;
import org.modelmapper.ModelMapper;

public class PlanosDTO {

    private  Long id;

    private String nome;

    private Double preco;

    private int lojas;

    private int produtosPorLoja;


    public static PlanosDTO convertFromPlano(Planos plano) {
        PlanosDTO planoDto = new ModelMapper().map(plano, PlanosDTO.class);
        return planoDto;
    }

    public Planos convertToPlano() {
        return new ModelMapper().map(this, Planos.class);
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
}
