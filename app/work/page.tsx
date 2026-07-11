import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="shop-page">
        <div className="shop-page-head">
          <span className="eyebrow"><span className="spark"></span> all work</span>
          <h1 className="shop-page-heading">Everything we have built.</h1>
        </div>
        <div className="shop-grid shop-page-grid">
          {projects.map((project) => (
            <Link href={`/work/${project.slug}`} key={project.slug} className="card">
              <div className={project.images.length ? "tile-art" : `tile-art ${project.art}`}>
                {project.images.length > 0 && <Image src={project.images[0]} alt={project.title} fill style={{ objectFit: "cover" }} />}
              </div>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.tagline}</p>
              <div className="card-meta"><span className="spark"></span> {project.status}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}