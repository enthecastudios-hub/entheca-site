import Link from "next/link";
import { shopItems } from "@/lib/shop-items";

export default function ShopPreview() {
  const preview = shopItems.slice(0, 3);

  return (
    <section className="shop-preview" id="shop">
      <div className="shop-head">
        <span className="eyebrow"><span className="spark"></span> the shop</span>
        <h2 className="shop-heading">Support the studio, get something back.</h2>
      </div>
      <div className="shop-grid">
        {preview.map((item) => (
          <Link href={`/shop/${item.slug}`} key={item.slug} className="card">
            <div className={`tile-art ${item.art}`}></div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-text">{item.description}</p>
            <div className="card-price">{item.price}</div>
          </Link>
        ))}
      </div>
      <Link href="/shop" className="btn btn-ghost">View full shop</Link>
    </section>
  );
}