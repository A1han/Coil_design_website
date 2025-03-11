// src/api/coilApi.js - 业务API接口
import apiClient from './client';
import { createMockAdapter } from './mockAdapter';

const USE_MOCK = process.env.VUE_APP_USE_MOCK === 'true';
const mockAdapter = createMockAdapter();

const coilApi = {
    async calculateParameters(params) {
        if (USE_MOCK) {
            return mockAdapter.post('/calculate', params);
        }
        return apiClient.post('/coils/calculate', params);
    },

    async getCoilHistory() {
        // 示例其他接口...
    }
};

export default coilApi;
