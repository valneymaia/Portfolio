/**
 * Gerenciador de Formulário de Contato
 * Integração com FormSubmit.co
 */

export class ContactForm {
  constructor(formId = 'contact-form') {
    this.form = document.getElementById(formId);
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
      console.error('Erro:', error);
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 3000);
    }
  }
}

// Inicializa ao carregar
document.addEventListener('DOMContentLoaded', () => {
  window.contactForm = new ContactForm();
});
