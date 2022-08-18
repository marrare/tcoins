import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tcoinsapp.herokuapp.com/api/tcoins'
});

const RequisicaoService = {
    get(rota, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.get(rota, { headers: header }).then((data) => {
                    resolve(data);
                    console.log(data);
                    
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        })
    },

    post(rota, body, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.post(rota, { headers: header }, body).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    },

    update(rota, body, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.put(rota, { header: header }, body).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    },

    delete(rota, header = {}) {
        return new Promise(async (resolve, reject) => {
            try {
                instance.delete(rota, { headers: header }).then((data) => {
                    resolve(data);
                }).catch((error) => reject(error));
            } catch (err) {
                reject(err);
            }
        });
    }
}

export default RequisicaoService;
