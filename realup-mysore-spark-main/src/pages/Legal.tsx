// pages/Legal.jsx
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

const Legal = () => {
  const [activeSection, setActiveSection] = useState("terms");

  const sections = {
    terms: "Terms and Conditions",
    cancellations: "Cancellations and Refunds", 
    privacy: "Privacy Policy"
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Legal Information</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Important information about using our services and your rights.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 border-b pb-4">
          {Object.entries(sections).map(([key, title]) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeSection === key
                  ? "bg-red-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Terms and Conditions */}
          <section id="terms" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms and Conditions</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h3>
              <p className="text-gray-700 mb-4">
                By accessing and using RealUp's services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">2. Use of Services</h3>
              <p className="text-gray-700 mb-4">
                Our services are intended for individuals who are at least 18 years old. You agree to use our services for lawful purposes only.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">3. Intellectual Property</h3>
              <p className="text-gray-700 mb-4">
                All content included on our platform, such as text, graphics, logos, and images, is the property of RealUp or its content suppliers.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">4. User Conduct</h3>
              <p className="text-gray-700 mb-4">
                You agree not to use the service to: upload or transmit any content that is illegal, harmful, or offensive; impersonate any person or entity; or interfere with the service's operation.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5. Modifications to Terms</h3>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will provide notice of significant changes through our website or email.
              </p>
            </div>
          </section>

          {/* Cancellations and Refunds */}
          <section id="cancellations" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cancellations and Refunds</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">1. Event Cancellations</h3>
              <p className="text-gray-700 mb-4">
                If RealUp cancels an event, registered participants will receive a full refund within 7-10 business days.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">2. Participant Cancellations</h3>
              <p className="text-gray-700 mb-4">
                Cancellations made more than 48 hours before the event will receive a full refund. Cancellations within 48 hours of the event are non-refundable.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">3. Refund Process</h3>
              <p className="text-gray-700 mb-4">
                Refunds will be processed to the original payment method. Please allow 7-10 business days for the refund to reflect in your account.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">4. Transferring Tickets</h3>
              <p className="text-gray-700 mb-4">
                Tickets may be transferred to another person by contacting our support team at least 24 hours before the event.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5. Special Circumstances</h3>
              <p className="text-gray-700 mb-4">
                In case of emergencies or special circumstances, please contact our support team, and we will review your case individually.
              </p>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 italic">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">1. Information We Collect</h3>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, register for events, or contact us. This may include your name, email address, and payment information.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">2. How We Use Your Information</h3>
              <p className="text-gray-700 mb-4">
                We use your information to provide and improve our services, process transactions, communicate with you about events and updates, and ensure the security of our platform.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">3. Information Sharing</h3>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share information with service providers who assist us in operating our platform, and when required by law.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">4. Data Security</h3>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">5. Your Rights</h3>
              <p className="text-gray-700 mb-4">
                You may access, update, or delete your personal information by contacting us. You may also opt-out of marketing communications at any time.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">6. Cookies</h3>
              <p className="text-gray-700 mb-4">
                We use cookies and similar technologies to enhance your experience and analyze how our services are used.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Policy</h3>
              <p className="text-gray-700 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h3>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at privacy@realup.com.
              </p>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Legal;