// InovaByte — interações da landing page

document.addEventListener('DOMContentLoaded', () => {

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Header muda de aparência ao rolar a página
  const header = document.querySelector('header');
  const onScroll = () => {
    if (window.scrollY > 10) {
      header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.35)';
    } else {
      header.style.boxShadow = 'none';
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Destaca o link do menu correspondente à seção visível
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  const setActiveLink = () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  };
  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();

  // Lógica do formulário de WhatsApp
  const formWhatsApp = document.getElementById('formWhatsApp');
  if (formWhatsApp) {
    formWhatsApp.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio tradicional

      // Captura os valores
      const nome = document.getElementById('nome').value;
      const telefone = document.getElementById('telefone').value;
      const endereco = document.getElementById('endereco').value;
      const problema = document.getElementById('problema').value;

      // Monta a mensagem formatada
      const mensagem = `Olá! Gostaria de um atendimento:%0A%0A` +
                       `*Nome:* ${nome}%0A` +
                       `*Telefone:* ${telefone}%0A` +
                       `*Endereço:* ${endereco}%0A` +
                       `*Problema:* ${problema}`;

      // Abre o WhatsApp
      const urlWhatsApp = `https://wa.me/5533999665179?text=${mensagem}`;
      window.open(urlWhatsApp, '_blank');
    });
  }

});