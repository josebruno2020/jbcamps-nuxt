<template>
  <div>
    <v-carousel height="auto" hide-delimiters show-arrows="hover" class="carousel">
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <div class="testimonial">
          <q class="description" v-html="slide.description"></q>
          <article class="author">
            <img v-if="slide.image" :src="`/img/${slide.image}`" :alt="slide.name" class="testimonial-img">
            <a v-if="slide.link" :href="slide.link" target="_blank" rel="noopener" class="testimonial-link">
              {{ slide.name }}
            </a>
            <span v-else class="testimonial-name">{{ slide.name }}</span>
            <div v-for="position in slide.position" :key="position" class="testimonial-position">
              {{ position }}
            </div>
          </article>
        </div>
      </v-carousel-item>
    </v-carousel>
    <p v-if="note" class="note">{{ note }}</p>
  </div>
</template>

<script setup lang="ts">
interface testimonialSlide {
  name: string
  description: string
  position: string[]
  image?: string
  link?: string
}
const { locale, messages, t } = useI18n()
const slides = messages.value[locale.value].testimonials as testimonialSlide[]
const note = t('testimonialNote')
</script>

<style scoped>
.carousel {
  border-radius: var(--radius);
  background: var(--card-bg);
  border: 1px solid var(--card-border);
}

.testimonial {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-height: 460px;
  padding: 40px 80px;
  text-align: center;
}

.description {
  font-size: 1.2rem;
  font-style: italic;
  max-width: 760px;
}

.author {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.testimonial-img {
  width: 88px;
  height: 88px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid var(--accent);
  margin-bottom: 8px;
}

.testimonial-name,
.testimonial-link {
  font-size: 1.15rem;
  font-weight: 700;
  color: inherit;
  text-decoration: none;
}

.testimonial-link:hover {
  color: var(--accent-warm);
}

.testimonial-position {
  font-size: .85rem;
  opacity: .7;
  line-height: 1.4;
}

.note {
  margin-top: 8px;
  text-align: right;
  font-size: .8rem;
  opacity: .6;
}

@media (max-width: 800px) {
  .description {
    font-size: 1rem;
  }

  .testimonial {
    padding: 32px 24px;
    min-height: 600px;
  }
}
</style>
