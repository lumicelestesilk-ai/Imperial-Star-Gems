import Link from "next/link";
import type { DiamondStone } from "@/lib/catalog";

function makeMailto(stone: DiamondStone) {
  const subject = `Enquiry - ${stone.sku}`;
  const body = `Hi, I'm interested in stone SKU ${stone.sku} (${stone.shape}, ${stone.carat}, ${stone.color}/${stone.clarity}). Please share more details.`;
  return `mailto:sales@imperialstargems.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function makeWhatsapp(stone: DiamondStone) {
  const text = `Hi, I'm interested in stone SKU ${stone.sku} (${stone.shape}, ${stone.carat}, ${stone.color}/${stone.clarity}). Please share more details.`;
  return `https://wa.me/15551234567?text=${encodeURIComponent(text)}`;
}

export function CatalogGrid({ stones }: { stones: DiamondStone[] }) {
  return (
    <div className="catalog-grid">
      {stones.map((stone) => (
        <article key={stone.sku} className="stone-card">
          <div className="stone-card__media" style={{ background: stone.thumbnail }}>
            <div className="stone-card__badge">{stone.origin}</div>
          </div>
          <div className="stone-card__body">
            <div className="stone-card__meta-row">
              <span>{stone.shape}</span>
              <span>{stone.carat}</span>
            </div>
            <h3>{stone.sku}</h3>
            <p>{stone.color} / {stone.clarity} / {stone.cut} / {stone.certificate}</p>
            <div className="stone-card__actions">
              <a href={makeMailto(stone)} className="button button--primary">
                Enquire
              </a>
              <a href={makeWhatsapp(stone)} className="button button--ghost" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function FeaturedStoneList({ stones }: { stones: DiamondStone[] }) {
  return (
    <div className="featured-list">
      {stones.map((stone) => (
        <div key={stone.sku} className="featured-item">
          <div className="featured-item__thumb" style={{ background: stone.thumbnail }} />
          <div>
            <div className="stone-card__meta-row">
              <span>{stone.shape}</span>
              <span>{stone.carat}</span>
            </div>
            <h3>{stone.sku}</h3>
            <p>{stone.note}</p>
            <Link href="/contact" className="button button--link">
              Request details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
