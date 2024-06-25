"use client";

import React, { useEffect } from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {

  // Define your privacy policy content here or fetch it from an external source
  const privacyPolicyContent: string = `
    <h2>Homie Privacy Policy</h2>
    <p>Your privacy is important to us. It is Your Company's policy to respect your privacy regarding any information we may collect from you across our website, https://get-homie.tech, and other sites we own and operate.</p>
    <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.</p>
    <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.</p>
    <p>We don't share any personally identifying information publicly or with third-parties, except when required to by law.</p>
    <p>Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.</p>
    <p>You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.</p>
    <p>Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.</p>
    <p>This policy is effective as of 1 January 2024.</p>
  `;

  useEffect(() => {
    // Display the privacy policy content on component mount
    const privacyPolicySection = document.getElementById('privacy-policy');
    if (privacyPolicySection) {
      privacyPolicySection.innerHTML = privacyPolicyContent;
    }
  }, []);

  return (
    <div>
      <header className="header">
        <h1>Privacy Policy</h1>
      </header>
      <main className="main">
        <section id="privacy-policy" className="privacy-policy">
          {/* Privacy policy content will be dynamically loaded here */}
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 Homie. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
