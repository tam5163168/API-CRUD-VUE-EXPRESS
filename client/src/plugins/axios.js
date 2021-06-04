import axios from 'axios'

export const composeApi = () => {
    const instance = axios.create({
        baseURL: process.env.VUE_APP_BASE_API || '',
        timeout: 60000,
    });
    instance.interceptors.response.use(
        (res) => res,
        (err) => Promise.reject(err)
    );
    return instance;
};

export default composeApi();