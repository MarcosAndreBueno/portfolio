class ShadowNavBar extends HTMLElement {

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });

        const basePath = window.location.pathname; 
        let firstPath = basePath.split("/").slice(1,2);

        if (firstPath[0] == "projetos") { //dev
            firstPath = "/";
        } else { //prod
            firstPath = "/portfolio"
        }

        this.shadowRoot.innerHTML = this.build(firstPath);

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style)
    }

    build(basePath) {
        return `
        <header>
            <div class="nav-bar container flex">
                <div class="inicio">
                    <a class="logo" href="${basePath}#inicio">
                        <img src="${basePath}./assets/imagens/logo.png" alt="Logo">
                    </a>
                </div>
                <nav class="nav-bar-itens">
                    <a href="${basePath}#inicio" class="active">Início</a>
                    <a href="${basePath}#sobre">Sobre</a>
                    <a href="${basePath}#projetos">Projetos</a>
                    <div class="menu-contato">
                        <a class="menu-link" href="#contato">Contato</a>
                        <div class="dropdown-contato">
                            <a href="mailto:bs.marcosandre@gmail.com">
                                <i class="fa">&#xf0e0;</i> Email
                            </a>

                            <a href="https://web.whatsapp.com/send?phone=5514996586618" target="_blank">
                                <i class="fa">&#xf232;</i> (14) 99658-6618
                            </a>

                            <a href="https://web.whatsapp.com/send?phone=5519982666483" target="_blank">
                                <i class="fa">&#xf232;</i> (19) 98266-6483 (recado)
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
        `;
    }

    styles() {
        return ` 
        @import '/projetos/css/projeto.css'; 
        @import '/projetos/css/responsive.css';
        @import '/projetos/css/header.css';
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
        `;
    }
}

//seletor
customElements.define("shadow-nav-bar", ShadowNavBar);  