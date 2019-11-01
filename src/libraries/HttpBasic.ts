

import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:7003';

const _env = process.env.NODE_ENV || 'dev';
console.log(process);
let envServer = {
	host: '127.0.0.1',
	port: 7003,
};
if(_env === 'sit') {
	envServer = {
		host: '127.0.0.1',
		port: 7005,
	};
} else if (_env === 'prod') {
	envServer = {
		host: '127.0.0.1',
		port: 7008,
	};
}

export default {
    get(interfaceName: string, data: Object = {}) {
        axios({
            url: interfaceName,
            method: 'get',
            // `params` are the URL parameters to be sent with the request
            // Must be a plain object or a URLSearchParams object
            params: {
                ...data,
            },
            timeout: 10000, // default is `0` (no timeout)
        }).then((response) => {
            const { status, data } = response;
            console.log(response);
            if(status === 200) {
                return data;
            } else {
                throw new Error();
            }
        });
    },
    post(interfaceName: string, data: Object = {}) {
        axios({
            url: interfaceName,
            method: 'post',
            // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
            data: {
                ...data,
            },
            timeout: 10000, // default is `0` (no timeout)
        }).then((response) => {
            console.log(response);
        });
    },
};