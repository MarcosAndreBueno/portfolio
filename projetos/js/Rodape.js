class Rodape extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        //template
        this.shadowRoot.innerHTML = this.build();

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style);

        //icones
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
        this.shadowRoot.appendChild(link);
    }

    initPaginasPortfolio() {
        var paginasPortfolio = [
            ["./automatic-melody-harmonizer.html", "Automatic Melody Harmonizer"],
            ["./dsmeta.html", "DSMeta"],
            ["./ecommerce.html", "Ecommerce"],
            ["./financial.html", "Financial"],
            ["./java-game.html", "Java Game"],
            ["./springboot3.html", "Spring Boot 3"],
        ];
        const paginaAtiva = this.getAttribute("paginaAtiva");

        for (let i = 0; i < paginasPortfolio.length; i++) {
            if (paginaAtiva.toLocaleLowerCase() == paginasPortfolio[i][1].toLocaleLowerCase()) {
                paginasPortfolio.splice(i, 1);
                break;
            }
        }
        return paginasPortfolio;
    }

    build() {
        let conteudoHTML = "";

        conteudoHTML += `<footer class="rodape">`

        //logo
        conteudoHTML += this.build_logo();

        //projetos
        var paginasPortfolio = this.initPaginasPortfolio();
        conteudoHTML += this.build_projetos(paginasPortfolio);

        //coluna contato
        conteudoHTML += this.build_contato();

        //coluna redes sociais
        conteudoHTML += this.build_redes_sociais();

        conteudoHTML += `</footer">`

        return conteudoHTML;
    }

    build_logo() {
        return `
        <a class="logo-rodape" href="../index.html">
            <img src="../assets/imagens/logo.png" alt="Logo">
        </a>
        `
    }

    build_projetos(paginasPortfolio) {
        return `
        <div class="coluna">
            <h1 class="topicos">Outros Projetos</h1>
            <div class="">
                <ul>
                    <li class="item">
                    <a href="${paginasPortfolio[0][0]}">
                    ${paginasPortfolio[0][1]}</a></li>
                    <li class="item">
                    <a href="${paginasPortfolio[1][0]}">
                    ${paginasPortfolio[1][1]}</a></li>
                    <li class="item">
                    <a href="${paginasPortfolio[2][0]}">
                    ${paginasPortfolio[2][1]}</a></li>
                    <li class="item">
                    <a href="${paginasPortfolio[3][0]}">
                    ${paginasPortfolio[3][1]}</a></li>
                </ul>
            </div>
        </div>
        `
    }

    build_contato() {
        return `
        <div class="coluna">
            <h1 class="topicos">Contato</h1>
            <div class="contato">
                <ul>
                    <li class="item">
                        <a class="contato-email" href="mailto:bs.marcosandre@gmail.com">
                            bs.marcosandre@gmail.com
                        </a>
                    </li>
                    <li class="item">
                        <a class="contato-whatsapp" href="https://web.whatsapp.com/send?phone=5514996586618">
                            (14) 99658-6618
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        `
    }

    build_redes_sociais() {
        return `
        <div class="coluna">
            <h1 class="topicos">Redes Sociais</h1>
            <div class="midia-social">
                <a href="https://github.com/MarcosAndreBueno" target="_blank">
                    <i class="fa-brands fa-github-alt"></i>
                </a>
                <a href="https://www.linkedin.com/in/marcosandrebueno/" target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        `
    }

    styles() {
        return `
            @import './css/projeto.css'; 
            @import './css/responsive.css';
            @import '../assets/css/icone.css';
        `;
    }
}

customElements.define("shadow-rodape", Rodape)
