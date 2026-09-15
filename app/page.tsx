import Link from "next/link";
import { ArrowRight, Diamond, ShieldCheck, Sparkles } from "lucide-react";
import { CatalogGrid, FeaturedStoneList } from "@/components/catalog-grid";
import { DiamondSequence } from "@/components/diamond-sequence";
import { ShapeGlyph } from "@/components/shape-glyph";
import { labStones, naturalStones, shapeList } from "@/lib/catalog";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__intro">
          <p className="eyebrow">Loose natural and lab-grown diamonds</p>
          <h1>Diamond clarity, without the noise.</h1>
          <p className="lede">
            Imperial Star Gems presents selected stones chosen for cut, proportion,
            and fire — not for showmanship. The collection is designed for private
            and trade buyers seeking precision, calm confidence, and a direct route
            to enquiry.
          </p>
          <div className="hero__actions">
            <Link href="/natural-diamonds" className="button button--primary">
              Browse natural stones
            </Link>
            <Link href="/lab-grown-diamonds" className="button button--ghost">
              Browse lab-grown
            </Link>
          </div>
        </div>
        <div className="hero__stat-panel">
          <div className="hero__stat-block">
            <span>Shapes</span>
            <strong>11</strong>
          </div>
          <div className="hero__stat-block">
            <span>Origin</span>
            <strong>Natural + lab</strong>
          </div>
          <div className="hero__stat-block">
            <span>Standards</span>
            <strong>GIA / IGI</strong>
          </div>
        </div>
      </section>

      <DiamondSequence />

      <section className="spread">
        <div className="section-heading">
          <p className="eyebrow">The collection</p>
          <h2>Choose by shape, colour and character.</h2>
        </div>
        <div className="shape-grid">
          {shapeList.map((shape) => (
            <Link key={shape.name} href="/shapes" className="shape-tile">
              <ShapeGlyph shape={shape.name} className="shape-tile__icon" />
              <strong>{shape.name}</strong>
              <span>{shape.summary}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="split-panel">
        <div className="split-copy">
          <p className="eyebrow">Natural vs. lab-grown</p>
          <h2>Two routes, same standards.</h2>
          <p>
            Natural stones carry the depth of a geological history. Lab-grown
            diamonds offer a precise, modern value proposition with equivalent
            performance in brilliance and grading. Each is selected with the same
            focus on proportion, finish, and light return.
          </p>
        </div>
        <div className="origin-cards">
          <div className="origin-card">
            <Diamond className="origin-card__icon" />
            <h3>Natural</h3>
            <p>Earth-formed diamonds with distinct provenance and character.</p>
            <Link href="/natural-diamonds">View natural stones</Link>
          </div>
          <div className="origin-card">
            <Sparkles className="origin-card__icon" />
            <h3>Lab-grown</h3>
            <p>Scientifically grown, beautifully cut, and exceptionally efficient.</p>
            <Link href="/lab-grown-diamonds">View lab-grown stones</Link>
          </div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-heading section-heading--row">
          <div>
            <p className="eyebrow">Featured stones</p>
            <h2>Selected for brilliance and balance.</h2>
          </div>
          <Link href="/natural-diamonds" className="button button--ghost inline-link">
            View all stones <ArrowRight size={16} />
          </Link>
        </div>
        <FeaturedStoneList stones={[...naturalStones.slice(0, 2), ...labStones.slice(0, 2)]} />
      </section>

      <section className="story-panel">
        <div className="story-panel__copy">
          <p className="eyebrow">Craftsmanship</p>
          <h2>From rough crystal to radiant finish.</h2>
          <p>
            The stone is mapped before the first cut. Planning preserves yield and
            fire; sawing opens the rough; faceting and polishing define the final
            performance. The result is a diamond that is not only admired but also
            proportioned with intent.
          </p>
          <Link href="/craftsmanship" className="button button--ghost">
            Learn the process
          </Link>
        </div>
        <div className="story-steps">
          <div>
            <span>01</span>
            <h3>Planning</h3>
            <p>Mapping the cut to amplify face-up brilliance and optimize yield.</p>
          </div>
          <div>
            <span>02</span>
            <h3>Sawing</h3>
            <p>Opening the rough to reveal the internal potential of the stone.</p>
          </div>
          <div>
            <span>03</span>
            <h3>Polishing</h3>
            <p>Creating micro-precise facets to maximize light return and fire.</p>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <ShieldCheck size={22} />
        <p>
          Independent grading, clear documentation and direct enquiry pathways for
          trade and private buyers.
        </p>
      </section>
    </>
  );
}
