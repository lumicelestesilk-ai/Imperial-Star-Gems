import Link from "next/link";
import { ShapeGlyph } from "@/components/shape-glyph";
import { shapeList } from "@/lib/catalog";

export default function ShapesPage() {
  return (
    <section className="page-shell">
      <div className="section-heading section-heading--tight">
        <p className="eyebrow">Shapes</p>
        <h1>Each silhouette is chosen to balance brilliance and proportion.</h1>
      </div>

      <div className="shape-showcase">
        {shapeList.map((shape) => (
          <article key={shape.name} className="shape-card">
            <div className="shape-card__glyph">
              <ShapeGlyph shape={shape.name} active className="shape-card__icon" />
            </div>
            <div>
              <h2>{shape.name}</h2>
              <p>{shape.summary}</p>
              <Link href="/natural-diamonds">View stones in this shape</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
