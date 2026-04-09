import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const serviceId = 'service_yxvt4dv';
  const templateId = 'template_pqh0qdy';
  const publicKey = 'ILsx05GQPOplnC0WI';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || 'N/A',
        message: formData.message
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        throw new Error('Response status not 200');
      }
    } catch (error) {
      console.error('Email error:', error);
      setSubmitStatus('error');
      setErrorMessage('Error al enviar el mensaje. Intenta nuevamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <h2 className="section-title">Iniciemos tu <br /><span className="text-gradient">Transformación</span></h2>
            <p className="section-subtitle">
              ¿Listo para escalar la ingeniería de tu empresa al siguiente nivel? Nuestro equipo de arquitectos tech está listo para escuchar.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon-box">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>rivuz.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-panel" data-aos="fade-left" data-aos-delay="200">
            {submitStatus === 'success' ? (
              <div className="form-feedback success-feedback">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h3>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo a la brevedad.</p>
                <button className="btn btn-primary" onClick={() => setSubmitStatus('idle')}>
                  <span>Enviar otro mensaje</span>
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nombre Completo</label>
                    <input 
                      type="text" 
                      name="name"
                      className="glow-input" 
                      placeholder="Apellido y nombre" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="glow-input" 
                      placeholder="contacto@email.com" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Empresa</label>
                  <input 
                    type="text" 
                    name="company"
                    className="glow-input" 
                    placeholder="Nombre de tu organización" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Descripción del Proyecto</label>
                  <textarea 
                    name="message"
                    rows={4} 
                    className="glow-input" 
                    placeholder="Cuéntanos sobre tus necesidades técnicas o el producto que imaginas..."
                    required
                    minLength={10}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {submitStatus === 'error' && (
                  <div className="form-error-banner">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    {errorMessage}
                  </div>
                )}

                <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>
                  {!isLoading ? (
                    <span>Enviar</span>
                  ) : (
                    <span className="loading-indicator">
                      <svg className="spinner" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Enviando...
                    </span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
