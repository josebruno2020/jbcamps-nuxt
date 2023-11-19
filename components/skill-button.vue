<template>
  <div class="skill-button" @mouseenter="onHover" @mouseout="reset">
    <Transition>
      <span v-if="titleVisible" class="skill-name">{{ title }}</span>
    </Transition>
    <Transition>
      <i :class="icon" style="font-size: 3rem;" v-if="imageVisible"></i>
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

function onHover() {
  imageVisible.value = false
  setTimeout(() => titleVisible.value = true, 50)
  // titleVisible.value = true
}

function reset() {
  titleVisible.value = false
  setTimeout(() => imageVisible.value = true, 50)
  // imageVisible.value = true
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
}

/* .skill-button:hover {
  background-color: rgba(37, 49, 55, .1)
} */

.skill-name {
  font-weight: 400;
  /* z-index: 9999; */
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.02s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>