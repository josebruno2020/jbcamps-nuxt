<template>
  <div class="skill-chip" :title="title">
    <i :class="`devicon-${icon}-plain`" class="icon"></i>
    <span class="skill-name">{{ title }}</span>
  </div>
</template>

<script setup lang="ts">
interface skillButtonProps {
  title: string
  icon: string
}
defineProps<skillButtonProps>()
</script>

<style scoped>
.skill-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  border-radius: 999px;
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  transition: transform .2s, border-color .2s;
}

.skill-chip:hover {
  transform: translateY(-3px);
  border-color: var(--accent);
}

.skill-name {
  font-weight: 600;
}

.icon {
  font-size: 1.6rem;
}
</style>
