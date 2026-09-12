"use client";

export default function ContactForm() {
  return (
    <form
      className="contact-form"
      onSubmit={async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
          const response = await fetch("/api/contacts", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.get("name"),
              email: formData.get("email"),
              phone: formData.get("phone"),
              project: formData.get("project"),
              location: formData.get("location"),
              requirements: formData.get("requirements"),
            }),
          });

          const result = await response.json();

          if (response.ok) {
            alert("Thank you. Your inquiry has been sent.");
            form.reset();
          } else {
            alert(
              result.error ||
                "Unable to send inquiry. Please try again."
            );
          }
        } catch {
          alert("Something went wrong. Please try again.");
        }
      }}
    >
      <div className="contact-field">
        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="phone">Phone Number</label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 XXXXX XXXXX"
          required
        />
      </div>

      <div className="contact-field">
        <label htmlFor="project">Project Type</label>

        <select
          id="project"
          name="project"
          defaultValue=""
          required
        >
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
        <label htmlFor="location">Project Location</label>

        <input
          id="location"
          name="location"
          type="text"
          placeholder="City / Location"
          required
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
          required
        />
      </div>

      <button
        type="submit"
        className="contact-submit"
      >
        Submit Inquiry
      </button>
    </form>
  );
}