// src/api/client.js - Axios客户端配置
import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL ?? '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    }
});

// 请求拦截器（可添加认证Token等）
apiClient.interceptors.request.use(config => {
    // 示例：从Store获取Token
    // const token = store.state.auth.token;
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

// 响应拦截器（统一错误处理）
apiClient.interceptors.response.use(
    response => response.data,
    error => {
        const message = error.response?.data?.message ||
            error.message ||
            'Network Error';
        return Promise.reject(new Error(message));
    }
);

export default apiClient;
