<template>
  <v-layout class="layout">
    <v-app-bar flat color="transparent" class="app-bar" height="68">
      <div class="app-bar-inner">
        <span class="brand">{{ $t('slug') }}</span>
        <div class="app-bar-actions">
          <v-btn icon="mdi-github" variant="text" href="https://github.com/josebruno2020/jbcamps-nuxt" target="_blank"
            :title="$t('github')" :aria-label="$t('github')" />
          <v-menu location="bottom end">
            <template #activator="{ props }">
              <v-btn variant="tonal" v-bind="props" class="lang-button">
                {{ locale.toUpperCase() }}
              </v-btn>
            </template>

            <v-list density="compact" rounded="lg" class="lang-list">
              <v-list-item v-for="code in languages" :key="code" :active="locale === code"
                :to="switchLocalePath(code)">
                <v-list-item-title>{{ code.toUpperCase() }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main class="main">
      <div class="container">
        <slot />
      </div>

      <footer class="footer">
        <span class="footer-text">{{ $t('footer') }}</span>
      </footer>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath()
const { locale } = useI18n()
const languages = ['en', 'pt', 'es']
</script>

<style scoped>
.layout {
  min-height: 100vh;
  background:
    radial-gradient(900px circle at 85% -5%, rgba(38, 166, 154, 0.16), transparent 60%),
    radial-gradient(700px circle at 0% 40%, rgba(240, 178, 122, 0.08), transparent 60%),
    #161210;
}

.app-bar {
  backdrop-filter: blur(14px);
  background: rgba(22, 18, 16, 0.7) !important;
  border-bottom: 1px solid var(--card-border);
}

.app-bar-inner {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  font-weight: 700;
  font-size: 1.1rem;
}

.app-bar-actions {
  display: flex;
  align-items: center;
  gap: .5rem;
}

.main {
  min-width: 0;
}

.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 24px 64px;
}

.footer {
  display: flex;
  justify-content: center;
  padding: 20px 16px;
  border-top: 1px solid var(--card-border);
}

.footer-text {
  opacity: .7;
  font-size: .9rem;
}

@media (max-width: 600px) {
  .app-bar-inner {
    padding: 0 16px;
  }

  .brand {
    font-size: .95rem;
  }

  .container {
    padding: 16px 16px 48px;
  }
}
</style>
