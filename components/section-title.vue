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
  margin: 64px 0 24px;
}

.title {
  font-size: 1.9rem;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
}

.title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 48px;
  height: 4px;
  border-radius: 4px;
  background: var(--accent-warm);
}

@media (max-width: 800px) {
  .title {
    font-size: 1.6rem;
  }
}
</style>
