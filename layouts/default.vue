<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="My little space in the world 🌍" :color="bg"></v-app-bar>
    <v-main class="">
      <slot />
    </v-main>

    <v-footer app name="footer" class="d-flex justify-center">
      <span class="text-center">
        Made with ❤️
      </span>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const bg = ref('transparent')
const theme = useTheme()

onMounted(() => {
  window.onscroll = () => {
    changeColor()
  }
})

function changeColor() {
  if (
    document.body.scrollTop > 40 ||
    document.documentElement.scrollTop > 40
  ) {
    bg.value = theme.global.current.value.colors.surface
  } else {
    bg.value = 'transparent'
  }
}
</script>