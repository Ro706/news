import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react'; // Using lucide-react for the arrow icon

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('EMEA'); // Default selected region
  const [newsletterConsent, setNewsletterConsent] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log({
      firstName,
      lastName,
      email,
      jobTitle,
      company,
      message,
      selectedRegion,
      newsletterConsent,
      privacyConsent,
    });
    alert('Form submitted! (Check console for data)'); // Using alert for demonstration, replace with a custom modal in production
  };

  return (
    <div className="form-container">
      <h1 className="form-heading">Let's get<br />started</h1>
      <hr className="form-divider"/>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group region-selection">
          <label className="form-label required">Region</label>
          <div className="region-buttons">
            <button
              type="button"
              className={`region-button ${selectedRegion === 'EMEA' ? 'active' : ''}`}
              onClick={() => setSelectedRegion('EMEA')}
            >
              EMEA
            </button>
            <button
              type="button"
              className={`region-button ${selectedRegion === 'INSEA' ? 'active' : ''}`}
              onClick={() => setSelectedRegion('INSEA')}
            >
              INSEA
            </button>
            <button
              type="button"
              className={`region-button ${selectedRegion === 'US' ? 'active' : ''}`}
              onClick={() => setSelectedRegion('US')}
            >
              US
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label required">First name</label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName" className="form-label required">Last name</label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label required">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="jobTitle" className="form-label">Job Title</label>
            <input
              type="text"
              id="jobTitle"
              className="form-input"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="company" className="form-label">Company</label>
            <input
              type="text"
              id="company"
              className="form-input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="message" className="form-label required">Message</label>
          <textarea
            id="message"
            className="form-textarea"
            rows="5"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="form-checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={newsletterConsent}
              onChange={(e) => setNewsletterConsent(e.target.checked)}
            />
            I'm happy to hear from Toaster and receive your monthly newsletter
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={privacyConsent}
              onChange={(e) => setPrivacyConsent(e.target.checked)}
            />
            I understand that Toaster will hold my data security in accordance with their privacy policy
          </label>
        </div>

        <button type="submit" className="submit-button">
          Submit <ChevronRight className="submit-arrow" size={20} />
        </button>
      </form>
    </div>
  );
}

export default Form;
