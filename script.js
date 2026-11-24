const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menu' : 'Fechar menu');
  navigation?.classList.toggle('is-open', !isOpen);
});

navigation?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton?.setAttribute('aria-expanded', 'false');
    menuButton?.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('is-open');
  });
});

const dateInput = document.querySelector('#date');
if (dateInput) {
  const today = new Date();
  dateInput.min = new Date(today.getTime() - today.getTimezoneOffset() * 60_000)
    .toISOString().slice(0, 10);
}

document.querySelector('#contact-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!event.currentTarget.reportValidity()) return;
  const feedback = document.querySelector('#form-feedback');
  feedback.textContent = 'Solicitação registrada neste protótipo. Como não há envio de dados conectado, entre em contato pelos canais informados para confirmar seu atendimento.';
  feedback.focus();
  event.currentTarget.reset();
  if (dateInput) dateInput.min = new Date(Date.now() - new Date().getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
});

document.querySelector('#year').textContent = new Date().getFullYear();
