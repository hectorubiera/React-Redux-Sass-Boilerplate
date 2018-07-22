import axios from "axios";

class Service {

    constructor() {

        let API_URL = "https://api.onerx.com/v0";

        if (process.env.NODE_ENV === "development") {

            API_URL = "/v0";

        }

        let service = axios.create({
            baseURL: API_URL
        });

        this.service = service;

    }

    get(path, callback) {

        return this.service.get(path).then(
            (response) => callback(response.status, response.data)
        );

    }

    post(path, payload, callback) {

        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: payload
        }).then((response) => callback(response.status, response.data));

    }

}

export default new Service();
