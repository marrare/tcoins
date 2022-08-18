import RequisicaoService from "./RequisicaoService";

const UsuarioService = {
    async getUsuario(id) {
        const header = { id }
        const ret = await RequisicaoService.get('usuario', header);
        return ret;
    },

    async postUsuario(user = "", email = "", senha = "") {
        const header = { user }
        const body = {
            "nome": user,
            "email": email,
            "senha": senha
          }
        await RequisicaoService.post("usuario", body, header)
    },

    deleteUsuario(id = "") {
        const header = { id }
        RequisicaoService.delete("usuario", header);
    },
    async login(email="", senha=""){
        const header = { email, senha }
        const ret = await RequisicaoService.post('usuario/login', header ,header);
        return ret;
    }

}

export default UsuarioService;