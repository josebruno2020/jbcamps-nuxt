<template>
  <div class="welcome-title">
    <p>{{ $t('personal.position') }}</p>
    <h2 class="title">José Bruno Campanholi dos Santos</h2>
    <p>{{ $t('personal.phrase') }}</p>
  </div>
</template>

<script setup lang="ts">
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