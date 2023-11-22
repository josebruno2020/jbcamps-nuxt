export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      slug: 'My little space in the world 🌍',
      github: 'Star this Repo on Github ⭐',
      personal: {
        position: 'Senior Fullstack Developer',
        phrase: 'Just carry on 🚀'
      },
      sections: {
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        systems: 'Web Systems Projects',
        websites: 'Websites Projects',
        personal: 'Personal Projects',
        testimonials: 'Testimonials'
      },
      today: 'Today',
      more: 'More',
      experience: [
        {
          title: 'Ligue Telecom',
          position: 'Senior Web Developer',
          period: '2022 - Today'
        },
        {
          title: 'Trade Technology',
          position: 'Fullstack Web Developer',
          period: '2021 - 2022'
        },
        {
          title: 'Bitzen Tecnologia',
          position: 'Fullstack Web Developer',
          period: '2021'
        }
      ],
      education: [
        {
          title: 'Internet Systems',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Portuguese / English Degree',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        {
          title: 'Monintox',
          description: 'Management system for the Sarandi/PR (Brazil) detoxification clinic, issuing notifications following the Brazil Government standard, with an integrated chat for nurses to communicate with each other in real time.',
          skills: ['Laravel', 'PHP', 'VueJs', 'Mysql', 'NodeJs'],
          link: 'https://monintox.online'
        },
        {
          title: 'RPonto+',
          description: 'Punch the clock management system for HUM (University Hospital of Maringá) Residents.',
          skills: ['Laravel', 'Mysql'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        {
          title: 'HCWM System',
          description: 'Hospital waste management system at the HUM (University Hospital of Maringá).',
          skills: ['Laravel', 'Mysql'],
          link: 'https://residuoshum.com.br/'
        },
        {
          title: 'Dreno Torax',
          description: 'Online quizzes on Nursing care for patients using pleural drainage.',
          skills: ['Laravel', 'Mysql'],
          link: 'https://drenotorax.com.br/'
        },
        {
          title: 'Orbi Backoffice',
          description: 'Management and storage system for contracts and proposals for Orbi Corretora with his clients.',
          skills: ['Laravel', 'Mysql', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Institutional website of Orbi Corretora de Mercadorias. (In the update phase to a more modern version 😊).',
          skills: ['PHP', 'Mysql'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'System for personal financial control or for a group of users. Contact me to create a user and try it out, for free.',
          skills: ['PHP', 'Mysql', 'VueJs'],
          link: 'https://financial.jbcamps.dev/'
        }
      ],
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Specialist in Information Systems from UEM.',
            'Specialist in Applied Statistics from UEM.',
            'Master in Computer Science from UFRGS.',
            'PhD in Applied Computing from PUC-PR.',
            'IT expert for the PR Court of Justice.',
            'Head of the Development Division-NPD-UEM.'
          ],
          description: "José Bruno is a competent, efficient, flexible and honest professional. He knows how to work in a team and has IT knowledge to develop applications and systems efficiently. I've done several projects with it and the result was praise from users for all the work. I highly recommend your work! (Original in Portuguese)."
        },
        {
          name: 'Gisele Ferreira',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: 'I received a recommendation for his work, and today I recommend his work. He developed my system quickly, according to very specific needs, as it was a previously unheard-of health system. In addition to being very kind, helpful and polite. Just to thank. (Original in Portuguese).'
        },
        {
          name: 'Paula Abrante',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: "I would like to praise José Bruno's competence and commitment. An excellent professional who developed a system for my master's work. <br> His commitment was very important for me to be able to finish my work. (Original in Portuguese)."
        }
      ],
    },
    pt: {
      slug: 'Meu pequeno espaço no mundo 🌍',
      github: 'Dê uma estrela no Github ⭐',
      personal: {
        position: 'Desenolvedor Fullstack Sênior',
        phrase: 'Apenas siga em frente 🚀'
      },
      sections: {
        skills: 'Habilidades',
        experience: 'Experiência',
        education: 'Formação',
        systems: 'Projetos em Web Sistemas',
        websites: 'Projetos em Sites',
        personal: 'Projetos pessoais',
        testimonials: 'Depoimentos'
      },
      today: 'Hoje',
      more: 'Mais',
      experience: [
        {
          title: 'Ligue Telecom',
          position: 'Desenvolvedor Web Sênior',
          period: '2022 - Hoje'
        },
        {
          title: 'Trade Technology',
          position: 'Desenvolvedor Web Fullstack',
          period: '2021 - 2022'
        },
        {
          title: 'Bitzen Tecnologia',
          position: 'Desenvolvedor Web Fullstack',
          period: '2021'
        }
      ],
      education: [
        {
          title: 'Sistemas para Internet',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Licenciatura Português / Inglês',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        {
          title: 'Monintox',
          description: 'Sistema de gerenciamento da Clínica de desintoxicação de Sarandi/PR, emitindo notificações seguindo o padrão do Governo, com um chat integrado para os enfermeiros se comunicarem entre si em tempo real.',
          skills: ['Laravel', 'PHP', 'VueJs', 'Mysql', 'NodeJs'],
          link: 'https://monintox.online'
        },
        {
          title: 'RPonto+',
          description: 'Sistema de gerenciamento de Ponto dos Residentes do HUM (Hospital Universitário de Maringá).',
          skills: ['Laravel', 'Mysql'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        {
          title: 'HCWM System',
          description: 'Sistema de gerenciamento dos Resíduos hospitalares do HUM (Hospital Universitário de Maringá).',
          skills: ['Laravel', 'Mysql'],
          link: 'https://residuoshum.com.br/'
        },
        {
          title: 'Dreno Torax',
          description: 'Questionários onlie sobre Cuidados de enfermagem com pacientes em uso de drenagem pleural',
          skills: ['Laravel', 'Mysql'],
          link: 'https://drenotorax.com.br/'
        },
        {
          title: 'Orbi Backoffice',
          description: 'Sistema de gerenciamento e armazenamento de contratos e propostas da Orbi Corretora juntamente com seus clientes.',
          skills: ['Laravel', 'Mysql', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Site Institucional da Orbi Corretora de Mercadorias. (Em fase de atualização para uma versão mais moderna 😊)',
          skills: ['PHP', 'Mysql'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'Sistema para controle financeiro pessoal ou para grupo de usuários. Contate-me para criar um usuário e fazer o teste, gratuitamente.',
          skills: ['PHP', 'Mysql', 'VueJs'],
          link: 'https://financial.jbcamps.dev/'
        }
      ],
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Especialista em Sistema de Informações pela UEM.',
            'Especialista em Estatística Aplicada pela UEM.',
            'Mestre em Ciência da Computação pela UFRGS.',
            'Doutor em Computação Aplicada pela PUC-PR.',
            'Perito em TI para o Tribunal de Justiça do PR.',
            'Chefe da Divisão de Desenvolvimento-NPD-UEM.'
          ],
          description: 'José Bruno é um profissional competente, eficiente, flexível  e honesto. Sabe trabalhar em equipe e tem conhecimento de TI para desenvolver aplicativos e sistemas de forma eficiente. Já fiz vários projetos com ele e o resultado foi de elogio por parte dos usuários para todos os trabalho. Recomendo o seu trabalho com muito gosto!'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Recebi uma indicação do trabalho dele, e hoje eu que indico o seu trabalho. Ele desenvolveu o meu sistema com agilidade, de acordo com as necessidades que eram muito específicas, por se tratar de um sistema na área da saúde, até então inédito. Além de ser muito gentil, prestativo e educado. Só agradecer.'
        },
        {
          name: 'Paula Abrante',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Gostaria de exaltar a competência e comprometimento do José Bruno. Um profissional excelente que desenvolveu um sistema para o meu trabalho de mestrado. <br> O seu comprometimento foi muito importante para que conseguisse terminar o meu trabalho.'
        }
      ],
    }
  }
}))