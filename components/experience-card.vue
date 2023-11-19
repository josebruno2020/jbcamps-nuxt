<template>
  <div class="experience-card" @mouseenter="onHover" @mouseleave="reset">
    <v-card height="115"  :title="title" :subtitle="subtitle" :text="description" :variant="variant"></v-card>
  </div>
</template>

<script setup lang="ts">
interface experienceCardProps {
  title: string
  subtitle: string
  description?: string
}
defineProps<experienceCardProps>()
const variant = ref<'tonal' | 'plain'>('plain')

function onHover() {
  variant.value = 'tonal'
}

function reset() {
  variant.value = 'plain'
}
</script>

<style scoped>
.experience-card {
  margin: 20px 0;
}
</style>