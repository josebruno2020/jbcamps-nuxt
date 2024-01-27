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
        // {
        //   title: 'HCWM System',
        //   description: 'Hospital waste management system at the HUM (University Hospital of Maringá).',
        //   skills: ['Laravel', 'Mysql'],
        //   link: 'https://residuoshum.com.br/'
        // },
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
        },
        {
          title: 'Taberna Medieval',
          description: 'Website created to share fantastic stories and horror movies reviews.',
          skills: ['PHP', 'Wordpress'],
          link: 'https://tabernamedieval.com/'
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
          description: "José Bruno is a competent, efficient, flexible and honest professional. He knows how to work in a team and has IT knowledge to develop applications and systems efficiently. I've done several projects with it and the result was praise from users for all the work. I highly recommend your work! (Original in Portuguese).",
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: 'I received a recommendation for his work, and today I recommend his work. He developed my system quickly, according to very specific needs, as it was a previously unheard-of health system. In addition to being very kind, helpful and polite. Just to thank. (Original in Portuguese).',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: "I would like to praise José Bruno's competence and commitment. An excellent professional who developed a system for my master's work. <br> His commitment was very important for me to be able to finish my work. (Original in Portuguese).",
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Project Manager'],
          description: 'Bruno is a spectacular person and a unique professional. His commitment to tasks, results, deadlines and quality is daily and clear. He is always looking for the best solution and the best way to do it. Not only in relation to its activities, it helps all project stakeholders, whether in doubts, improvements, processes or definitions. Having it in a project is synonymous with good results delivered every time. (Original in Portuguese).',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: "I would like to thank the competent professional José Bruno, for his unconditional dedication and excellence in developing the software for my master's project in Urgency and Emergency at UEM. Always helpful. I highly recommend it. <br>Gratitude. (Original in Portuguese).",
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Systems Analyst'],
          description: 'Professional of unique quality, responsible, has extensive knowledge in the areas he works in, in the 2 years I worked with him he has always been an inspiration to me, super respectful and competent, he is someone who is a pleasure to have on the team, who pulls everyone together With him, he willingly teaches and helps anyone in need, there are no words to describe how great a professional Bruno is. (Original in Portuguese).',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Master in Management, Innovation and Technology in Urgent and Emergency by UEM.'],
          description: "I would like to give feedback on the system that José Bruno helped me create for my professional master's degree. <br> It was a success! After the meetings, the system was developed exactly as I needed it. The panel's teachers and committee team were surprised by the system's features. <br> I appreciate all the support for the development of the work. (Original in Portuguese).",
          image: 'fabiane.png'
        },
      ],
      footer: 'Made with ❤️'
    },
    pt: {
      slug: 'Meu pequeno espaço no mundo 🌍',
      github: 'Dê uma estrela no Github ⭐',
      personal: {
        position: 'Desenvolvedor Fullstack Sênior',
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
        // {
        //   title: 'HCWM System',
        //   description: 'Sistema de gerenciamento dos Resíduos hospitalares do HUM (Hospital Universitário de Maringá).',
        //   skills: ['Laravel', 'Mysql'],
        //   link: 'https://residuoshum.com.br/'
        // },
        {
          title: 'Dreno Torax',
          description: 'Questionários onlie sobre Cuidados de enfermagem com pacientes em uso de drenagem pleural.',
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
        },
        {
          title: 'Taberna Medieval',
          description: 'Site criado para compartilhar histórias fantásticas e resenhas de filmes de terror.',
          skills: ['PHP', 'Wordpress'],
          link: 'https://tabernamedieval.com/'
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
          description: 'José Bruno é um profissional competente, eficiente, flexível  e honesto. Sabe trabalhar em equipe e tem conhecimento de TI para desenvolver aplicativos e sistemas de forma eficiente. Já fiz vários projetos com ele e o resultado foi de elogio por parte dos usuários para todos os trabalho. Recomendo o seu trabalho com muito gosto!',
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Recebi uma indicação do trabalho dele, e hoje eu que indico o seu trabalho. Ele desenvolveu o meu sistema com agilidade, de acordo com as necessidades que eram muito específicas, por se tratar de um sistema na área da saúde, até então inédito. Além de ser muito gentil, prestativo e educado. Só agradecer.',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Gostaria de exaltar a competência e comprometimento do José Bruno. Um profissional excelente que desenvolveu um sistema para o meu trabalho de mestrado. <br> O seu comprometimento foi muito importante para que conseguisse terminar o meu trabalho.',
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Gerente de Projetos'],
          description: 'O Bruno é uma pessoa espetacular e um profissional ímpar. Seu comprometimento com as tarefas, com os resultados, com os prazos e com a qualidade é algo diário e nítido. Está sempre em busca da melhor solução e da melhor forma de fazê-la. Não somente em relação às suas atividades, ele auxilia todas as partes interessadas do projeto, seja em dúvidas, melhorias, processos ou definições. Tê-lo em um projeto, é sinônimo de bons resultados entregues sempre.',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Só agradecimentos ao competente  profissional José Bruno,  por sua dedicação incondicional e excelência no desenvolvimento do software para o meu projeto de mestrado em Urgência e Emergência da UEM. Sempre prestativo. Super indico. <br>Gratidão. ',
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Analista de Sistemas'],
          description: 'Profissional de uma qualidade ímpar, super responsável, tem um conhecimento amplo nas áreas que atua, dos 2 anos que trabalhei com ele sempre me foi uma inspiração, super respeitoso e competente, é alguém que dá gosto de se ter na equipe, que puxa todos junto com ele, ensina de bom grado e ajuda quem precisa, sem palavras para descrever o quão grande profissional o Bruno é.',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Mestra em Gestão, Inovação e Tecnologia em Urgente e Emergência pela UEM.'],
          description: 'Gostaria de dar um feedback sobre o sistema que o José Bruno me ajudou a criar para o mestrado profissional. <br> Foi um sucesso! Após as reuniões,  o sistema foi desenvolvido exatamente como eu precisava. Os professores da banca e a equipe do comitê ficaram surpresos com as funcionalidades do sistema. <br> Agradeço todo apoio para o desenvolvimento do trabalho.',
          image: 'fabiane.png'
        },
        
      ],
      footer: 'Feito com ❤️'
    },
    es: {
      slug: 'Meu pequeno espaço no mundo 🌍',
      github: 'Dale una estrella en Github ⭐',
      personal: {
        position: 'Desarrollador Sénior Fullstack',
        phrase: 'Siga adelante 🚀'
      },
      sections: {
        skills: 'Habilidades',
        experience: 'Experiencia',
        education: 'Capacitación',
        systems: 'Proyectos en sistemas Web',
        websites: 'Proyectos en sitios web',
        personal: 'Proyectos personales',
        testimonials: 'Testimonios'
      },
      today: 'Hoy',
      more: 'Más',
      experience: [
        {
          title: 'Ligue Telecom',
          position: 'Desarrollador Web Sénior',
          period: '2022 - Hoy'
        },
        {
          title: 'Trade Technology',
          position: 'Desarrollador Web Fullstack',
          period: '2021 - 2022'
        },
        {
          title: 'Bitzen Tecnologia',
          position: 'Desarrollador Web Fullstack',
          period: '2021'
        }
      ],
      education: [
        {
          title: 'Sistemas para Web',
          subtitle: 'Unicesumar (2022)'
        },
        {
          title: 'Graduación Portugués / Inglés',
          subtitle: 'Unicesumar (2022)'
        }
      ],
      systems: [
        {
          title: 'Monintox',
          description: 'Sistema de gestión para clínica de desintoxicación Sarandí/PR, emitiendo notificaciones siguiendo estándar del Gobierno Brasileño, con chat integrado para que los enfermeros se comuniquen entre sí en tiempo real.',
          skills: ['Laravel', 'PHP', 'VueJs', 'Mysql', 'NodeJs'],
          link: 'https://monintox.online'
        },
        {
          title: 'RPonto+',
          description: 'Sistema de gestión de puntos para residentes del HUM (Hospital Universitario de Maringá).',
          skills: ['Laravel', 'Mysql'],
          link: 'https://redcap.uem.br/hum-cpr'
        },
        // {
        //   title: 'HCWM System',
        //   description: 'Sistema de gestión de residuos hospitalarios del HUM (Hospital Universitario de Maringá).',
        //   skills: ['Laravel', 'Mysql'],
        //   link: 'https://residuoshum.com.br/'
        // },
        {
          title: 'Dreno Torax',
          description: 'Cuestionarios online sobre cuidados de enfermería a pacientes que utilizan drenaje pleural.',
          skills: ['Laravel', 'Mysql'],
          link: 'https://drenotorax.com.br/'
        },
        {
          title: 'Orbi Backoffice',
          description: 'Sistema de gestión y almacenamiento de contratos y propuestas para Orbi Corretora junto con sus clientes.',
          skills: ['Laravel', 'Mysql', 'Amazon S3'],
          link: 'https://backoffice.orbibrasil.com.br'
        }
      ],
      websites: [
        {
          title: 'Orbi Brasil',
          description: 'Sitio web institucional de Orbi Corretora de Mercadorias. (En fase de actualización a una versión más moderna 😊).',
          skills: ['PHP', 'Mysql'],
          link: 'https://orbibrasil.com.br/'
        }
      ],
      projectPersonal: [
        {
          title: 'JB Financial',
          description: 'Sistema de control financiero personal o para un grupo de usuarios. Contáctame para crear un usuario y probarlo, gratis.',
          skills: ['PHP', 'Mysql', 'VueJs'],
          link: 'https://financial.jbcamps.dev/'
        },
        {
          title: 'Taberna Medieval',
          description: 'Sitio creado para compartir historias fantásticas y reseñas de películas de terror.',
          skills: ['PHP', 'Wordpress'],
          link: 'https://tabernamedieval.com/'
        }
      ],
      testimonials: [
        {
          name: 'Prof. Elias Carvalho',
          position: [
            'Especialista en Sistemas de Información por la UEM.',
            'Especialista en Estadística Aplicada por la UEM.',
            'Magíster en Informática por la UFRGS.',
            'Doctorado en Computación Aplicada por la PUC-PR.',
            'Experto en TI para el Tribunal de Justicia de PR.',
            'Jefe de la División de Desarrollo-NPD-UEM.'
          ],
          description: 'José Bruno es un profesional competente, eficiente, flexible y honesto. Sabe trabajar en equipo y tiene conocimientos de TI para desarrollar aplicaciones y sistemas de manera eficiente. He realizado varios proyectos con él y el resultado fueron elogios de los usuarios por todo el trabajo. ¡Recomiendo mucho su trabajo! (Original en Portugués).',
          image: 'elias.jpg',
          link: 'https://www.linkedin.com/in/elias-césar-araújo-de-carvalho-93697022/'
        },
        {
          name: 'Gisele Ferreira',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias por la UEM.'],
          description: 'Recibí una recomendación por su trabajo y hoy recomiendo su trabajo. Desarrolló mi sistema rápidamente, según necesidades muy específicas, ya que era un sistema de salud nunca antes visto. Además de ser muy amable, servicial y educado. Sólo para agradecer. (Original en Portugués).',
          image: 'gisele.png',
          link: 'https://www.instagram.com/giferreir/'
        },
        {
          name: 'Paula Abrante',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias por la UEM.'],
          description: 'Me gustaría elogiar la competencia y el compromiso de José Bruno. Un excelente profesional que desarrolló un sistema para mi trabajo de maestría. <br> Su compromiso fue muy importante para mí para poder terminar mi trabajo. (Original en Portugués).',
          image: 'paula.png',
          link: 'https://www.instagram.com/paulinhaabrante/'
        },
        {
          name: 'Cassiano Borim',
          position: ['Gerente de proyectos'],
          description: 'Bruno es una persona espectacular y un profesional único. Su compromiso con las tareas, resultados, plazos y calidad es diario y claro. Siempre está buscando la mejor solución y la mejor manera de hacerlo. No sólo en relación con sus actividades, ayuda a todos los actores del proyecto, ya sea en dudas, mejoras, procesos o definiciones. Tenerlo en un proyecto es sinónimo de buenos resultados en todo momento. (Original en Portugués).',
          image: 'cassiano.jpg',
          link: 'https://www.linkedin.com/in/cassianoborim/'
        },
        {
          name: 'Lucia Zuliani',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias por la UEM.'],
          description: 'Quisiera agradecer al competente profesional José Bruno, por su incondicional dedicación y excelencia en el desarrollo del software para mi proyecto de maestría en Urgencia y Emergencia en la UEM. Siempre útil. Lo recomiendo altamente. <br>Gratitud. (Original en Portugués).',
          image: 'lucia.jpg'
        },
        {
          name: 'Felipe Baptiston',
          position: ['Analista de sistemas'],
          description: 'Profesional de calidad única, súper responsable, tiene amplio conocimiento en las áreas que trabaja, en los 2 años que trabajé con él siempre ha sido una inspiración para mí, súper respetuoso y competente, es alguien que es un placer tener contigo. el equipo, que une a todos con él, enseña y ayuda con gusto a quien lo necesita, no hay palabras para describir lo gran profesional que es Bruno. (Original en Portugués).',
          image: 'felipe.png',
          link: 'https://www.linkedin.com/in/felipe-baptiston-a38042259/'
        },
        {
          name: 'Fabiane Kizima',
          position: ['Máster en Gestión, Innovación y Tecnología en Urgencias y Emergencias por la UEM.'],
          description: 'Me gustaría dar mi opinión sobre el sistema que José Bruno me ayudó a crear para mi maestría profesional. <br> ¡Fue un éxito! Después de las reuniones, el sistema quedó desarrollado exactamente como lo necesitaba. Los profesores del panel y el equipo del comité quedaron sorprendidos por las características del sistema. <br> Agradezco todo el apoyo para el desarrollo del trabajo. (Original en Portugués).',
          image: 'fabiane.png'
        },
      ],
      footer: 'Hecho con ❤️'
    },
  }
}))