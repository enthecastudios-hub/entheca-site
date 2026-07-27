import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="eyebrow"><span className="spark"></span> legal</span>
        <h1 className="legal-heading">Privacy Policy</h1>
        <p className="legal-updated">Last updated: July 2026</p>

        <section className="legal-section">
          <h2>What we collect</h2>
          <p>ENTHECA Studios collects minimal information. If you contact us directly (for example, by email), we receive whatever information you choose to share, such as your email address and the contents of your message.</p>
          <p>If you make a donation, payment is processed by a third-party provider. We do not store your card details or full payment information on our own servers.</p>
        </section>

        <section className="legal-section">
          <h2>How we use it</h2>
          <p>Any information you share with us is used only to respond to you, fulfil a purchase or donation, or deliver a service you have requested. We do not sell or share your personal information with third parties for marketing purposes.</p>
        </section>

        <section className="legal-section">
          <h2>Third-party services</h2>
          <p>Our website is hosted on Vercel and may use standard web analytics to understand site traffic. Payment processing is handled by third-party providers, each with their own privacy policy governing how they handle your payment information.</p>
        </section>

        <section className="legal-section">
          <h2>Your rights</h2>
          <p>You can request details of any information we hold about you, ask us to correct it, or ask us to delete it, by contacting us directly.</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>Questions about this policy can be sent to <a href="mailto:enthecastudios@gmail.com">enthecastudios@gmail.com</a>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}