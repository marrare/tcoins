package br.ifpe.tcoins.dto.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

public class CardPaymentDTO {
    @NotNull
    private String token;

    private String issuerId;

    @NotNull
    private String bandeiraCartao;

    @NotNull
    private BigDecimal valor;

    @NotNull
    private Integer parcelas;

    @NotNull
    @JsonProperty("description")
    private String productDescription;

    @NotNull
    private PayerDTO clienteDTO;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getIssuerId() {
        return issuerId;
    }

    public void setIssuerId(String issuerId) {
        this.issuerId = issuerId;
    }

    public String getBandeiraCartao() {
        return bandeiraCartao;
    }

    public void setBandeiraCartao(String bandeiraCartao) {
        this.bandeiraCartao = bandeiraCartao;
    }

    public BigDecimal getValor() {
        return valor;
    }

    public void setValor(BigDecimal valor) {
        this.valor = valor;
    }

    public Integer getParcelas() {
        return parcelas;
    }

    public void setParcelas(Integer parcelas) {
        this.parcelas = parcelas;
    }

    public String getProductDescription() {
        return productDescription;
    }

    public void setProductDescription(String productDescription) {
        this.productDescription = productDescription;
    }

    public PayerDTO getClienteDTO() {
        return clienteDTO;
    }

    public void setClienteDTO(PayerDTO clienteDTO) {
        this.clienteDTO = clienteDTO;
    }
}
