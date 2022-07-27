import RequisicaoService from "./RequisicaoService";

const UsuarioService = {

    getUsuario(userId){
        const header = { userId }
        RequisicaoService.get("usuario", header);
    },
    //ToDo - Ajuste na função assim como está no swagger
    postUsuario(usuario) {
        const headerUsuario = [ usuario.nome, usuario.email, usuario.senha ]
        const header = { headerUsuario }
        RequisicaoService.post("usuario", header)
    },

    deleteUsuario(userId) {
        const header = { userId }
        RequisicaoService.delete( "usuario", header);
    }

}

export default UsuarioService;