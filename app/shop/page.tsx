import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { shopItems } from "@/lib/shop-items";

export default function ShopPage() {
  return (
    <>
      <Header />
      <main className="shop-page">
        <div className="shop-page-head">
          <span className="eyebrow"><span className="spark"></span> the shop</span>
          <h1 className="shop-page-heading">Everything, in one place.</h1>
        </div>
        <div className="shop-grid shop-page-grid">
          {shopItems.map((item) => (
            <Link href={`/shop/${item.slug}`} key={item.slug} className="card">
              <div className={`tile-art ${item.art}`}></div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
              <div className="card-price">{item.price}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}