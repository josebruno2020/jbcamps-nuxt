<template>
  <div class="project-card">
    <v-card class="card" min-height="200" prepend-icon="mdi-home" :title="title"
      variant="tonal" target="_blank" :href="link">
      <v-card-text>
        {{ description }}

        <p class="skills">
          {{ skills?.join(' | ') }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
interface projectCardProps {
  title: string
  description: string
  link: string
  skills?: string[]
}

defineProps<projectCardProps>()
</script>

<style scoped>
.project-card {
  margin: 20px 0;
  width: 45%;
}
.card {
  -webkit-transition: background-color 1000ms linear;
  -moz-transition: background-color 1000ms linear;
  -o-transition: background-color 1000ms linear;
  -ms-transition: background-color 1000ms linear;
  transition: background-color 1000ms linear;
}
.card:hover {
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%) !important;
}
.skills {
  margin-top: 20px;
  font-weight: 600;
}

@media (max-width: 600px) {
  .project-card {
    width: 100%;
  }
}
</style>