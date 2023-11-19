<template>
  <div class="section-title">
    <h2>{{ title }}</h2>
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

@media (max-width: 600px) {
  .section-title h2 {
    text-align: center;
  }
}
</style>