<template>
  <div id="GlobalFooter">
    <a-layout>
      <a-layout-footer class="footer-content">
        <!-- 页脚链接 -->
        <div class="footer-links">
          <a href="https://www.khalifaadam.com/">NEURAL INTERFACE TECHNOLOGY LAB</a>
          <a href="https://www.ece.ufl.edu/">ELECTRICAL AND COMPUTER ENGINEERING</a>
        </div>
        <!-- 联系信息 -->
        <div class="footer-contact">
          <p>Edited in 03/09/2025</p>
          <p>P.O. Box 116200 216 Larsen Hall Gainesville, FL 32611-6200 • 32611-6550</p>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup>
</script>

<style scoped>
.footer-content {
  background-color: #333; /* 深灰色背景 */
  color: #ccc; /* 浅灰色文字 */
  padding: 20px 0;
  flex-shrink: 0;
}

.footer-links {
  display: flex;
  justify-content: center; /* 水平居中 */
  gap: 20px; /* 链接间距 */
}

.footer-links a {
  color: #ccc; /* 链接颜色 */
  text-decoration: none; /* 去除下划线 */
  font-size: 16px;
  position: relative;
}

/* 添加分隔符 */
.footer-links a:not(:last-child)::after {
  content: '|'; /* 竖线分隔符 */
  position: absolute;
  right: -10px; /* 分隔符位置 */
  color: #ccc;
}

/* 联系信息居中 */
.footer-contact {
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .footer-links {
    flex-direction: column; /* 小屏幕时垂直排列 */
    align-items: center; /* 垂直居中对齐 */
  }
}
</style>
