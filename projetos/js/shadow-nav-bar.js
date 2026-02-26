class ShadowNavBar extends HTMLElement {
    
    firstPath = '';

    constructor() {
        super();
        const shadow = this.attachShadow({ mode: "open" });
 
        this.findFirstPath();

        this.shadowRoot.innerHTML = this.build();

        //style
        const style = document.createElement("style");
        style.textContent = this.styles();
        this.shadowRoot.appendChild(style)
    }

    findFirstPath() {
        const basePath = window.location.pathname;
        const firstPath = basePath.split("/").slice(1, 2);
        if (firstPath[0] == "portfolio") { 
            this.firstPath = "/portfolio"; //prod
        } else { 
            this.firstPath = "" //dev
        }
    }

    build() {
        return `
        <header>
            <div class="nav-bar container flex">
                <div class="inicio">
                    <a class="logo" href="${this.firstPath}/#inicio">
                        <img src="${this.firstPath}/assets/imagens/logo.png" alt="Logo">
                    </a>
                </div>
                <nav class="nav-bar-itens">
                    <a href="${this.firstPath}/#inicio" class="active">Início</a>
                    <a href="${this.firstPath}/#sobre">Sobre</a>
                    <a href="${this.firstPath}/#projetos">Projetos</a>
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
        @import '${this.firstPath}/projetos/css/projeto.css'; 
        @import '${this.firstPath}/projetos/css/responsive.css';
        @import '${this.firstPath}/projetos/css/header.css';
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
        `;
    }
}

//seletor
customElements.define("shadow-nav-bar", ShadowNavBar);  