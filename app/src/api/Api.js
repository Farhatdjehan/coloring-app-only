// export const SERVER_ADDRESS = 'http://172.16.1.127:3000';
import {getToken} from "../util/Store";

// export const SERVER_ADDRESS = 'http://172.16.0.117:8123';
export const SERVER_ADDRESS = 'http://bgm-php.global-abilities.jp';
export const BEARER = 'Bearer';
// export const SERVER_ADDRESS = 'https://maxbox.io';
export const API_ENDPOINT = SERVER_ADDRESS + '/api/';

const getParam = (method: string, data: any, token = null) => {

    return {
        method: method,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `${BEARER} ${token}`
        },
        body: data && JSON.stringify(data)
    }
};

export const request = async (endpoint: string, method: string, body: any, navigate_token) => {
    const token = navigate_token || await getToken();
    // console.warn('endpoint', API_ENDPOINT + endpoint);
    // console.warn('params', JSON.stringify(body));
    return fetch(
        API_ENDPOINT + endpoint,
        getParam(method, body, token)
    )
        .then(res => {
            try {
                return res.json()
            } catch (e) {
                throw e;
            }
        })
        .then((data) => {
            return handleError(data)
        })
        .catch(error => {
            throw error;
        });
};

const handleError = (response) => {
    const error = response && response.status;
    if (!error) {
        throw {
            message: response.result.message,
            code: response.result.code,
        };
    } else {
        return response.result;
    }
};

export const signIn = (body) => {
    return request('signin', 'POST', body);
}

export const signUp = (body) => {
    return request('signup', 'POST', body);
}

export const forgotPassword = (body) => {
    return request('forgot_password', 'POST', body);
}
