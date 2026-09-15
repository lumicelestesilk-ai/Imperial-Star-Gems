export default function CraftsmanshipPage() {
  return (
    <section className="page-shell prose-page">
      <div className="section-heading section-heading--tight">
        <p className="eyebrow">Craftsmanship</p>
        <h1>The path from rough crystal to a finished diamond.</h1>
      </div>

      <div className="process-grid">
        <div className="process-step">
          <span>01</span>
          <h2>Rough</h2>
          <p>
            The stone begins as a mineral body with latent brilliance. At this stage,
            the rough is assessed for structure, inclusions, and the best potential for
            a balanced cut.
          </p>
        </div>
        <div className="process-step">
          <span>02</span>
          <h2>Planning</h2>
          <p>
            The cut is mapped before the first incision. This stage defines the table,
            crown height, and pavilion depth to support fire, spread, and overall life.
          </p>
        </div>
        <div className="process-step">
          <span>03</span>
          <h2>Sawing</h2>
          <p>
            The rough is opened and separated according to the planned structure so the
            best portions of the stone are preserved and brought forward.
          </p>
        </div>
        <div className="process-step">
          <span>04</span>
          <h2>Faceting</h2>
          <p>
            Angles are refined to the micron. Facets are laid down to create a crisp,
            balanced return of white light and a measured glow in the body.
          </p>
        </div>
        <div className="process-step">
          <span>05</span>
          <h2>Polishing</h2>
          <p>
            Final finishing removes microsurface irregularities, sharpening the line and
            intensifying the stone’s brightness without forcing a synthetic look.
          </p>
        </div>
        <div className="process-step process-step--accent">
          <span>06</span>
          <h2>Certification</h2>
          <p>
            Each stone is reviewed against recognised grading frameworks, including GIA
            and IGI standards, so the final selection can be compared clearly.
          </p>
        </div>
      </div>
    </section>
  );
}
