import { apiUrl, serverApiUrl } from '@/config/api.config'
import { removeTokensStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import axios from 'axios'
import Cookies from 'js-cookie'
import { errorCatch, getContentType } from './api.helpers'
import { IS_PRODUCTION } from '@/config/constants'

export const axiosClassic = axios.create({
    baseURL: IS_PRODUCTION ? serverApiUrl : apiUrl,
    headers: getContentType()
})

export const instance = axios.create({
    baseURL: apiUrl,
    headers: getContentType()
})

instance.interceptors.request.use((config) => {
    const accessToken = Cookies.get('accessToken');
    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config;
})

instance.interceptors.response.use((config) => config, async error => {
    const originalRequest = error.config;
    if ((error.response.status === 401 ||
        errorCatch(error) === 'jwt expired' ||
        errorCatch(error) === 'jwt must be provided') &&
        error.config &&
        !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            await AuthService.getNewTOkens();
            return instance.request(originalRequest);
        } catch (e) {
            if (errorCatch(e) === 'jwt expired') removeTokensStorage();
        }
    }
    throw error
})

export default instance;

