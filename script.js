document.addEventListener('DOMContentLoaded', function () {
    function abrirWhatsApp(mensagem) {
        const numeroWhatsApp = '5571999816613';
        const mensagemCodificada = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;
        window.location.href = urlWhatsApp;
    }

    // Botão principal
    const botaoPrincipal = document.getElementById('compre');
    if (botaoPrincipal) {
        botaoPrincipal.addEventListener('click', function (e) {
            e.preventDefault();
            abrirWhatsApp('Olá, eu gostaria de saber mais sobre o Suporte para Livros ReadEase');
        });
    }

    // Seleciona todos os botões que tenham classe começando com 'botaocompra'
    const botoesCompra = document.querySelectorAll('[class^="botaocompra"]');

    botoesCompra.forEach(botao => {
        botao.addEventListener('click', function (e) {
            e.preventDefault();

            const card = botao.closest('.item-produto');
            const tituloProduto = card ? card.querySelector('h4') : null;
            const nomeProduto = tituloProduto ? tituloProduto.textContent.trim() : 'um produto da ReadEase';

            abrirWhatsApp(`Olá, eu gostaria de saber mais sobre ${nomeProduto}`);
        });
    });

    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }

    function closeMenu() {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    hamburger.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Fechar menu ao clicar em um link
    const mobileLinks = document.querySelectorAll('.mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar menu com tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Fechar menu ao redimensionar para desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});