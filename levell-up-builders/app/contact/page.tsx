import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="contact-hero section-dark">
        <div className="site-container">
          <div className="contact-hero-inner">
            <p className="eyebrow text-[#C58C67]">
              Start a Conversation
            </p>

            <h1 className="contact-hero-title">
              Let&apos;s talk about
              <br />
              your next project.
            </h1>

            <p className="contact-hero-copy">
              Tell us a little about your project, your vision and
              what you&apos;re looking to build. We&apos;ll take it from there.
            </p>
          </div>
        </div>
      </section>

      {/* INQUIRY */}
      <section className="contact-inquiry section-light">
        <div className="site-container">
          <div className="contact-grid">

            {/* LEFT */}
            <div className="contact-intro">
              <p className="eyebrow text-[#C58C67]">
                Project Inquiry
              </p>

              <h2 className="contact-title">
                Tell us about
                <br />
                your project.
              </h2>

              <p className="contact-description">
                Whether you&apos;re planning a new home, developing a
                residential space or looking to bring an existing vision
                to life, we&apos;d love to hear about it.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:levellupbuilders@gmail.com">
                    levellupbuilders@gmail.com
                  </a>
                </div>

                <div>
                  <span>Phone</span>
                  <p>+91 96000 14483</p>
                </div>

                <div>
                  <span>Location</span>
                  <p>No.3, 1st Floor,5thStreet,Tansi Nagar, 100ft.Taramani Link Road, Velachery, Chennai 600042.</p>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="contact-form-wrap">
              <form className="contact-form">

                <div className="contact-field">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="phone">
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="project">
                    Project Type
                  </label>

                  <select id="project" name="project" defaultValue="">
                    <option value="" disabled>
                      Select a project type
                    </option>
                    <option value="residential-construction">
                      Residential Construction
                    </option>
                    <option value="interior-design">
                      Interior Design
                    </option>
                    <option value="renovation">
                      Renovation
                    </option>
                    <option value="turnkey">
                      Turnkey Project
                    </option>
                    <option value="other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="contact-field">
                  <label htmlFor="location">
                    Project Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City / Location"
                  />
                </div>

                <div className="contact-field contact-field-large">
                  <label htmlFor="requirements">
                    Project Requirements
                  </label>

                  <textarea
                    id="requirements"
                    name="requirements"
                    placeholder="Tell us about your project..."
                    rows={7}
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Submit Inquiry
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="contact-closing section-dark">
        <div className="site-container">
          <p className="eyebrow text-[#C58C67]">
            Have a vision?
          </p>

          <h2 className="contact-closing-title">
            Let&apos;s build it
            <br />
            together.
          </h2>

          <p className="contact-closing-copy">
            Every project begins with a conversation.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}