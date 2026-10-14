export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      slug: 'My little corner of the world',
      meta: {
        title: 'Portfolio - JBcamps',
        description: "Portfolio of a developer who is passionate about technology, solving problems and changing lives through innovation. I live in Maringá/PR, Brazil, but work remotely for Brazil and the world."
      },
      github: 'Star this repo on GitHub',
      personal: {
        position: 'Senior Fullstack Developer',
        phrase: 'Just keep going.'
      },
      hero: {
        greeting: "Hi, I'm",
        intro: "I build web systems that solve real problems and make people's work easier."
      },
      contact: {
        cta: 'Get in touch',
        email: 'Email',
        whatsappMessage: 'Hi! I would like to talk with you about...'
      },
      sections: {
        skills: 'Skills',
        experience: 'Experience',
        education: 'Education',
        systems: 'Web Systems',
        websites: 'Websites',
        personal: 'Personal Projects',
        testimonials: 'Testimonials'
      },
      more: 'See more',
      visit: 'Visit project',
      experience: [
        {
          title: 'Stone Co.',
          position: 'Senior Web Developer',
          period: '2024 - Present'
        },
        {
          title: 'Ligue Telecom',
          position: 'Senior Web Developer',
          period: '2022 - 2024'
        },
        {
          title: 'Trade Technology',
          position: 'Fullstack Web Developer',
          period: '2021 - 2022'
        }
      ],
      education: [
        {
          title: 'Internet Systems',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Teaching Degree in Portuguese and English',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        // {
        //   title: 'Monintox',
        //   description: 'Management system for the detoxification clinic in Sarandi/PR (Brazil). It issues notifications following the Brazilian government standard and includes an integrated chat so nurses can talk to each other in real time.',
        //   skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Node.js'],
        //   link: 'https://monintox.online'
        // },
        {
          title: 'RPonto+',
          description: 'Time clock management system for the residents of HUM (University Hospital of Maringá).',
          skills: ['Laravel', 'MySQL'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        // {
        //   title: 'HCWM System',
        //   description: 'Hospital waste management system at HUM (University Hospital of Maringá).',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://residuoshum.com.br/'
        // },
        // {
        //   title: 'Dreno Torax',
        //   description: 'Online quizzes on nursing care for patients using pleural drainage.',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://drenotorax.com.br/'
        // },
        {
          title: 'Orbi Backoffice',
          description: "System for managing and storing Orbi Corretora's contracts and proposals, shared with its clients.",
          skills: ['Laravel', 'MySQL', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Institutional website of Orbi Corretora de Mercadorias (currently being updated to a more modern version).',
          skills: ['PHP', 'MySQL'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'System for personal finance control, for one person or a group of users. Contact me to get an account and try it for free.',
          skills: ['PHP', 'MySQL', 'Vue.js'],
          link: 'https://financial.jbcamps.dev/'
        },
        {
          title: 'Destra Sistema',
          description: 'System for vehicle registration agents (despachantes) in Paraná, Brazil.',
          skills: ['Laravel', 'MySQL'],
          link: 'https://destrasistema.com.br/'
        },
        // {
        //   title: 'Taberna Medieval',
        //   description: 'Website created to share fantasy stories and horror movie reviews.',
        //   skills: ['PHP', 'WordPress'],
        //   link: 'https://tabernamedieval.com/'
        // }
      ],
      testimonialNote: 'Translated from Portuguese.',
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Specialist in Information Systems, UEM.',
            'Specialist in Applied Statistics, UEM.',
            'Master in Computer Science, UFRGS.',
            'PhD in Applied Computing, PUC-PR.',
            'IT expert for the Court of Justice of Paraná.',
            'Head of the Development Division, NPD-UEM.'
          ],
          description: "José Bruno is a competent, efficient, flexible and honest professional. He knows how to work in a team and has the IT knowledge to develop applications and systems efficiently. I have done several projects with him, and the users praised all of the work. I highly recommend his work!",
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency Care, UEM.'],
          description: 'I received a recommendation for his work, and today I recommend it myself. He developed my system quickly and met very specific needs, since it was a health system unlike anything that existed before. On top of that, he is very kind, helpful and polite. I can only say thank you.',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency Care, UEM.'],
          description: "I would like to praise José Bruno's competence and commitment. He is an excellent professional who developed a system for my master's research. <br> His commitment was essential for me to finish my work.",
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Project Manager'],
          description: 'Bruno is a wonderful person and a unique professional. His commitment to tasks, results, deadlines and quality is clear every day. He is always looking for the best solution and the best way to implement it. Beyond his own activities, he helps all project stakeholders with questions, improvements, processes and definitions. Having him on a project means good results, every time.',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency Care, UEM.'],
          description: "I would like to thank the competent professional José Bruno for his unconditional dedication and excellence in developing the software for my master's project in Urgent and Emergency Care at UEM. He was always helpful. I highly recommend him. <br> Gratitude.",
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Systems Analyst'],
          description: 'A professional of unique quality, very responsible, with broad knowledge in the areas he works in. In the 2 years I worked with him, he was always an inspiration to me. He is very respectful and competent, someone who is a pleasure to have on the team, who brings everyone along with him, and who gladly teaches and helps anyone in need. There are no words to describe what a great professional Bruno is.',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency Care, UEM.'],
          description: "I would like to give feedback on the system that José Bruno helped me create for my professional master's degree. <br> It was a success! After our meetings, the system was developed exactly as I needed it. The panel's professors and the committee were surprised by the system's features. <br> I appreciate all the support in developing my work.",
          image: 'fabiane.png'
        }
      ],
      footer: 'Made with care by José Bruno'
    },
    pt: {
      slug: 'Meu cantinho no mundo',
      meta: {
        title: 'Portfólio - JBcamps',
        description: 'Portfólio de um desenvolvedor apaixonado por tecnologia, por resolver problemas e por mudar vidas através da inovação. Moro em Maringá/PR, mas trabalho remotamente para o Brasil e o mundo.'
      },
      github: 'Dê uma estrela no GitHub',
      personal: {
        position: 'Desenvolvedor Fullstack Sênior',
        phrase: 'Apenas siga em frente.'
      },
      hero: {
        greeting: 'Olá, eu sou',
        intro: 'Crio sistemas web que resolvem problemas reais e facilitam o trabalho das pessoas.'
      },
      contact: {
        cta: 'Fale comigo',
        email: 'E-mail',
        whatsappMessage: 'Olá! Gostaria de conversar com você sobre...'
      },
      sections: {
        skills: 'Habilidades',
        experience: 'Experiência',
        education: 'Formação',
        systems: 'Sistemas Web',
        websites: 'Sites',
        personal: 'Projetos Pessoais',
        testimonials: 'Depoimentos'
      },
      more: 'Ver mais',
      visit: 'Visitar projeto',
      experience: [
        {
          title: 'Stone Co.',
          position: 'Desenvolvedor Web Sênior',
          period: '2024 - Atual'
        },
        {
          title: 'Ligue Telecom',
          position: 'Desenvolvedor Web Sênior',
          period: '2022 - 2024'
        },
        {
          title: 'Trade Technology',
          position: 'Desenvolvedor Web Fullstack',
          period: '2021 - 2022'
        }
      ],
      education: [
        {
          title: 'Sistemas para Internet',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Licenciatura em Português e Inglês',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        // {
        //   title: 'Monintox',
        //   description: 'Sistema de gerenciamento da clínica de desintoxicação de Sarandi/PR. Emite notificações seguindo o padrão do Governo e conta com um chat integrado para que os enfermeiros se comuniquem entre si em tempo real.',
        //   skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Node.js'],
        //   link: 'https://monintox.online'
        // },
        {
          title: 'RPonto+',
          description: 'Sistema de gerenciamento de ponto dos residentes do HUM (Hospital Universitário de Maringá).',
          skills: ['Laravel', 'MySQL'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        // {
        //   title: 'HCWM System',
        //   description: 'Sistema de gerenciamento dos resíduos hospitalares do HUM (Hospital Universitário de Maringá).',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://residuoshum.com.br/'
        // },
        // {
        //   title: 'Dreno Torax',
        //   description: 'Questionários online sobre cuidados de enfermagem com pacientes em uso de drenagem pleural.',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://drenotorax.com.br/'
        // },
        {
          title: 'Orbi Backoffice',
          description: 'Sistema de gerenciamento e armazenamento de contratos e propostas da Orbi Corretora, compartilhado com seus clientes.',
          skills: ['Laravel', 'MySQL', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Site institucional da Orbi Corretora de Mercadorias (em fase de atualização para uma versão mais moderna).',
          skills: ['PHP', 'MySQL'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'Sistema para controle financeiro pessoal ou de um grupo de usuários. Entre em contato comigo para criar um usuário e testar gratuitamente.',
          skills: ['PHP', 'MySQL', 'Vue.js'],
          link: 'https://financial.jbcamps.dev/'
        },
        {
          title: 'Destra Sistema',
          description: 'Sistema para despachantes do PR.',
          skills: ['Laravel', 'MySQL'],
          link: 'https://destrasistema.com.br/'
        },
        // {
        //   title: 'Taberna Medieval',
        //   description: 'Site criado para compartilhar histórias fantásticas e resenhas de filmes de terror.',
        //   skills: ['PHP', 'WordPress'],
        //   link: 'https://tabernamedieval.com/'
        // }
      ],
      testimonialNote: '',
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Especialista em Sistemas de Informação pela UEM.',
            'Especialista em Estatística Aplicada pela UEM.',
            'Mestre em Ciência da Computação pela UFRGS.',
            'Doutor em Computação Aplicada pela PUC-PR.',
            'Perito em TI do Tribunal de Justiça do PR.',
            'Chefe da Divisão de Desenvolvimento-NPD-UEM.'
          ],
          description: 'José Bruno é um profissional competente, eficiente, flexível e honesto. Sabe trabalhar em equipe e tem conhecimento de TI para desenvolver aplicativos e sistemas de forma eficiente. Já fiz vários projetos com ele e o resultado foi o elogio dos usuários por todo o trabalho. Recomendo o seu trabalho com muito gosto!',
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgência e Emergência pela UEM.'],
          description: 'Recebi uma indicação do trabalho dele e hoje eu mesma indico. Ele desenvolveu o meu sistema com agilidade, de acordo com necessidades muito específicas, por se tratar de um sistema na área da saúde, até então inédito. Além disso, é muito gentil, prestativo e educado. Só tenho a agradecer.',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgência e Emergência pela UEM.'],
          description: 'Gostaria de exaltar a competência e o comprometimento do José Bruno. Um profissional excelente, que desenvolveu um sistema para o meu trabalho de mestrado. <br> O comprometimento dele foi muito importante para que eu conseguisse terminar o meu trabalho.',
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Gerente de Projetos'],
          description: 'O Bruno é uma pessoa espetacular e um profissional ímpar. Seu comprometimento com as tarefas, os resultados, os prazos e a qualidade é diário e nítido. Está sempre em busca da melhor solução e da melhor forma de implementá-la. Não somente em relação às suas atividades, ele auxilia todas as partes interessadas do projeto, seja em dúvidas, melhorias, processos ou definições. Tê-lo em um projeto é sinônimo de bons resultados entregues sempre.',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgência e Emergência pela UEM.'],
          description: 'Só agradecimentos ao competente profissional José Bruno, por sua dedicação incondicional e excelência no desenvolvimento do software para o meu projeto de mestrado em Urgência e Emergência da UEM. Sempre prestativo. Super indico. <br> Gratidão.',
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Analista de Sistemas'],
          description: 'Profissional de uma qualidade ímpar, super responsável, com conhecimento amplo nas áreas em que atua. Nos 2 anos em que trabalhei com ele, sempre foi uma inspiração para mim. Super respeitoso e competente, é alguém que dá gosto de ter na equipe, que puxa todos junto com ele, ensina de bom grado e ajuda quem precisa. Não há palavras para descrever o quão grande profissional o Bruno é.',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgência e Emergência pela UEM.'],
          description: 'Gostaria de dar um feedback sobre o sistema que o José Bruno me ajudou a criar para o meu mestrado profissional. <br> Foi um sucesso! Após as reuniões, o sistema foi desenvolvido exatamente como eu precisava. Os professores da banca e a equipe do comitê ficaram surpresos com as funcionalidades do sistema. <br> Agradeço todo o apoio no desenvolvimento do trabalho.',
          image: 'fabiane.png'
        }
      ],
      footer: 'Feito com carinho por José Bruno'
    },
    es: {
      slug: 'Mi pequeño rincón en el mundo',
      meta: {
        title: 'Portafolio - JBcamps',
        description: 'Portafolio de un desarrollador apasionado por la tecnología, por resolver problemas y por cambiar vidas a través de la innovación. Vivo en Maringá/PR, Brasil, pero trabajo de forma remota para Brasil y el mundo.'
      },
      github: 'Dale una estrella en GitHub',
      personal: {
        position: 'Desarrollador Fullstack Sénior',
        phrase: 'Sigue adelante.'
      },
      hero: {
        greeting: 'Hola, soy',
        intro: 'Creo sistemas web que resuelven problemas reales y facilitan el trabajo de las personas.'
      },
      contact: {
        cta: 'Hablemos',
        email: 'Correo electrónico',
        whatsappMessage: '¡Hola! Me gustaría hablar contigo sobre...'
      },
      sections: {
        skills: 'Habilidades',
        experience: 'Experiencia',
        education: 'Formación',
        systems: 'Sistemas Web',
        websites: 'Sitios Web',
        personal: 'Proyectos Personales',
        testimonials: 'Testimonios'
      },
      more: 'Ver más',
      visit: 'Visitar proyecto',
      experience: [
        {
          title: 'Stone Co.',
          position: 'Desarrollador Web Sénior',
          period: '2024 - Actualidad'
        },
        {
          title: 'Ligue Telecom',
          position: 'Desarrollador Web Sénior',
          period: '2022 - 2024'
        },
        {
          title: 'Trade Technology',
          position: 'Desarrollador Web Fullstack',
          period: '2021 - 2022'
        }
      ],
      education: [
        {
          title: 'Sistemas para Internet',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Licenciatura en Portugués e Inglés',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        // {
        //   title: 'Monintox',
        //   description: 'Sistema de gestión de la clínica de desintoxicación de Sarandí/PR (Brasil). Emite notificaciones siguiendo el estándar del Gobierno brasileño e incluye un chat integrado para que los enfermeros se comuniquen entre sí en tiempo real.',
        //   skills: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Node.js'],
        //   link: 'https://monintox.online'
        // },
        {
          title: 'RPonto+',
          description: 'Sistema de gestión de control horario para los residentes del HUM (Hospital Universitario de Maringá).',
          skills: ['Laravel', 'MySQL'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        // {
        //   title: 'HCWM System',
        //   description: 'Sistema de gestión de residuos hospitalarios del HUM (Hospital Universitario de Maringá).',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://residuoshum.com.br/'
        // },
        // {
        //   title: 'Dreno Torax',
        //   description: 'Cuestionarios en línea sobre cuidados de enfermería a pacientes que utilizan drenaje pleural.',
        //   skills: ['Laravel', 'MySQL'],
        //   link: 'https://drenotorax.com.br/'
        // },
        {
          title: 'Orbi Backoffice',
          description: 'Sistema de gestión y almacenamiento de los contratos y propuestas de Orbi Corretora, compartido con sus clientes.',
          skills: ['Laravel', 'MySQL', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Sitio web institucional de Orbi Corretora de Mercadorias (en proceso de actualización a una versión más moderna).',
          skills: ['PHP', 'MySQL'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'Sistema de control financiero personal o para un grupo de usuarios. Contáctame para crear un usuario y probarlo gratis.',
          skills: ['PHP', 'MySQL', 'Vue.js'],
          link: 'https://financial.jbcamps.dev/'
        },
        {
          title: 'Destra Sistema',
          description: 'Sistema para gestores de trámites vehiculares (despachantes) de Paraná, Brasil.',
          skills: ['Laravel', 'MySQL'],
          link: 'https://destrasistema.com.br/'
        },
        // {
        //   title: 'Taberna Medieval',
        //   description: 'Sitio creado para compartir historias fantásticas y reseñas de películas de terror.',
        //   skills: ['PHP', 'WordPress'],
        //   link: 'https://tabernamedieval.com/'
        // }
      ],
      testimonialNote: 'Traducido del portugués.',
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Especialista en Sistemas de Información, UEM.',
            'Especialista en Estadística Aplicada, UEM.',
            'Máster en Ciencias de la Computación, UFRGS.',
            'Doctor en Computación Aplicada, PUC-PR.',
            'Perito en TI del Tribunal de Justicia de Paraná.',
            'Jefe de la División de Desarrollo, NPD-UEM.'
          ],
          description: 'José Bruno es un profesional competente, eficiente, flexible y honesto. Sabe trabajar en equipo y tiene los conocimientos de TI necesarios para desarrollar aplicaciones y sistemas de manera eficiente. He realizado varios proyectos con él y los usuarios elogiaron todo el trabajo. ¡Recomiendo mucho su trabajo!',
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias, UEM.'],
          description: 'Recibí una recomendación de su trabajo y hoy lo recomiendo yo. Desarrolló mi sistema rápidamente y atendió necesidades muy específicas, ya que era un sistema de salud inédito hasta entonces. Además, es muy amable, servicial y educado. Solo me queda agradecer.',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias, UEM.'],
          description: 'Me gustaría elogiar la competencia y el compromiso de José Bruno. Es un excelente profesional que desarrolló un sistema para mi trabajo de maestría. <br> Su compromiso fue fundamental para que pudiera terminar mi trabajo.',
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Gerente de proyectos'],
          description: 'Bruno es una persona espectacular y un profesional único. Su compromiso con las tareas, los resultados, los plazos y la calidad es evidente cada día. Siempre busca la mejor solución y la mejor manera de implementarla. No solo se ocupa de sus propias actividades: ayuda a todos los interesados del proyecto con dudas, mejoras, procesos y definiciones. Tenerlo en un proyecto es sinónimo de buenos resultados en todo momento.',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias, UEM.'],
          description: 'Quisiera agradecer al competente profesional José Bruno por su dedicación incondicional y su excelencia en el desarrollo del software para mi proyecto de maestría en Urgencias y Emergencias en la UEM. Siempre servicial. Lo recomiendo muchísimo. <br> Gratitud.',
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Analista de sistemas'],
          description: 'Un profesional de calidad única, muy responsable y con amplio conocimiento en las áreas en las que trabaja. En los 2 años que trabajé con él siempre fue una inspiración para mí. Muy respetuoso y competente, es alguien con quien da gusto trabajar en equipo, que arrastra a todos con él y que enseña y ayuda de buena gana a quien lo necesita. No hay palabras para describir lo gran profesional que es Bruno.',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias, UEM.'],
          description: 'Me gustaría dar mi opinión sobre el sistema que José Bruno me ayudó a crear para mi maestría profesional. <br> ¡Fue un éxito! Después de las reuniones, el sistema quedó desarrollado exactamente como lo necesitaba. Los profesores del tribunal y el equipo del comité quedaron sorprendidos por las funcionalidades del sistema. <br> Agradezco todo el apoyo en el desarrollo del trabajo.',
          image: 'fabiane.png'
        }
      ],
      footer: 'Hecho con cariño por José Bruno'
    }
  }
}))
