import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function WorkGrid() {
  const preview = projects.filter((p) => !p.featured).slice(0, 3);

  return (
    <section className="work" id="work">
      <div className="work-head">
        <span className="eyebrow"><span className="spark"></span> selected work</span>
        <h2 className="work-heading">More from the studio.</h2>
      </div>
      <div className="work-grid">
        {preview.map((project) => (
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
      <Link href="/work" className="btn btn-ghost work-view-all">View all work</Link>
    </section>
  );
}