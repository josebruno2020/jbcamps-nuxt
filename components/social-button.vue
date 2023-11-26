<template>
  <div class="social-link">
    <a :href="link" target="_blank">
      <BootstrapIcon :name="icon" style="font-size: 1.65rem; color: white;" />
    </a>
  </div>
</template>

<script setup lang="ts">
interface socialButtonProps {
  icon: 'github' | 'linkedin' | 'envelope' | 'whatsapp'
  link: string
  background?: string
}
defineProps<socialButtonProps>()

</script>

<style scoped>

.social-link{
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: .3s;
}
.social-link:hover {
  background: v-bind(background);
}
</style>