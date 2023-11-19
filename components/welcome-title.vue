<template>
  <div class="welcome-title">
    <p>Senior Fullstack Developer</p>
    <h2 class="title">José Bruno Campanholi dos Santos</h2>
    <p>Just carry on 🚀</p>
  </div>
</template>

<script setup lang="ts">
interface titleProps {
  title: string
}
</script>

<style scoped>
.welcome-title {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

@media (max-width: 800px) {
  .welcome-title {
    width: 100%;
    align-items: center;
  }

  .title {
    font-size: 1rem;
  }
}
</style>