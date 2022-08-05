import RequisicaoService from "./RequisicaoService";

const UsuarioService = {

    getUsuario(userId){
        const header = { userId }
        RequisicaoService.get("usuario", header);
    },
    //ToDo - Ajuste na função assim como está no swagger
    postUsuario(usuario) {
       const user = {
            nome: usuario.nome,
            email: usuario.email,
            codigoUser: "aaa",
            senha: usuario.senha,
            googleTokenId: "",
            imagem: []
        }
       
        return RequisicaoService.post("/usuario", user)
    },

    deleteUsuario(userId) {
        const header = { userId }
        RequisicaoService.delete( "usuario", header);
    }

}

export default UsuarioService;