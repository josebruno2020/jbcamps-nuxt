<template>
  <v-btn :href="link" target="_blank" prepend-icon="mdi-arrow-top-right" variant="text" color="primary"
    class="more-button">
    {{ $t('more') }}
  </v-btn>
</template>

<script setup lang="ts">
interface moreButtonProps {
  link: string
}

defineProps<moreButtonProps>()
</script>

<style scoped>
.more-button {
  text-transform: none;
  letter-spacing: normal;
  font-weight: 700;
}
</style>
