<template>
  <div id="GlobalHeader">
    <a-layout>
      <a-layout-header class="header" style="position: relative; z-index: 100; ">
        <nav class="nav-main">
          <a href="#">HOME</a>
          <a href="#">PI KHALIFA</a>
          <a href="#">MEMBERS</a>
          <a href="#">PROJECTS</a>
          <a href="#">POSITIONS</a>
          <a href="#">TEACHING</a>
          <a href="#">NEWS</a>
          <a href="#">CONTACT</a>
        </nav>
      </a-layout-header>
    </a-layout>
  </div>
</template>

<script setup>
</script>

<style scoped>
.header {
  padding-top: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  flex-shrink: 0;
}

.nav-main {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.nav-main a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

.lab-title h1 {
  margin: 5px 0;
  font-size: 2.2em;
  color: #1a237e;
}

@media (max-width: 768px) {
  .header {
    padding-top: 15px;
  }

}
</style>
