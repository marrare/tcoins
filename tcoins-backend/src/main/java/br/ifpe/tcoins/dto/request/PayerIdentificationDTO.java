package br.ifpe.tcoins.dto.request;

import javax.validation.constraints.NotNull;

public class PayerIdentificationDTO {
    @NotNull
    private String type;

    @NotNull
    private String number;

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }
}
