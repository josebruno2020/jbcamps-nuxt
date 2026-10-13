<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: () => t('meta.title'),

  meta: [
    { name: 'description', content: () => t('meta.description') },
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
  ]
})
</script>