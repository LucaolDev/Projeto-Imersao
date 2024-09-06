let dados = [
    {
        titulo: "Java",
        descricao: "Linguagem de programação orientada a objetos de propósito geral, conhecida por sua portabilidade e robustez, amplamente utilizada no desenvolvimento de aplicações empresariais e Android.",
        anoCriacao: 1995,
        paradigmas: ["orientada a objetos"],
        usoPrincipal: "Desenvolvimento de aplicações empresariais, desenvolvimento Android, desenvolvimento de jogos, big data",
        link: "https://pt.wikipedia.org/wiki/Java_(linguagem_de_programa%C3%A7%C3%A3o)",
        tags: "backend mobile"
    },
    {
        titulo: "Python",
        descricao: "Python é uma linguagem de programação de alto nível, interpretada, de propósito geral e de tipagem dinâmica, famosa por sua sintaxe clara e legível.",
        anoCriacao: 1991,
        paradigmas: ["orientada a objetos", "funcional", "imperativa"],
        usoPrincipal: "Data Science, Machine Learning, Desenvolvimento web, Automação",
        link: "https://www.python.org/",
        tags: "backend machine-learning data-science"
    },
    {
        titulo: "HTML",
        descricao: "Linguagem de marcação utilizada para estruturar e apresentar conteúdo na Web.",
        anoCriacao: 1993,
        paradigmas: ["declarativa"],
        usoPrincipal: "Estrutura de páginas web",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
        tags: "web frontend"
    },
    {
        titulo: "CSS",
        descricao: "Linguagem de estilo utilizada para descrever a apresentação de um documento HTML.",
        anoCriacao: 1996,
        paradigmas: ["declarativa"],
        usoPrincipal: "Estilização de páginas web",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
        tags: "web frontend"
    },
    {
        titulo: "JavaScript",
        descricao: "Linguagem de programação interpretada, cliente-lado, utilizada para criar interatividade em páginas web.",
        anoCriacao: 1995,
        paradigmas: ["orientada a objetos", "funcional", "imperativa"],
        usoPrincipal: "Desenvolvimento frontend, desenvolvimento backend (Node.js), desenvolvimento de jogos, aplicativos móveis",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        tags: "backend frontend mobile"
    },
    {
        titulo: "SQL",
        descricao: "Linguagem de consulta estruturada para gerenciar bancos de dados relacionais.",
        anoCriacao: "1970",
        paradigmas: ["declarativa"],
        usoPrincipal: "Gerenciamento de bancos de dados relacionais",
        link: "https://www.w3schools.com/sql/",
        tags: "backend database"
    },
    {
        titulo: "C",
        descricao: "Linguagem de programação procedural de baixo nível, conhecida por sua eficiência e portabilidade.",
        anoCriacao: "1972",
        paradigmas: ["imperativa", "procedural"],
        usoPrincipal: "Desenvolvimento de sistemas operacionais, drivers de dispositivos, aplicações de tempo real, embedded systems",
        link: "https://en.wikipedia.org/wiki/C_(programming_language)",
        tags: "sistemas baixo-nível procedural c++"
    },
    {
        titulo: "C++",
        descricao: "Linguagem de programação multiparadigma, que adiciona recursos de programação orientada a objetos ao C.",
        anoCriacao: "1983",
        paradigmas: ["imperativa", "procedural", "orientada a objetos"],
        usoPrincipal: "Desenvolvimento de jogos, aplicativos de alto desempenho, desenvolvimento de sistemas, bibliotecas padrão",
        link: "https://en.wikipedia.org/wiki/C++",
        tags: "backend c orientada a objetos alto-desempenho sistemas"
    },
    {
        titulo: "C#",
        descricao: "Linguagem de programação orientada a objetos, desenvolvida pela Microsoft para a plataforma .NET.",
        anoCriacao: "2000",
        paradigmas: ["orientada a objetos"],
        usoPrincipal: "Desenvolvimento de aplicações Windows, desenvolvimento web (ASP.NET), desenvolvimento de jogos (Unity), desenvolvimento mobile",
        link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
        tags: "microsoft .net orientada a objetos windows jogos"
    },
    {
        titulo: "PHP",
        descricao: "Linguagem de script interpretada, especialmente adequada para o desenvolvimento web, conhecida por sua sintaxe semelhante ao C.",
        anoCriacao: "1994",
        paradigmas: ["imperativa", "orientada a objetos"],
        usoPrincipal: "Desenvolvimento web (backend), CMS (WordPress, Drupal), frameworks (Laravel, Symfony)",
        link: "https://www.php.net/",
        tags: "web backend servidor"
    },
    {
        titulo: "Go",
        descricao: "Linguagem de programação compilada, de tipagem estática e concorrência nativa, desenvolvida pelo Google, conhecida por sua eficiência e simplicidade.",
        anoCriacao: 2009,
        paradigmas: ["imperativa", "concorrente"],
        usoPrincipal: "Desenvolvimento de serviços web, infraestrutura, ferramentas de DevOps, aplicações de rede",
        link: "https://go.dev/",
        tags: "backend concorrente eficiente sistemas"
    },
    {
        titulo: "Ruby",
        descricao: "Linguagem de programação interpretada, de alto nível e de propósito geral, famosa por sua sintaxe elegante e expressiva, e por ser a base do framework Ruby on Rails.",
        anoCriacao: 1995,
        paradigmas: ["orientada a objetos", "funcional"],
        usoPrincipal: "Desenvolvimento web (Ruby on Rails), DevOps, automação",
        link: "https://www.ruby-lang.org/",
        tags: "backend web ruby-on-rails"
    },
    {
        titulo: "Rust",
        descricao: "Linguagem de programação compilada, de tipagem estática, focada em segurança de memória e concorrência, conhecida por sua performance e confiabilidade.",
        anoCriacao: 2010,
        paradigmas: ["imperativa", "funcional", "orientada a objetos"],
        usoPrincipal: "Desenvolvimento de sistemas, aplicações de rede, desenvolvimento de jogos, sistemas embarcados",
        link: "https://www.rust-lang.org/",
        tags: "sistemas seguro concorrente"
    },
    {
        titulo: "Kotlin",
        descricao: "Linguagem de programação moderna, de tipagem estática, que roda na JVM e é interoperável com Java, conhecida por sua concisão e segurança.",
        anoCriacao: 2011,
        paradigmas: ["orientada a objetos", "funcional"],
        usoPrincipal: "Desenvolvimento Android, desenvolvimento backend, desenvolvimento web",
        link: "https://kotlinlang.org/",
        tags: "android backend java jvm"
    },
    {
        titulo: "TypeScript",
        descricao: "Superconjunto tipado do JavaScript, que adiciona tipagem estática e outros recursos para melhorar a escalabilidade e a manutenção de grandes aplicações. É amplamente utilizado no desenvolvimento frontend e backend.",
        anoCriacao: 2012,
        paradigmas: ["orientada a objetos", "funcional"],
        usoPrincipal: "Desenvolvimento frontend (React, Angular), desenvolvimento backend (Node.js)",
        link: "https://www.typescriptlang.org/",
        tags: "javascript typescript frontend backend"
    },
    {
        titulo: "Lua",
        descricao: "Linguagem de programação leve e extensível, frequentemente utilizada em jogos e como linguagem de script para outras aplicações. Conhecida por sua sintaxe simples e desempenho.",
        anoCriacao: 1993,
        paradigmas: ["imperativa", "procedural", "orientada a objetos"],
        usoPrincipal: "Desenvolvimento de jogos, scripting em aplicações (como em editores, ferramentas CAD), desenvolvimento de sistemas embarcados",
        link: "https://www.lua.org/",
        tags: "scripting jogos leve embed"
    },
    {
        titulo: "Swift",
        descricao: "Linguagem de programação moderna e segura desenvolvida pela Apple para iOS, macOS, watchOS e tvOS. Conhecida por sua sintaxe concisa e segurança de memória.",
        anoCriacao: 2014,
        paradigmas: ["orientada a objetos", "funcional"],
        usoPrincipal: "Desenvolvimento de aplicativos para iOS, macOS, watchOS e tvOS, desenvolvimento de servidores",
        link: "https://swift.org/",
        tags: "ios macos apple swiftui"
    },
    {
        titulo: "React",
        descricao: "Biblioteca JavaScript para construção de interfaces de usuário, popular por sua arquitetura componente-baseada e desempenho.",
        anoCriacao: 2013,
        paradigmas: ["declarativa", "funcional"],
        usoPrincipal: "Desenvolvimento frontend",
        link: "https://reactjs.org/",
        tags: "javascript react frontend"
    },
    {
        titulo: "Flutter",
        descricao: "Linguagem de programação e framework UI para construção de aplicativos nativos para diversas plataformas a partir de uma única base de código.",
        anoCriacao: 2011,
        paradigmas: ["orientada a objetos"],
        usoPrincipal: "Desenvolvimento mobile (Flutter)",
        link: "https://dart.dev/",
        tags: "dart flutter mobile"
    },
    {
        titulo: "Scala",
        descricao: "Linguagem de programação que combina programação funcional e orientada a objetos, rodando na JVM. Conhecida por sua concisão e expressividade.",
        anoCriacao: 2003,
        paradigmas: ["funcional", "orientada a objetos"],
        usoPrincipal: "Desenvolvimento de aplicações escaláveis, big data, machine learning",
        link: "https://scala-lang.org/",
        tags: "scala funcional orientada-a-objetos big-data spark"
    },
    {
        titulo: "R",
        descricao: "Linguagem de programação e ambiente para computação estatística e gráficos. Amplamente utilizada em análise de dados, machine learning e bioinformática.",
        anoCriacao: 1993,
        paradigmas: ["imperativa", "funcional"],
        usoPrincipal: "Análise de dados, estatística, visualização de dados, machine learning",
        link: "https://www.r-project.org/",
        tags: "estatística dados ciência-de-dados machine-learning"
    },
    {
        titulo: "Node.js",
        descricao: "Ambiente de execução JavaScript que permite executar código JavaScript fora do navegador, usado para criar aplicações de servidor.",
        anoCriacao: 2009,
        paradigmas: ["orientada a objetos", "funcional", "imperativa"],
        usoPrincipal: "Desenvolvimento backend, APIs, aplicações de tempo real",
        link: "https://nodejs.org/",
        tags: "backend javascript servidor"
    },

];
