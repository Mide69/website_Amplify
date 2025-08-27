"use client";
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          type="text"
          {...register('name', { required: 'Name is required' })}
          aria-invalid={errors.name ? 'true' : 'false'}
        />
        {errors.name && <span className="error-message" role="alert">{errors.name.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address *</label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email && <span className="error-message" role="alert">{errors.email.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          rows="5"
          {...register('message', { required: 'Message is required' })}
          aria-invalid={errors.message ? 'true' : 'false'}
        />
        {errors.message && <span className="error-message" role="alert">{errors.message.message}</span>}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="submit-btn"
        aria-describedby={submitStatus ? 'submit-status' : undefined}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus && (
        <div 
          id="submit-status" 
          className={`status-message ${submitStatus}`}
          role="alert"
        >
          {submitStatus === 'success' ? 'Message sent successfully!' : 'Failed to send message. Please try again.'}
        </div>
      )}
    </form>
  );
};

export default ContactForm;