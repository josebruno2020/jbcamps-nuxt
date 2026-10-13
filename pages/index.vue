<template>
  <section class="welcome">
    <article class="welcome-text">
      <WelcomeTitle />
      <div class="contacts">
        <SocialButton icon="mdi-whatsapp" :link="whatsappUrl" label="WhatsApp" primary />
        <SocialButton icon="mdi-linkedin" :link="linkedinUrl" label="LinkedIn" />
        <SocialButton icon="mdi-github" link="https://github.com/josebruno2020" label="GitHub" />
        <SocialButton icon="mdi-email-outline" link="mailto:josebrunocampanholi@gmail.com" :label="$t('contact.email')" />
      </div>
    </article>

    <article class="welcome-img">
      <img src="~/assets/img/jbcamps.jpg" alt="José Bruno" :title="$t('personal.phrase')">
    </article>
  </section>

  <section>
    <SectionTitle :title="$t('sections.skills')" />
    <article class="skills">
      <SkillButton icon="typescript" title="TypeScript" />
      <SkillButton icon="javascript" title="JavaScript" />
      <SkillButton icon="nodejs" title="Node.js" />
      <SkillButton icon="vuejs" title="Vue.js" />
      <SkillButton icon="nuxtjs" title="Nuxt" />
      <SkillButton icon="react" title="React" />
      <SkillButton icon="php" title="PHP" />
      <SkillButton icon="laravel" title="Laravel" />
      <SkillButton icon="kotlin" title="Kotlin" />
      <SkillButton icon="postgresql" title="PostgreSQL" />
      <SkillButton icon="mysql" title="MySQL" />
    </article>
  </section>

  <section class="experiences-education">
    <section class="experience-section">
      <SectionTitle :title="$t('sections.experience')" />
      <ExperienceCard v-for="({ title, position, period }) in experiences" :key="title" :title="title"
        :subtitle="period" :description="position" />
      <MoreButton :link="linkedinUrl" />
    </section>

    <section class="education-section">
      <SectionTitle :title="$t('sections.education')" />
      <ExperienceCard v-for="({ title, subtitle }) in educations" :key="title" :title="title" :subtitle="subtitle" />
      <MoreButton :link="linkedinUrl" />
    </section>
  </section>

  <SectionTitle :title="$t('sections.testimonials')" />
  <Testimonials />

  <SectionTitle :title="$t('sections.systems')" />
  <section class="projects-section">
    <ProjectCard v-for="({ title, description, link, skills }) in webSystems" :key="title" :title="title"
      :description="description" :link="link" :skills="skills" />
  </section>

  <SectionTitle :title="$t('sections.personal')" />
  <section class="projects-section">
    <ProjectCard v-for="({ title, description, link, skills }) in personalProjects" :key="title" :title="title"
      :description="description" :link="link" :skills="skills" />
  </section>
</template>

<script setup lang="ts">
import type { experienceCardProps } from '~/components/experience-card.vue';
import type { projectCardProps } from '~/components/project-card.vue';

interface experienceI18n {
  title: string
  position: string
  period: string
}

const linkedinUrl = 'https://www.linkedin.com/in/josé-bruno-campanholi-dos-santos-354502204'
const { messages, locale, t } = useI18n()
const whatsappUrl = `https://api.whatsapp.com/send?phone=5544988447123&text=${encodeURIComponent(t('contact.whatsappMessage'))}`
const experiences = getFromMessages('experience') as experienceI18n[]
const educations = getFromMessages('education') as experienceCardProps[]
const webSystems = getFromMessages('systems') as projectCardProps[]
const personalProjects = getFromMessages('projectPersonal') as projectCardProps[]

function getFromMessages(key: string) {
  return messages.value[locale.value][key]
}
</script>

<style scoped>
.welcome {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  align-items: center;
  gap: 48px;
  padding: 48px 0 16px;
}

.contacts {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.welcome-img {
  display: flex;
  justify-content: center;
}

.welcome-img img {
  width: 100%;
  max-width: 360px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--accent);
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.experiences-education {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 48px;
}

.projects-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

@media (max-width: 800px) {
  .welcome {
    grid-template-columns: 1fr;
    gap: 32px;
    padding-top: 16px;
    text-align: center;
  }

  .welcome-img {
    order: -1;
  }

  .welcome-img img {
    max-width: 240px;
  }

  .contacts {
    justify-content: center;
  }

  .experiences-education,
  .projects-section {
    grid-template-columns: 1fr;
  }
}
</style>
