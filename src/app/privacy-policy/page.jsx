export const metadata = {
  title: "Privacy Policy - TEK Tribe | Data Protection & Cookie Policy",
  description: "TEK Tribe's privacy policy explaining how we collect, use, and protect your personal data. Learn about our cookie usage and data protection practices.",
  robots: "index, follow",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="privacy-policy-page">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p><strong>Last updated:</strong> {new Date().toLocaleDateString()}</p>
        
        <section>
          <h2>Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you contact us or sign up for our services.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services and communicate with you.</p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>We use cookies to enhance your experience on our website. You can control cookie settings through our cookie banner.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at info@tektribe.org.uk</p>
        </section>
      </div>
    </div>
  );
}