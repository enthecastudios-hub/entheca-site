import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="eyebrow"><span className="spark"></span> legal</span>
        <h1 className="legal-heading">Terms of Service</h1>
        <p className="legal-updated">Last updated: July 2026</p>

        <section className="legal-section">
          <h2>Using this site</h2>
          <p>By using this website, you agree to use it lawfully and not to attempt to disrupt, misuse, or gain unauthorised access to any part of it.</p>
        </section>

        <section className="legal-section">
          <h2>Shop purchases</h2>
          <p>Items are sold exclusively through FAB and the goods are delivered electronically. Unless stated otherwise on the individual item, purchases are final once access to the digital content has been provided.</p>
        </section>

        <section className="legal-section">
          <h2>Donations</h2>
          <p>Donations made through this site are voluntary and non-refundable, except where required by law.</p>
        </section>

        <section className="legal-section">
          <h2>Intellectual property</h2>
          <p>All content on this site, including logos, artwork, game assets, and written content, belongs to ENTHECA Studios unless otherwise stated, and may not be reproduced without permission.</p>
        </section>

        <section className="legal-section">
          <h2>Limitation of liability</h2>
          <p>This site and its content are provided as-is. ENTHECA Studios is not liable for any damages arising from your use of the site, to the fullest extent permitted by law.</p>
        </section>

        <section className="legal-section">
          <h2>Changes to these terms</h2>
          <p>We may update these terms from time to time. Continued use of the site after changes are posted constitutes acceptance of the updated terms.</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:enthecastudios@gmail.com">enthecastudios@gmail.com</a>.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}