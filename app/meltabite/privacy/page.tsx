import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeltABiteLinks from "@/components/MeltABiteLinks";

export const metadata: Metadata = {
  title: "MeltABite Privacy Policy | ENTHECA studios",
  description: "How MeltABite handles your data: no account, and your diary stays on your iPhone.",
};

export default function MeltABitePrivacyPage() {
  return (
    <>
      <Header />
      <main className="legal-page">
        <span className="eyebrow"><span className="spark"></span> meltabite · legal</span>
        <h1 className="legal-heading">MeltABite Privacy Policy</h1>
        <p className="legal-updated">Last updated: November 2026</p>

        <section className="legal-section">
          <h2>The short version</h2>
          <p>MeltABite is made by ENTHECA Studios. It has no account and no sign-up, and we don&apos;t run any servers for it. Everything you log stays on your iPhone. We don&apos;t collect, sell or share your personal data, and the app has no ads, analytics or tracking.</p>
        </section>

        <section className="legal-section">
          <h2>What stays on your iPhone</h2>
          <p>Your profile and goals, food diary, saved foods, meals and recipes, water, weight, body measurements, progress photos, workouts and routes, fasting, supplements, drinks, streaks, badges and settings are stored only on your device. We never receive them.</p>
          <p>If you export a backup, MeltABite saves one file to the place you pick, such as Files or iCloud Drive. That file is yours, and Apple&apos;s privacy policy covers iCloud Drive.</p>
          <p>Deleting the app deletes all of this data from your iPhone.</p>
        </section>

        <section className="legal-section">
          <h2>Apple Health</h2>
          <p>If you turn on Apple Health, MeltABite can read your steps, walking, running and cycling distance, flights climbed, active energy, workouts and sleep. If you turn on &quot;Save to Apple Health&quot;, it also writes your calories, carbs, fat, protein, water, weight and workouts.</p>
          <p>Health data is used only to show your progress inside the app. It never leaves your device through us, is never used for advertising, and is never sold or shared with anyone. You can change or remove access at any time in the Health app.</p>
        </section>

        <section className="legal-section">
          <h2>Camera, photos and location</h2>
          <p>The camera is used to scan barcodes, nutrition labels and friends&apos; QR codes, and to count exercises. All of this happens on your iPhone; no images are uploaded. Photos you add (your profile picture, food or progress photos) are stored only in the app.</p>
          <p>Location is used only while you record a workout with GPS, to draw your route and measure distance. Routes are stored on your device. Maps are provided by Apple Maps.</p>
        </section>

        <section className="legal-section">
          <h2>App Lock and Screen Time</h2>
          <p>App Lock uses Apple&apos;s Screen Time framework. Apple only gives MeltABite private tokens for the apps you choose to lock, so we can&apos;t see which apps they are, and we can&apos;t see your usage.</p>
        </section>

        <section className="legal-section">
          <h2>Services the app connects to</h2>
          <p>When you search for a food or scan a barcode, the search text or barcode is sent to <a href="https://world.openfoodfacts.org/privacy" target="_blank" rel="noopener noreferrer">Open Food Facts</a>, a free public food database, to find the nutrition information. Like any website, they receive your IP address with the request. No account or personal details are sent.</p>
          <p>When you import a recipe, MeltABite opens the web page address you enter to read the recipe from it.</p>
          <p>Friend challenges work offline: you and your friend scan each other&apos;s QR codes, which contain only the name you choose, a random friend ID, your streak, your daily challenge points and this week&apos;s workout count and distance.</p>
        </section>

        <section className="legal-section">
          <h2>Purchases</h2>
          <p>MeltABite Plus is bought through Apple. Apple handles the payment, and we never see your name, card or Apple Account details. The app only asks Apple whether Plus is active on your account.</p>
        </section>

        <section className="legal-section">
          <h2>Notifications</h2>
          <p>Reminders are created on your iPhone. We don&apos;t send push notifications and don&apos;t collect any notification data.</p>
        </section>

        <section className="legal-section">
          <h2>Children</h2>
          <p>MeltABite is not directed at children under 13 (or under 16 in the EU). Because the app doesn&apos;t collect personal data, we don&apos;t knowingly hold any data from children.</p>
        </section>

        <section className="legal-section">
          <h2>Your rights</h2>
          <p>Because your data stays on your device, you are always in control of it: you can view, change, export or delete it inside the app, or delete the app entirely. If you have any question about your privacy, including your rights under the GDPR, contact us and we&apos;ll answer.</p>
        </section>

        <section className="legal-section">
          <h2>Changes</h2>
          <p>If MeltABite ever starts collecting data (for example, if we add ads), we will update this policy and the date above before that change reaches the app.</p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>ENTHECA Studios · <a href="mailto:enthecastudios@gmail.com">enthecastudios@gmail.com</a></p>
        </section>

        <MeltABiteLinks current="/meltabite/privacy" />
      </main>
      <Footer />
    </>
  );
}
