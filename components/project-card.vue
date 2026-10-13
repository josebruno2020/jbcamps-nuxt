<template>
  <a :href="link" target="_blank" rel="noopener" class="project-card">
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
    <div class="footer">
      <div v-if="skills" class="tags">
        <v-chip v-for="skill in Object.values(skills)" :key="skill" size="small" variant="tonal" color="primary">
          {{ skill }}
        </v-chip>
      </div>
      <v-icon icon="mdi-arrow-top-right" class="arrow" :title="$t('visit')" />
    </div>
  </a>
</template>

<script setup lang="ts">
export interface projectCardProps {
  title: string
  description: string
  link: string
  skills?: object
}

defineProps<projectCardProps>()
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  border-radius: var(--radius);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  color: inherit;
  text-decoration: none;
  transition: transform .2s, border-color .2s, background .2s;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  background: rgba(255, 255, 255, 0.07);
}

.title {
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.description {
  flex: 1;
  opacity: .85;
}

.footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 12px;
  margin-top: 20px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.arrow {
  color: var(--accent-warm);
  transition: transform .2s;
}

.project-card:hover .arrow {
  transform: translate(3px, -3px);
}
</style>
