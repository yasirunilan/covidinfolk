import axios from 'axios';

let getAxiosFunction = (params) => {
    let url = params.url;

    return axios.get(url);
};

export const webservice = {
    call: (params) => {
        return getAxiosFunction(params);
    }
};
