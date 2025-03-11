// src/api/mockAdapter.js - Mock适配器
export const createMockAdapter = () => {
    let calls = 0;

    return {
        post: (url, data) => new Promise(resolve => {
            setTimeout(() => {
                const mockData = generateMockData(data);
                resolve({ data: mockData });
            }, 500); // 模拟网络延迟
        })
    };

    function generateMockData(requestData) {
        const baseValue = parseFloat(requestData.frequency) * 0.1;
        return {
            status: 'success',
            data: {
                turnN: +(baseValue * 2).toFixed(2),
                resistance: +(baseValue * 0.5).toFixed(2),
                qFactor: +(baseValue * 3).toFixed(2),
                pitch: +(baseValue * 0.2).toFixed(2),
                width: +(baseValue * 0.3).toFixed(2),
                diameter0: +(baseValue * 5).toFixed(2),
                diameter1: +(baseValue * 4).toFixed(2),
                imageUrl: `/images/coil.png`
            },
            meta: {
                requestId: `mock-${Date.now()}-${++calls}`,
                timestamp: new Date().toISOString()
            }
        };
    }
};
