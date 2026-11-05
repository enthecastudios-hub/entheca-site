import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeltABiteLinks from "@/components/MeltABiteLinks";

export const metadata: Metadata = {
  title: "MeltABite Terms of Use | ENTHECA studios",
  description: "Terms of Use for the MeltABite app and MeltABite Plus.",
};

const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export default function MeltABiteTermsPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="eyebrow"><span className="spark"></span> meltabite · legal</span>
        <h1 className="legal-heading">MeltABite Terms of Use</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <section className="legal-section">
          <h2>The agreement</h2>
          <p>MeltABite is made by ENTHECA Studios. Your use of the app is covered by Apple&apos;s <a href={APPLE_EULA} target="_blank" rel="noopener noreferrer">Standard Licensed Application End User License Agreement</a>, together with these terms. If the two ever disagree, Apple&apos;s agreement wins.</p>
        </section>

        <section className="legal-section">
          <h2>Not medical advice</h2>
          <p>MeltABite helps you track food, activity and habits. Calorie targets, nutrition numbers, suggestions and insights are estimates for general wellness, not medical advice. Food data can contain mistakes. Talk to a doctor or dietitian before changing your diet or exercise, especially if you are pregnant, under 18, or have a medical condition, including any history of eating disorders.</p>
        </section>

        <section className="legal-section">
          <h2>MeltABite Plus</h2>
          <p>MeltABite is free to use. MeltABite Plus is an optional purchase that unlocks extra features, sold as a monthly or yearly subscription or as a one-time lifetime purchase. The price is shown in the app before you buy, and payment is charged to your Apple Account when you confirm the purchase.</p>
          <p>Subscriptions renew automatically at the same price unless you cancel at least 24 hours before the end of the current period. Your account is charged for renewal within 24 hours before the period ends. If your plan includes a free trial, you are charged when the trial ends unless you cancel before then; any unused part of a trial is lost when you buy a subscription.</p>
          <p>You can manage or cancel your subscription in Settings → your name → Subscriptions on your iPhone. Lifetime is a single payment and does not renew.</p>
          <p>Refunds are handled by Apple at <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">reportaproblem.apple.com</a>. Plus features may change or be added over time.</p>
        </section>

        <section className="legal-section">
          <h2>Your data</h2>
          <p>Your data stays on your device. You are responsible for keeping backups; the app can export one for you. See the <a href="/meltabite/privacy">Privacy Policy</a> for details.</p>
        </section>

        <section className="legal-section">
          <h2>Fair use</h2>
          <p>Please don&apos;t copy, reverse engineer or resell the app, or use it in a way that breaks the law. All app content, design and artwork belong to ENTHECA Studios. Food data comes from Open Food Facts and is available under the Open Database License.</p>
        </section>

        <section className="legal-section">
          <h2>Limitation of liability</h2>
          <p>The app is provided as-is. To the fullest extent permitted by law, ENTHECA Studios is not liable for any damages arising from your use of MeltABite. Nothing in these terms limits rights you have under consumer law where you live.</p>
        </section>

        <section className="legal-section">
          <h2>Changes</h2>
          <p>We may update these terms. When we do, we change the date above. Continuing to use the app after a change means you accept the updated terms.</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>ENTHECA Studios · <a href="mailto:enthecastudios@gmail.com">enthecastudios@gmail.com</a></p>
        </section>

        <MeltABiteLinks current="/meltabite/terms" />
      </main>
      <Footer />
    </>
  );
}
