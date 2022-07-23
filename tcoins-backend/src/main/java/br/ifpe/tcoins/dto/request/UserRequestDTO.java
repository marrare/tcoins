package br.ifpe.tcoins.dto.request;

import br.ifpe.tcoins.dto.response.UserDTO;
import br.ifpe.tcoins.model.User;
import org.modelmapper.ModelMapper;

public class UserRequestDTO {

    private String nome;

    private String email;

    private String codigoUser;

    private String senha;

    private String googleTokenId;

    private Byte[] imagem;

    public static UserDTO convertFromUser(User user) {
        return new ModelMapper().map(user, UserDTO.class);
    }
    public User convertToUser() {
        return new ModelMapper().map(this, User.class);
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCodigoUser() {
        return codigoUser;
    }

    public void setCodigoUser(String codigoUser) {
        this.codigoUser = codigoUser;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getGoogleTokenId() {
        return googleTokenId;
    }

    public void setGoogleTokenId(String googleTokenId) {
        this.googleTokenId = googleTokenId;
    }

    public Byte[] getImagem() {
        return imagem;
    }

    public void setImagem(Byte[] imagem) {
        this.imagem = imagem;
    }
}
