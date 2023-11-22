<template>
  <div class="section-title">
    <h2 class="title">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
interface sectionTitleProps {
  title: string
}

defineProps<sectionTitleProps>()
</script>

<style scoped>
.section-title {
  margin-top: 50px;
}

.title {
  font-size: 1.8rem;
}

@media (max-width: 800px) {
  .section-title h2 {
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
  }
}
</style>