<template>
  <section class="welcome">   
    <article class="welcome-social">
      <WelcomeTitle title="test" />
      <div class="social-media">
        <SocialButton icon="github" link="https://github.com/josebruno2020" background="black" />
        <SocialButton icon="linkedin" :link="linkedinUrl" background="#0a66c2" />
        <SocialButton icon="whatsapp"
          link="https://api.whatsapp.com/send?phone=5544988447123&text=I%20want%20to%20talk%20with%20you%20about..."
          background="#00a884" />
        <SocialButton icon="envelope" link="https://www.linkedin.com/in/josé-bruno-campanholi-dos-santos-354502204" />
      </div>
    </article>
    
    <article class="welcome-img">
      <img src="~/assets/img/jbcamps.png" alt="José Bruno" :title="$t('personal.phrase')">
    </article>
  </section>
 
  <section>
    <SectionTitle :title="$t('sections.skills')" />
    <article class="skills">
      <SkillButton icon="typescript" title="Typescript" />
      <SkillButton icon="javascript" title="Javascript" />
      <SkillButton icon="nodejs" title="NodeJs" />
      <SkillButton icon="vuejs" title="VueJs" />
      <SkillButton icon="nuxtjs" title="Nuxtjs" />
      <SkillButton icon="react" title="React" />
      <SkillButton icon="php" title="PHP" />
      <SkillButton icon="laravel" title="Laravel" />
      <SkillButton icon="kotlin" title="Kotlin" />
      <SkillButton icon="postgresql" title="Postgres" />
      <SkillButton icon="mysql" title="MySql" />
    </article>
  </section>

  <section class="experiences-education">
    <section class="experience-section">
      <SectionTitle :title="$t('sections.experience')" />
      <article class="experiences">
        <ExperienceCard v-for="({ title, position, period }) in experiences"
          :title="title"
          :subtitle="period"
          :description="position"
        />
      </article>
      <MoreButton :link="linkedinUrl" />
    </section>

    <section class="education-section">
      <SectionTitle :title="$t('sections.education')" />
      <article>
        <ExperienceCard v-for="({title, subtitle}) in educations"
          :title="title"
          :subtitle="subtitle"
        />
      </article>
      <MoreButton :link="linkedinUrl" />
    </section>
  </section>

  <SectionTitle :title="$t('sections.systems')" />
  <section class="projects-section">
    <ProjectCard v-for="({ title, description, link, skills }) in webSystems" :title="title" :description="description"
      :link="link" :skills="skills" />
  </section>

  <SectionTitle :title="$t('sections.websites')" />
  <section class="projects-section">
    <ProjectCard v-for="({ title, description, link, skills }) in webSites" :title="title" :description="description"
      :link="link" :skills="skills" />
  </section>

  <SectionTitle :title="$t('sections.personal')" />
  <section class="projects-section">
    <ProjectCard v-for="({ title, description, link, skills }) in personalProjects" :title="title" :description="description"
      :link="link" :skills="skills" />
  </section>

  <SectionTitle :title="$t('sections.testimonials')" />
  <section class="testimonials">
    <Testimonials />
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

const linkedinUrl = ref('https://www.linkedin.com/in/josé-bruno-campanholi-dos-santos-354502204')
const { messages, locale } = useI18n()
const experiences = getFromMessages('experience') as experienceI18n[]
const educations = getFromMessages('education') as experienceCardProps[]
const webSystems = getFromMessages('systems') as projectCardProps[]
const webSites = getFromMessages('websites') as projectCardProps[]
const personalProjects = getFromMessages('projectPersonal') as projectCardProps[]

function getFromMessages (key: string) {
  return messages.value[locale.value][key]
}
</script>

<style scoped>
.welcome {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.welcome-social {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 3rem;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
}

.welcome-img img {
  border: 2px solid #00897B;
  border-radius: 50%;
  width: 180px;
}

.skills {
  width: 100%;
  margin-top: 10px;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.experiences-education {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.experience-section,
.education-section {
  width: 45%;
}

.education-section {
  justify-self: flex-end;
}

.projects-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.testimonials {
  margin-top: 10px;
}



@media (max-width: 800px) {
  .welcome {
    flex-direction: column-reverse;
  }

  .welcome-img {
    display: flex;
    justify-content: center;
  }

  .welcome-social {
    gap: 1rem;
  }

  .social-media {
    width: 100%;
  }

  .skills {
    justify-content: center;
  }

  .experience-section,
  .education-section {
    width: 100%;
  }
}
</style>