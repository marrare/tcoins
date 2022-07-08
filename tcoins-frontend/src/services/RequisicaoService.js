import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://localhost:8080/api/tcoins/'
});

const RequisicaoService = {
    get(rota, header={}){
        instance.get(rota, { headers: header}).then((data) => {
            console.log(data);
            return data;
        }).catch((error) => {
            console.log(error);

        })
    },

    post(rota, body, header={}){
        axios.post(rota, { headers: header }, body);
    },

    update(rota, body, header={}){
        axios.put(rota, { header: header }, body);
    },

    delete(rota, header={}){
        axios.delete(rota, { headers: header});
    }
}

export default RequisicaoService;
