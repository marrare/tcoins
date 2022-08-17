import RequisicaoService from "./RequisicaoService";

const UsuarioService = {
    async getUsuario(id) {
        const header = { id }
        const ret = await RequisicaoService.get('usuario', header);
        return ret;
    },
    //ToDo - Ajuste na função assim como está no swagger
    postUsuario(user = "", email = "", senha = "") {
        const header = { user, email, senha }
        RequisicaoService.post("usuario", header)
    },

    deleteUsuario(id = "") {
        const header = { id }
        RequisicaoService.delete("usuario", header);
    }

}

export default UsuarioService;