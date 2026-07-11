import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function FeatureProject() {
  const project = projects.find((p) => p.featured) ?? projects[0];

  return (
    <section className="feature" id="feature">
      <div className="feature-inner">
        <div className="feature-copy">
          <span className="eyebrow"><span className="spark"></span> featured project</span>
          <h2 className="feature-heading">{project.title}</h2>
          <p className="feature-text">{project.tagline}</p>
          <Link href={`/work/${project.slug}`} className="btn btn-primary">View project</Link>
        </div>
        <div className="tile-wrapper">
          <div className="tile-glow"></div>
          <Link href={`/work/${project.slug}`} className={project.images.length ? "tile-art" : `tile-art ${project.art}`}>
            {project.images.length > 0 && <Image src={project.images[0]} alt={project.title} fill style={{ objectFit: "cover" }} />}
            <span className="tile-tag">{project.status}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}