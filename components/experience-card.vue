<template>
  <div class="experience-card">
    <h3 class="title">{{ title }}</h3>
    <p v-if="description" class="description">{{ description }}</p>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
export interface experienceCardProps {
  title: string
  subtitle: string
  description?: string
}
defineProps<experienceCardProps>()
</script>

<style scoped>
.experience-card {
  position: relative;
  margin-bottom: 14px;
  padding: 16px 20px 16px 24px;
  border-radius: var(--radius);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  transition: background .2s;
}

.experience-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 18px;
  bottom: 18px;
  width: 4px;
  border-radius: 4px;
  background: var(--accent);
}

.experience-card:hover {
  background: rgba(255, 255, 255, 0.07);
}

.title {
  font-size: 1.15rem;
}

.description {
  font-weight: 600;
  color: var(--accent-warm);
}

.subtitle {
  font-size: .9rem;
  opacity: .7;
}
</style>
