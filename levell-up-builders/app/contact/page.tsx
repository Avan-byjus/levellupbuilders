import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

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
                  <p>
                    No.3, 1st Floor,5thStreet,Tansi Nagar, 100ft.Taramani Link
                    Road, Velachery, Chennai 600042.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="contact-form-wrap">
              <ContactForm />
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