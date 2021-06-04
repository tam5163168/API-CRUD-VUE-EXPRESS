import store from '../store';
import api from '../plugins/axios';

export const commonApi = (params) => {
    // rán token lên header 
    params.interceptors.request.use(
        (config) => {
            const token = store.getters.isAuthenticated;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (err) => {
            Promise.reject(err);
        }
    );
};

export default function setup() {
    commonApi(api);
}
