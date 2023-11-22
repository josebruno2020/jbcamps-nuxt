<template>
  <div class="skill-button" @click="onClick">
    <Transition>
      <span v-if="titleVisible" class="skill-name">{{ title }}</span>
    </Transition>
    <Transition>
      <i :class="`devicon-${icon}-plain`" class="icon" v-if="imageVisible"></i>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface skillButtonProps {
  title: string
  icon: string
}
defineProps<skillButtonProps>()

const titleVisible = ref(false)
const imageVisible = ref(true)

function onClick () {
  imageVisible.value = !imageVisible.value
  titleVisible.value = !titleVisible.value
}
</script>

<style scoped>
.skill-button {
  border: 1px solid #00897B;
  border-radius: 15px;

  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
}

.skill-name {
  font-weight: 400;
}

.icon {
  font-size: 3rem !important;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

@media (max-width: 800px) {
  .skill-button {
    width: 70px;
    height: 70px;
  }

  .skill-name {
    font-size: .8rem;
  }

  .icon {
    font-size: 2.5rem !important;
  }
}
</style>