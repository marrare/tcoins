package br.ifpe.tcoins.dto.response;

import br.ifpe.tcoins.model.User;

import org.modelmapper.ModelMapper;

public class UserDTO {
    private Long id;

    private Integer planoVigentePlanoId;

    private String nome;

    private String email;

    private String codigoUser;

    private String googleTokenId;

    private Byte[] imagem;

    public UserDTO() {
    }

    public UserDTO(Long id, Integer planoVigentePlanoId, String nome, String email, String codigoUser, String googleTokenId, Byte[] imagem) {
        this.id = id;
        this.planoVigentePlanoId = planoVigentePlanoId;
        this.nome = nome;
        this.email = email;
        this.codigoUser = codigoUser;
        this.googleTokenId = googleTokenId;
        this.imagem = imagem;
    }

    public static UserDTO convertFromUser(User user) {
        return new ModelMapper().map(user, UserDTO.class);
    }

    public User convertToUser() {
        return new ModelMapper().map(this, User.class);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getPlanoVigentePlanoId() {
        return planoVigentePlanoId;
    }

    public void setPlanoVigentePlanoId(Integer planoVigentePlanoId) {
        this.planoVigentePlanoId = planoVigentePlanoId;
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


