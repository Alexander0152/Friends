import axios from 'axios';
import qs from 'qs';

import apiErrorService from './apiErrorService';
import { IStringifyOptions } from 'interfaces/apiInterfaces';

const paramsOptions: IStringifyOptions = {
    arrayFormat: 'brackets',
    encode: false,
};

const apiService = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        responseType: 'json',
        paramsSerializer(params) {
            return qs.stringify(params, paramsOptions);
        },
    },
);

apiService.interceptors.request.use(
    req => req,
    error => {
        return Promise.reject(error);
    },
);

apiService.interceptors.response.use(
    res => res,
    async (error) => {
        await apiErrorService.handleError(error);
        return Promise.reject(error);
    });

export default apiService;