const botao = document.getElementById("btnMensagem");

botao.addEventListener("click", () => {
    alert(
        "Bem-vindo ao Descubra Paraná! Explore destinos incríveis, cultura e natureza."
    );
});

// Rolagem suave do menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const destino = document.querySelector(this.getAttribute('href'));

        destino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
