<template>
  <div id="TxView">
    <BasicLayout>
      <TxContent />
    </BasicLayout>
  </div>
</template>

<script setup>
import BasicLayout from "@/layout/BasicLayout.vue";
import TxContent from "@/components/TxContent.vue";
</script>

<style scoped>
#TxView {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
