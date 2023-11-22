<template>
  <div class="project-card">
    <v-card class="card" min-height="200" prepend-icon="mdi-home" :title="title"
      variant="tonal" target="_blank" :href="link">
      <v-card-text>
        {{ description }}

        <p class="skills" v-if="skills">
          {{ Object.values(skills)?.join(' | ') }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script setup lang="ts">
export interface projectCardProps {
  title: string
  description: string
  link: string
  skills?: object
}

defineProps<projectCardProps>()
</script>

<style scoped>
.project-card {
  margin: 20px 0;
  width: 45%;
}
.card {
  -webkit-transition: background-color .3s linear;
  -moz-transition: background-color .3s linear;
  -o-transition: background-color .3s linear;
  -ms-transition: background-color .3s linear;
  transition: background-color .3s linear;
}
.card:hover {
  background-color: rgba(255,255,255,0.2) !important;
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