<template>
  <v-carousel height="auto" hide-delimiters progress="#00897B" show-arrows="hover">
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet class="testimonial">
        <div class="testimonial-container">
          <div class="text-justify">
            <q class="text-justify description" v-html="slide.description"></q>
          </div>
          <article class="text-center mt-5">
            <img v-if="slide.image" :src="`/img/${slide.image}`" alt="" class="testimonial-img">
            <a :href="slide.link" target="_blank" class="testimonial-link" :title="slide.name">
              <div class="testimonial-name">
                {{ slide.name }}
              </div>
            </a>
            <div v-for="position in slide.position" style="line-height: 1.35rem;">
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
  image?: string
  link?: string
}
const { locale, messages } = useI18n()
const slides = messages.value[locale.value].testimonials as testimonialSlide[]
</script>

<style scoped>
.carousel {
  min-height: 350px !important;
}

.testimonial {
  min-height: 500px !important;
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
  margin-top: 3px;
  font-size: 1.2rem;
  font-weight: 400;
}

.testimonial-position {
  font-size: .9rem;
}

.testimonial-img {
  width: 100px;
  border-radius: 50%;
}

.testimonial-link {
  color: white;
}


@media (max-width: 800px) {
  .description {
    font-size: 1rem;
  }

  .testimonial {
    padding: 30px;
  }

  .testimonial-position {
    font-size: .65rem;
  }

  .testimonial-img {
    width: 85px;
  }
}
</style>