<template>
  <v-btn :href="link" target="_blank" :prepend-icon="icon" :color="primary ? 'primary' : undefined"
    :variant="primary ? 'flat' : 'tonal'" size="large" class="contact-button">
    {{ label }}
  </v-btn>
</template>

<script setup lang="ts">
interface socialButtonProps {
  icon: string
  link: string
  label: string
  primary?: boolean
}
defineProps<socialButtonProps>()
</script>

<style scoped>
.contact-button {
  text-transform: none;
  letter-spacing: normal;
  font-weight: 700;
}
</style>
