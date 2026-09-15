export default function ContactPage() {
  return (
    <section className="page-shell contact-page">
      <div className="section-heading section-heading--tight">
        <p className="eyebrow">Contact</p>
        <h1>Request details for a stone or discuss a private selection.</h1>
      </div>

      <div className="contact-layout">
        <div className="contact-card">
          <h2>Direct enquiry</h2>
          <p>
            Reach the team for a specific stone, a shortlist, or a tailored trade enquiry.
          </p>
          <ul>
            <li>Email: sales@imperialstargems.com</li>
            <li>WhatsApp: +1 (555) 123-4567</li>
            <li>Business hours: Monday – Saturday</li>
          </ul>
        </div>

        <form className="enquiry-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email or phone
            <input type="text" name="contact" placeholder="Email or phone number" />
          </label>
          <label>
            Stone SKU
            <input type="text" name="sku" value="ISG-RD-N-10234" readOnly />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} placeholder="Tell us which stone you're interested in and what you'd like to know." />
          </label>
          <button type="submit" className="button button--primary">Send enquiry</button>
        </form>
      </div>
    </section>
  );
}
