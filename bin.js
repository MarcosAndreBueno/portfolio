document.addEventListener('DOMContentLoaded', function() {
    const projetoCartoes = document.querySelectorAll('.projeto-cartao');
    const closeButton = document.querySelector('.close-button');

    projetoCartoes.forEach(function(projeto) {
        projeto.addEventListener('click', function() {
            projetoCartoes.forEach(function(outraProjeto) {
                if (outraProjeto !== projeto) {
                    outraProjeto.style.display = 'none';
                }
            });
        });
    });

    /* Fechar ao clicar no botão */
    closeButton.addEventListener('click', function() {
        projetoCartoes.forEach(function(projeto) {
            projeto.style.display = 'block';
        });
    });

    /* Fechar ao clicar fora da div */
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.projeto-cartao')) {
            projetoCartoes.forEach(function(projeto) {
                projeto.style.display = 'block';
            });
        }
    });
});
