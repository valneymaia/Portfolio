/**
 * Gerenciador de Formulário de Contato
 * Integração com FormSubmit.co
 */

export class ContactForm {
  constructor(formId = 'contactForm') {
    this.form = document.getElementById(formId) || document.querySelector('form[action*="formsubmit.co/ajax"]');
    this.feedbackEl = document.getElementById('contact-feedback');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    try {
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;

      const formData = new FormData(this.form);
      
      const response = await fetch(this.form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        submitBtn.textContent = '✓ Enviado com sucesso!';
        this.setFeedback('Mensagem enviada com sucesso. Vou te responder em breve.', 'success');
        this.form.reset();
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      submitBtn.textContent = '✗ Erro ao enviar';
      this.setFeedback('Não foi possível enviar agora. Tente novamente em instantes.', 'error');
      console.error('Erro:', error);
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  }

  setFeedback(message, type) {
    if (!this.feedbackEl) return;

    this.feedbackEl.textContent = message;
    this.feedbackEl.classList.remove('hidden', 'text-green-300', 'text-red-300');
    this.feedbackEl.classList.add(type === 'success' ? 'text-green-300' : 'text-red-300');
  }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', () => {
  window.contactForm = new ContactForm();
});
