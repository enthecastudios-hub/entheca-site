import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeltABiteLinks from "@/components/MeltABiteLinks";

export const metadata: Metadata = {
  title: "MeltABite Support | ENTHECA studios",
  description: "Help with MeltABite: purchases, backups, Apple Health and more.",
};

const faqs = [
  {
    q: "I bought Plus, but it isn't unlocked.",
    a: "Open Me → MeltABite Plus and tap Restore Purchases. Make sure you're signed in with the same Apple Account you bought it with. On a new iPhone, Plus comes back the same way.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "On your iPhone, open Settings → your name → Subscriptions → MeltABite Plus → Cancel Subscription. Plus stays on until the end of the period you've paid for. Cancel at least 24 hours before it renews.",
  },
  {
    q: "How do I get a refund?",
    a: "Purchases are handled by Apple, so refunds are too. Go to reportaproblem.apple.com, sign in, and choose the MeltABite purchase.",
  },
  {
    q: "How do I move my data to a new iPhone?",
    a: "On your old iPhone, open Me → Export backup and save the file to iCloud Drive or Files. On the new iPhone, open Me → Import backup and pick that file. Your data is never stored with us, so a backup is the only way to move it.",
  },
  {
    q: "My steps or workouts don't show up.",
    a: "Open the Health app → your profile → Apps → MeltABite and turn on the data you want to share. Then close and reopen MeltABite. In MeltABite, Me → Apple Health should be on.",
  },
  {
    q: "A food has the wrong calories.",
    a: "Food data comes from Open Food Facts, which anyone can improve. In MeltABite you can create your own food straight from the nutrition label with the label scanner.",
  },
  {
    q: "How do I delete my data?",
    a: "Everything is stored on your iPhone, so deleting the app deletes your data. If you turned on Save to Apple Health, you can remove that data in the Health app.",
  },
];

export default function MeltABiteSupportPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="eyebrow"><span className="spark"></span> meltabite · support</span>
        <h1 className="legal-heading">How can we help?</h1>
        <p className="legal-updated">Most answers are below. If yours isn&apos;t, email us and we&apos;ll reply as soon as we can.</p>

        <a href="mailto:enthecastudios@gmail.com?subject=MeltABite%20support" className="btn btn-primary mab-mail">Email support</a>

        <div className="mab-faq">
          {faqs.map((faq) => (
            <details className="mab-faq-item" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>

        <section className="legal-section">
          <h2>When you write to us</h2>
          <p>Tell us your iPhone model, your iOS version and what happened. A screenshot helps a lot. Please never send your Apple Account password or card details: we never need them.</p>
        </section>

        <MeltABiteLinks current="/meltabite/support" />
      </main>
      <Footer />
    </>
  );
}
