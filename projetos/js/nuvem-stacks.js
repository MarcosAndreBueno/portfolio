anychart.onDocumentReady(function () {
    var prioridade = {
        um: 600,
        dois: 350,
        tres: 240,
        quatro: 160,
        cinco: 130,
        seis: 90
    };
    var categorias = {
        backend: "BACKEND",
        frontend: "FRONTEND",
        dados: "DADOS",
        devops: "DEVOPS",
        arquitetura: "ARQUITETURA"
    };

    var data = [
        { x: "Java", value: prioridade.um, category: categorias.backend },

        { x: "Spring Boot", value: prioridade.dois, category: categorias.backend },
        { x: "JUnit", value: prioridade.dois, category: categorias.backend },
        { x: "Mockito", value: prioridade.dois, category: categorias.backend },
        { x: "Microsserviços", value: prioridade.dois, category: categorias.backend },
        { x: "Kafka", value: prioridade.dois, category: categorias.backend },
        { x: "Keycloak", value: prioridade.dois, category: categorias.backend },

        { x: "Angular", value: prioridade.tres, category: categorias.frontend },
        { x: "SQL", value: prioridade.tres, category: categorias.dados },
        { x: "NoSQL", value: prioridade.tres, category: categorias.dados },
        { x: "JavaScript", value: prioridade.tres, category: categorias.frontend },

        { x: "HTML", value: prioridade.quatro, category: categorias.frontend },
        { x: "CSS", value: prioridade.quatro, category: categorias.frontend },
        { x: "Bootstrap", value: prioridade.quatro, category: categorias.frontend },
        { x: "TypeScript", value: prioridade.quatro, category: categorias.frontend },

        { x: "Loki", value: prioridade.cinco, category: categorias.backend },
        { x: "Prometheus", value: prioridade.cinco, category: categorias.backend },
        { x: "Grafana", value: prioridade.cinco, category: categorias.backend },
        { x: "Resilience4j", value: prioridade.cinco, category: categorias.backend },
        { x: "Swagger", value: prioridade.cinco, category: categorias.backend },
        { x: "Gateway", value: prioridade.cinco, category: categorias.backend },
        { x: "MySQL", value: prioridade.cinco, category: categorias.dados },
        { x: "PostgreSQL", value: prioridade.cinco, category: categorias.dados },
        { x: "MongoDB", value: prioridade.cinco, category: categorias.dados },
        { x: "Oracle", value: prioridade.cinco, category: categorias.dados },

        { x: "CI/CD", value: prioridade.seis, category: categorias.devops },
        { x: "EC2", value: prioridade.seis, category: categorias.devops },
        { x: "Restful", value: prioridade.seis, category: categorias.arquitetura },
        { x: "EDA", value: prioridade.seis, category: categorias.arquitetura },
        { x: "MVC", value: prioridade.seis, category: categorias.arquitetura }
    ];

    // criar tag (palavras) no cloud chart
    var graficoNuvem = anychart.tagCloud(data);

    //cores
    graficoNuvem.normal().fill(function () {
        switch (this.category) {
            case "BACKEND": return "#ff6b6b";   // prioridade 1
            case "FRONTEND": return "#4dabf7";   // prioridade 2
            case "DADOS": return "#51cf66";   // prioridade 3
            case "DEVOPS": return "#ffd43b";   // prioridade 4
            case "ARQUITETURA": return "#845ef7";   // prioridade 5
            default: return "#ffffff";
        }
    });
    graficoNuvem.colorRange(true);

    var corSecundaria = getComputedStyle(document.documentElement)
        .getPropertyValue('--cor-fundo-secundaria')
        .trim();

    graficoNuvem.background().fill(corSecundaria);
    graficoNuvem.title().fontColor("#27091d");

    // hover
    graficoNuvem.interactivity().hoverMode("none");

    // angulação
    graficoNuvem.angles([0, -35, 30, 70, 15]); // angulação

    // draw grafico nuvem
    graficoNuvem.container("nuvem-stacks");
    graficoNuvem.draw();
});
