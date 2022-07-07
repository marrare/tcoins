import RequisicaoService from "./RequisicaoService";

const UsuarioService = {

    getUsuario(id = ""){
        const header = { id }
        RequisicaoService.get(id, header);
    },

    postUsuario(user = "", email = "", senha = "") {
        const header = { user, email, senha }
        RequisicaoService.post("usuario", header)
    },

    deleteUsuario(id = "") {
        const header = { id }
        RequisicaoService.delete( "usuario", header);
    }

}

export default UsuarioService;