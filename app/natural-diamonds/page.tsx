import { CatalogGrid } from "@/components/catalog-grid";
import { naturalStones } from "@/lib/catalog";

export default function NaturalDiamondsPage() {
  return (
    <section className="catalog-page">
      <div className="section-heading section-heading--tight">
        <p className="eyebrow">Natural diamonds</p>
        <h1>Selected loose stones for precise, mineral-led brilliance.</h1>
      </div>

      <div className="catalog-toolbar">
        <div className="catalog-toolbar__filters">
          <label>
            Shape
            <select defaultValue="all">
              <option value="all">All shapes</option>
              <option>Round</option>
              <option>Oval</option>
              <option>Princess</option>
              <option>Emerald</option>
            </select>
          </label>
          <label>
            Color
            <select defaultValue="all">
              <option value="all">Any color</option>
              <option>D</option>
              <option>E</option>
              <option>F</option>
              <option>G</option>
            </select>
          </label>
          <label>
            Clarity
            <select defaultValue="all">
              <option value="all">Any clarity</option>
              <option>VVS1</option>
              <option>VS1</option>
              <option>VS2</option>
              <option>SI1</option>
            </select>
          </label>
        </div>
      </div>

      <CatalogGrid stones={naturalStones} />
    </section>
  );
}
