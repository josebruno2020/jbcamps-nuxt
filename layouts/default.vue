<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar :title="$t('slug')" :color="bg" class="app-bar">
      <template v-slot:append>
        <v-menu location="bottom">
          <template v-slot:activator="{ props }">
            <a href="https://github.com/josebruno2020/jbcamps-nuxt" target="_blank">
              <v-btn icon="mdi-github" :title="$t('github')"></v-btn>
            </a>
            <v-btn icon="mdi-translate" v-bind="props"></v-btn>
          </template>

          <v-list density="compact">
            <v-list-item :active="locale === title.toLowerCase()" v-for="({ title, flag }, index) in items" :key="index">
              <NuxtLink :to="switchLocalePath(title.toLocaleLowerCase())" class="lang-item">
                <span :class="`fi fi-${flag}`"></span>
                <v-list-item-title>

                  {{ title }}

                </v-list-item-title>
              </NuxtLink>
            </v-list-item>
          </v-list>
        </v-menu>

      </template>
    </v-app-bar>
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

const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const items = [
  { title: 'En', flag: 'us' },
  { title: 'Pt', flag: 'br' },
]


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

<style scoped>
.app-bar {
  display: flex;
  align-items: center;
}

a {
  text-decoration: none;
  color: white;

}

.lang-item {
  gap: .5rem;
  display: flex;
  justify-content: space-between;
}
</style>