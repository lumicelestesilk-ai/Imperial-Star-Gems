import { CatalogGrid } from "@/components/catalog-grid";
import { labStones } from "@/lib/catalog";

export default function LabGrownDiamondsPage() {
  return (
    <section className="catalog-page">
      <div className="section-heading section-heading--tight">
        <p className="eyebrow">Lab-grown diamonds</p>
        <h1>Modern precision and precise light performance.</h1>
      </div>

      <div className="catalog-toolbar">
        <div className="catalog-toolbar__filters">
          <label>
            Shape
            <select defaultValue="all">
              <option value="all">All shapes</option>
              <option>Round</option>
              <option>Oval</option>
              <option>Pear</option>
              <option>Radiant</option>
            </select>
          </label>
          <label>
            Carat
            <select defaultValue="all">
              <option value="all">Any carat</option>
              <option>0.50 - 1.00 ct</option>
              <option>1.00 - 1.50 ct</option>
              <option>1.50 - 2.00 ct</option>
            </select>
          </label>
          <label>
            Certificate
            <select defaultValue="all">
              <option value="all">Any certificate</option>
              <option>GIA</option>
              <option>IGI</option>
            </select>
          </label>
        </div>
      </div>

      <CatalogGrid stones={labStones} />
    </section>
  );
}
