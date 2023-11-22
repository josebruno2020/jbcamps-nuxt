<template>
  <div class="more-button">
    <a :href="link" target="_blank" :title="`${$t('more')}...`">
      <v-btn prepend-icon="mdi-arrow-top-right" variant="tonal" style="width: 100%;">
        {{ $t('more') }}
      </v-btn>
    </a>
  </div>
</template>

<script setup lang="ts">
interface moreButtonProps {
  link: string
}

defineProps<moreButtonProps>()
</script>

<style scoped>
.more-button {
  margin-top: 10px;
  width: 100%;
}

a {
  text-decoration: none;
}
</style>