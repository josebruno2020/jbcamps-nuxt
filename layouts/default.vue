<template>
  <v-layout class="rounded rounded-md layout">
    <v-app-bar :title="$t('slug')" :color="bg" class="app-bar" scroll-behavior="collapse">
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
        {{ $t('footer') }}
      </span>
    </v-footer>
  </v-layout>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify/lib/framework.mjs';

const theme = useTheme()
const bg = ref('transparent')

const gradientPrimary = ref('rgba(73,0,70,0.5)')
const gradientSecondary = ref('rgba(0, 5, 13, 0.05)')

const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const items = [
  { title: 'En', flag: 'us' },
  { title: 'Pt', flag: 'br' },
  { title: 'Es', flag: 'es' }
]


onMounted(() => {
  changeBgColor()
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

function changeBgColor() {
  setInterval(() => {
    if (gradientPrimary.value === 'rgba(73,0,70,0.5)') {
      gradientPrimary.value = 'rgba(14, 1, 71, 0.5)'
    } else {
      gradientPrimary.value = 'rgba(73,0,70,0.5)'
    }
  }, 30000)
}
</script>

<style scoped>
.layout {
  padding: 20px 150px;
  background: linear-gradient(90deg, v-bind(gradientPrimary), v-bind(gradientSecondary), v-bind(gradientPrimary));
  background-size: 200% 200%;

  -webkit-animation: Animation 20s ease infinite;
  -moz-animation: Animation 20s ease infinite;
  animation: Animation 20s ease infinite;
}

@-webkit-keyframes Animation {
  0% {
    background-position: 10% 0%
  }

  50% {
    background-position: 91% 100%
  }

  100% {
    background-position: 10% 0%
  }
}

@-moz-keyframes Animation {
  0% {
    background-position: 10% 0%
  }

  50% {
    background-position: 91% 100%
  }

  100% {
    background-position: 10% 0%
  }
}

@keyframes Animation {
  0% {
    background-position: 10% 0%
  }
  
  50% {
    background-position: 91% 100%;
  }

  100% {
    background-position: 10% 0%
  }
}

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

@media (max-width: 600px) {
  .layout {
    padding: 10px 50px;
  }
}</style>