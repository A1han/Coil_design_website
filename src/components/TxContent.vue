<template>
  <div id="TxContent">
    <a-layout>
      <a-layout-content class="main-content">
        <div class="input-output-section">
          <div class="input-section">
            <h2>Parameters</h2>
            <div class="input-group">
              <label>Frequency (MHz):</label>
              <input
                  type="number"
                  v-model="formData.frequency"
                  :disabled="isLoading"
                  class="styled-input"
              >
            </div>
            <div class="input-group">
              <label>Coil Shape:</label>
              <select
                  v-model="formData.shape"
                  class="shape-selector"
              >
                <option
                    v-for="(shape, index) in shapes"
                    :key="index"
                    :value="shape.value"
                >
                  {{ shape.label }}
                </option>
              </select>
            </div>
            <button
                class="calculate-btn"
                @click="handleSubmit"
                :disabled="isLoading || !isFormValid"
            >
              {{ isLoading ? 'Calculating...' : 'Calculate' }}
            </button>
          </div>

          <div class="output-section">
            <h2>Results</h2>
            <div class="output-group">
              <div
                  v-for="(output, key) in results"
                  :key="key"
                  class="output-item"
              >
                <label>{{ formatLabel(key) }}:</label>
                <span>{{ output || '--' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="coil-image-section">
          <h3 class="image-title">Coil Visualization</h3>
          <div v-if="imageUrl" class="image-border">
            <img :src="imageUrl" alt="Coil Visualization">
          </div>
          <div v-else class="placeholder">
            <p>No visualization available</p>
          </div>
        </div>

        <div v-if="error" class="error-message">
          {{ error }}
        </div>

      </a-layout-content>
    </a-layout>
  </div>
</template>


<script setup>
import { ref, computed, reactive } from 'vue';
//import axios from 'axios';
import coilApi from '@/api/coilApi';

// API配置
//const API_ENDPOINT = import.meta.env.VITE_API_URL || 'https://api.your-backend.com/calculate';
//const API_ENDPOINT = process.env.VITE_API_URL || 'http://localhost:3000/mock-api';

// 响应式数据
const formData = reactive({
  frequency: 100,
  shape: 'square'
});

const results = reactive({
  turnN: null,
  resistance: null,
  qFactor: null,
  pitch: null,
  width: null,
  diameter0: null,
  diameter1: null
});

const imageUrl = ref('');
const isLoading = ref(false);
const error = ref(null);

//const selectedShape = ref('square');
const shapes = ref([
  { label: 'Square', value: 'square', id: 1 },
  { label: 'Hexagonal', value: 'hex', id: 2 },
  { label: 'Octagonal', value: 'oct', id: 3 },
  { label: 'Round', value: 'round', id: 4 }
]);

// 表单验证
const isFormValid = computed(() => {
  return formData.frequency > 0 && formData.shape;
});

// 标签格式化
const formatLabel = (key) => {
  const labels = {
    turnN: 'Turn N (times)',
    resistance: 'Resistance (Ω)',
    qFactor: 'Q Factor',
    pitch: 'Pitch (nm)',
    width: 'Width (nm)',
    diameter0: 'Diameter0 (nm)',
    diameter1: 'Diameter1 (nm)',
  };
  return labels[key] || key;
};

const handleSubmit = async () => {
  error.value = null;
  isLoading.value = true;

  try {
    const response = await coilApi.calculateParameters({
      frequency: parseFloat(formData.frequency),
      coil_shape: formData.shape
    });

    Object.keys(results).forEach(key => {
      results[key] = response.data.data[key] || null;
    });
    imageUrl.value = response.data.data.imageUrl || `/images/-coil.png`;

  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
};

/*
const handleSubmit = async () => {
  error.value = null;
  isLoading.value = true;

  try {
    const response = await axios.post(API_ENDPOINT, {
      frequency: parseFloat(formData.frequency),
      coil_shape: formData.shape
    });

    // 更新结果数据
    Object.keys(results).forEach(key => {
      results[key] = response.data[key]?.toFixed(2) || null;
    });

    // 更新图片URL
    imageUrl.value = response.data.image_url
        || `/images/${formData.shape}-coil.png`;

  } catch (err) {
    error.value = err.response?.data?.message
        || 'Failed to fetch data. Please try again.';
    console.error('API Error:', err);
  } finally {
    isLoading.value = false;
  }
};
*/
/*
const generateMockData = () => {
  const baseValue = parseFloat(formData.frequency) * 0.1;
  return {
    turnN: (baseValue * 2).toFixed(2),
    resistance: (baseValue * 0.5).toFixed(2),
    qFactor: (baseValue * 3).toFixed(2),
    pitch: (baseValue * 0.2).toFixed(2),
    width: (baseValue * 0.3).toFixed(2),
    diameter0: (baseValue * 5).toFixed(2),
    diameter1: (baseValue * 4).toFixed(2),
    image_url: `/images/${formData.shape}-coil.png`
  };
};
const handleSubmit = async () => {
  error.value = null;
  isLoading.value = true;

  try {
    // 使用模拟数据替代真实请求
    const mockResponse = {
      data: generateMockData()
    };

    // 更新结果数据
    Object.keys(results).forEach(key => {
      results[key] = mockResponse.data[key] || null;
    });

    // 更新图片URL
    imageUrl.value = mockResponse.data.image_url;

  } catch (err) {
    error.value = '演示模式仅显示模拟数据';
  } finally {
    isLoading.value = false;
  }
};
*/
</script>


<style scoped>
.main-content {
  flex: 1;  /* 占据剩余空间 */
  padding: 30px 0;
}

.input-output-section > * {
  box-sizing: border-box;
}

.input-output-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 30px;
}

.input-section, .output-section {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.input-group, .output-item {
  margin: 15px 0;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="number"], select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.styled-input {
  border: 2px solid #1a237e !important;
  padding: 10px;
  border-radius: 6px;
  transition: border-color 0.3s;
}

.styled-input:focus {
  border-color: #3f51b5 !important;
  outline: none;
}

.output-section  {
  background: #f0f8ff;
  border: 2px solid #1a237e;
  border-radius: 8px;
  padding: 15px;
  width: 100%;
  overflow: hidden;
}

.output-item {
  background-color: #e3f2fd !important;  /* 更浅的蓝色背景 */
  border: 1px solid #90caf9;  /* 浅蓝色边框 */
  border-radius: 4px;
  margin: 8px 0;
  padding: 12px;
}

.coil-image-section {
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #1a237e;
  border-radius: 8px;
  background-color: #f8f9fa;
}

.image-border {
  text-align: center;
  padding: 15px;
}

.image-border img {
  max-width: 400px;
  height: auto;
}


@media (max-width: 768px) {
  .input-output-section {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 0 15px;
  }
  .input-section,
  .output-section {
    min-width: unset;
    max-width: 100%;
  }
}
</style>
