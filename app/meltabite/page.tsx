import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MeltABiteLinks from "@/components/MeltABiteLinks";

export const metadata: Metadata = {
  title: "MeltABite | ENTHECA studios",
  description: "A calm calorie tracker for iPhone. No account, no clutter, and everything you need every day is free.",
  openGraph: {
    title: "MeltABite",
    description: "A calm calorie tracker for iPhone. No account, no clutter.",
    url: "https://enthecastudios.com/meltabite",
    images: [{ url: "https://enthecastudios.com/meltabite/banner.jpg", width: 1600, height: 900 }],
  },
};

const features = [
  { title: "Log food fast", text: "Scan a barcode or a nutrition label, search millions of foods, or save your own meals and recipes." },
  { title: "See real progress", text: "Your weight trend, body measurements, progress photos and the calories you really burn." },
  { title: "Train and recover", text: "Record runs, rides and walks with GPS, gym sessions with a rest timer, and steps from Apple Health." },
  { title: "Water and habits", text: "Water in one tap, a fasting timer, streaks with freezes, and reminders that skip meals you've logged." },
  { title: "Your Home, your way", text: "Move, hide and change every card on Home, so you only see what matters to you." },
  { title: "Private by design", text: "No account and no sign-up. Your diary stays on your iPhone, and backups go where you choose." },
];

const free = [
  "Food diary, search and barcode scanner",
  "Nutrition label scanner",
  "Calories, carbs, fat and protein",
  "Water, weight and steps",
  "Workouts and GPS training",
  "Saved meals and recipes",
  "Fasting timer",
  "Streaks, badges and friend challenges",
  "Widgets, Shortcuts and Apple Health",
  "Backup and export",
];

const plus = [
  "App Lock: earn screen time back by moving",
  "Consistency score and when-you-eat insights",
  "Maintenance calories and nutrient tips",
  "Sleep insights and your monthly recap",
  "Meal plans, grocery list and recipe import",
  "Interval timer and lifting suggestions",
  "Supplements and alcohol tracking",
  "Body measurements, photos and timelapse",
  "Colour themes, card styles and app icons",
];

export default function MeltABitePage() {
  return (
    <>
      <Header />
      <main className="mab-page">
        <section className="mab-hero">
          <Image src="/meltabite/icon.png" alt="MeltABite app icon" width={128} height={128} className="mab-icon" priority />
          <span className="eyebrow"><span className="spark"></span> coming soon to iPhone</span>
          <h1 className="mab-heading">Melt<span className="accent">A</span>Bite</h1>
          <p className="mab-sub">A calm calorie tracker for iPhone. No account, no clutter, and everything you need every day is free.</p>
          <div className="cta-row mab-cta">
            <span className="btn btn-primary btn-disabled">App Store: coming soon</span>
            <Link href="/meltabite/support" className="btn btn-ghost">Support</Link>
          </div>
        </section>

        <section className="mab-section">
          <div className="mab-grid">
            {features.map((feature) => (
              <div className="card mab-card" key={feature.title}>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mab-section">
          <span className="eyebrow"><span className="spark"></span> pricing</span>
          <h2 className="mab-section-heading">Free for every day. Plus for going further.</h2>
          <div className="mab-plans">
            <div className="card mab-plan">
              <h3 className="mab-plan-title">Free</h3>
              <p className="mab-plan-price">€0</p>
              <ul className="mab-list">
                {free.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="card mab-plan mab-plan-plus">
              <h3 className="mab-plan-title">MeltABite Plus</h3>
              <p className="mab-plan-price">€19.99 <span>a year, with a 7-day free trial</span></p>
              <p className="mab-plan-alt">or €2.99 a month, or €39.99 once for lifetime</p>
              <ul className="mab-list">
                {plus.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <p className="mab-note">Prices can differ by country. The App Store always shows your exact price before you buy. Subscriptions renew automatically until you cancel in your Apple Account settings.</p>
        </section>

        <MeltABiteLinks current="/meltabite" />
      </main>
      <Footer />
    </>
  );
}
