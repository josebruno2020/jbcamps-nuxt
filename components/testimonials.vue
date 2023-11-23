<template>
  <v-carousel height="auto" hide-delimiters progress="white" show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet class="testimonial">
        <div class="testimonial-container">
          <div>
            <q class="text-justify description" v-html="slide.description"></q>
          </div>
          <article class="text-center mt-5">
            <div class="testimonial-name">
              {{ slide.name }}
            </div>
            <div v-for="position in slide.position">
              <span class="testimonial-position">{{ position }}</span>
            </div>
          </article>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
interface testimonialSlide {
  name: string
  description: string
  position: string[]
}
const { locale, messages } = useI18n()
const slides = messages.value[locale.value].testimonials as testimonialSlide[]
</script>

<style scoped>
.carousel {
  min-height: 350px !important;
}

.testimonial {
  min-height: 450px !important;
  display: flex;
  padding: 20px 80px;
  background-color: rgba(255, 255, 255, 0.1) !important;
}

.testimonial-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.description {
  font-size: 1.3rem;
}

.testimonial-name {
  margin-top: 15px;
  font-size: 1.2rem;
  font-weight: 400;
}

.testimonial-position {
  font-size: .9rem;
}


@media (max-width: 800px) {
  .description {
    font-size: 1rem;
  }

  .testimonial {
    padding: 30px;
  }

  .testimonial-position {
    font-size: .8rem;
  }
}
</style>