package br.ifpe.tcoins.dto.request;

import br.ifpe.tcoins.dto.response.UserDTO;
import br.ifpe.tcoins.model.User;
import org.modelmapper.ModelMapper;

public class UserUpdateRequestDTO {
    private String nome;

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

    public Byte[] getImagem() {
        return imagem;
    }

    public void setImagem(Byte[] imagem) {
        this.imagem = imagem;
    }
}
