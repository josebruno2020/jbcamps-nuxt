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
      <img src="~/assets/img/jbcamps.png" alt="José Bruno" title="Just carry on🚀">
    </article>
  </section>
  
  <section>
    <SectionTitle title="Skills" />
    <article class="skills">
      <SkillButton icon="devicon-typescript-plain" title="Typescript" />
      <SkillButton icon="devicon-php-plain" title="PHP" />
      <SkillButton icon="devicon-laravel-plain" title="Laravel" />
      <SkillButton icon="devicon-nodejs-plain" title="NodeJs" />
      <SkillButton icon="devicon-vuejs-plain" title="VueJs" />
      <SkillButton icon="devicon-nuxtjs-plain" title="Nuxtjs" />
      <SkillButton icon="devicon-react-plain" title="React" />
      <SkillButton icon="devicon-kotlin-plain" title="Kotlin" />
      <SkillButton icon="devicon-postgresql-plain" title="Postgres" />
      <SkillButton icon="devicon-mysql-plain" title="MySql" />
    </article>
  </section>

  <section class="experiences-education">
    <section class="experience-section">
      <SectionTitle title="Experience" />
      <article class="experiences">
        <ExperienceCard title="Ligue Telecom" subtitle="2022 - Today" description="Senior Web Developer" />
        <ExperienceCard title="Trade Technology" subtitle="2021 - 2022" description="Fullstack Web Developer" />
        <ExperienceCard title="Bitzen Tecnologia" subtitle="2021" description="Fullstack Web Developer" />
      </article>
      <MoreButton :link="linkedinUrl" />
    </section>

    <section class="education-section">
      <SectionTitle title="Education" />
      <article>
        <ExperienceCard title="Sistemas para Internet" subtitle="Unicesumar (2022)" />
        <ExperienceCard title="Licenciatura Português / Inglês" subtitle="Unicesumar (2022)" />
      </article>
      <MoreButton :link="linkedinUrl" />
    </section>
  </section>

  <SectionTitle title="Web Systems Projects" />
  <section class="projects-section">
    <ProjectCard
      title="Monintox"
      description="Sistema de gerenciamento da Clínica de desintoxicação de Sarandi/PR, emitindo notificações seguindo o padrão do Governo. Existe um chat interno dentro do sistema."
      link="https://monintox.online"
      :skills="['Laravel', 'PHP', 'VueJs', 'MySql', 'NodeJs']"
    />
    <ProjectCard
      title="RPonto+"
      description="Sistema de gerenciamento de Ponto dos Residentes do HU de Maringá/PR"
      link="https://redcap.uem.br/hum-cpr"
      :skills="['Laravel', 'MySql']"
    />
    <ProjectCard
      title="HCWM System"
      description="Sistema de gerenciamento dos Resíduos do HU de Maringá/PR"
      link="https://residuoshum.com.br/"
      :skills="['Laravel', 'MySql']"
    />
    <ProjectCard
      title="Dreno Torax"
      description="Questionários onlie sobre Cuidados de enfermagem com pacientes em uso de drenagem pleural"
      link="https://drenotorax.com.br/"
      :skills="['Laravel', 'MySql']"
    />
    <ProjectCard
      title="Orbi Backoffice"
      description="Sistema de gerenciamento e armazenamento de contratos e propostas da Corretora juntamente com seus clientes."
      link="https://backoffice.orbibrasil.com.br"
      :skills="['Laravel', 'MySql', 'Amazon S3']"
    />
  </section>

  <SectionTitle title="Websites Projects" />
  <section class="projects-section">
    <ProjectCard
      title="Orbi brasil"
      description="Site Institucional da Orbi Corretora de Mercadorias. (Em fase de atualização para uma versão mais moderna 😊)"
      link="https://orbibrasil.com.br/"
      :skills="['PHP', 'MySql']"
    />
  </section>
</template>

<script setup lang="ts">
const linkedinUrl = ref('https://www.linkedin.com/in/josé-bruno-campanholi-dos-santos-354502204')
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

.experience-section, .education-section {
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

  .experience-section, .education-section {
    width: 100%;
  }
}
</style>