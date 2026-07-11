import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { shopItems } from "@/lib/shop-items";

export default async function ShopItemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = shopItems.find((i) => i.slug === slug);

  if (!item) {
    return (
      <>
        <Header />
        <main className="detail-page">
          <p>Item not found.</p>
          <Link href="/shop" className="btn btn-ghost">Back to shop</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="detail-page">
        <Link href="/shop" className="detail-back">Back to shop</Link>
        <span className="eyebrow"><span className="spark"></span> {item.price}</span>
        <h1 className="detail-heading">{item.title}</h1>
        <p className="detail-tagline">{item.description}</p>
        <div className={`tile-art detail-image ${item.art}`}></div>
        <p className="detail-description">{item.longDescription}</p>
        <a href="#" className="btn btn-primary">Purchase, {item.price}</a>
      </main>
      <Footer />
    </>
  );
}