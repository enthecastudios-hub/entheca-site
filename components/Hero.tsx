export default function Hero() {
  return (
    <section className="hero">
      <span className="eyebrow">
        <span className="spark"></span> independent game studio
      </span>
      <h1 className="hero-heading">
        Small worlds,<br />
        <span className="accent">built with intent.</span>
      </h1>
      <p className="hero-sub">
        ENTHECA | studios is an indie game studio making considered,
        atmospheric games — from first prototype to shipped build.
      </p>
      <div className="cta-row">
        <a href="#feature" className="btn btn-primary">See the work</a>
        <a href="#contact" className="btn btn-ghost">Get in touch</a>
      </div>
      <div className="scroll-cue">
        <span>scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
}
