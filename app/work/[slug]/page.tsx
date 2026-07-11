import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="detail-page">
          <p>Project not found.</p>
          <Link href="/work" className="btn btn-ghost">Back to work</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="detail-page">
        <Link href="/work" className="detail-back">Back to all work</Link>
        <span className="eyebrow"><span className="spark"></span> {project.status}</span>
        <h1 className="detail-heading">{project.title}</h1>
        <p className="detail-tagline">{project.tagline}</p>

        <div className="detail-gallery">
          {project.images.length > 0 ? (
            project.images.map((src, i) => (
              <div className="tile-art detail-image" key={i}>
                <Image src={src} alt={`${project.title} screenshot ${i + 1}`} fill style={{ objectFit: "cover" }} />
              </div>
            ))
          ) : (
            <div className={`tile-art detail-image ${project.art}`}></div>
          )}
        </div>

        <p className="detail-description">{project.description}</p>

        {(project.externalUrl || project.buttonLabel) && (
          project.buttonDisabled || !project.externalUrl ? (
            <span className="btn btn-primary btn-disabled">
              {project.buttonLabel ?? "Play / view project"}
            </span>
          ) : (
            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {project.buttonLabel ?? "Play / view project"}
            </a>
          )
        )}
      </main>
      <Footer />
    </>
  );
}