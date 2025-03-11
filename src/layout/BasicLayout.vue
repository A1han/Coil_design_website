<template>
  <div id="BasicLayout">
    <a-layout>
      <GlobalHeader />
      <section class="title-section">
        <h1 class="page-title">NEURAL INTERFACE TECHNOLOGY LAB</h1>
        <h2 class="page-subtitle">DeepLearning Based Tx Coil Design</h2>
      </section>
      <div class="spacer"></div>
      <a-layout-content class="main-content">
        <router-view></router-view> <!-- 子组件插入位置 -->
      </a-layout-content>
      <GlobalFooter />
    </a-layout>
  </div>
</template>


<script setup>
import GlobalHeader from "@/components/GlobalHeader.vue";
import GlobalFooter from "@/components/GlobalFooter.vue";
//import axios from 'axios';

// API配置
//const API_ENDPOINT = import.meta.env.VITE_API_URL || 'https://api.your-backend.com/calculate';
//const API_ENDPOINT = process.env.VITE_API_URL || 'http://localhost:3000/mock-api';
</script>


<style scoped>
#BasicLayout {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: auto;
  max-width: none;
}

#BasicLayout a-layout {
  display: flex;
  flex-direction: column;
  min-height: auto;
}

/* 内容区域扩展以填充空间 */
#BasicLayout .content {
  flex: 1; /* 自动扩展，推页脚到底部 */
  padding: 20px;
  background: linear-gradient(to right, darkblue, lightblue); /* 示例渐变背景 */
}

.main-content {
  flex: 1;
  width: 100%;
  overflow-y: auto; /* 允许内容滚动 */
}

.lab-title h1 {
  margin: 5px 0;
  font-size: 2.2em;
  color: #1a237e;
}

.spacer {
  height: 40px; /* 根据页眉实际高度调整 */
}

.title-section {
  padding: 30px 20px;
  background: #f8f9fa;
  border-bottom: 2px solid #1a237e;
  margin: 0 -20px 40px; /* 扩展左右边距 */
}

.page-title {
  font-size: 2.4rem;
  color: #1a237e;
  margin-bottom: 10px;
  text-align: center;
}

.page-subtitle {
  font-size: 1.6rem;
  color: #4a5568;
  text-align: center;
  font-weight: 300;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .spacer {
    height: 30px;
  }
  .title-section {
    padding: 20px 15px;
    margin-bottom: 30px;
  }
  .page-title {
    font-size: 1.8rem;
  }
  .page-subtitle {
    font-size: 1.2rem;
  }
}
</style>
