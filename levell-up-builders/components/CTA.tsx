export default function CTA() {
  return (
    <section className="section-dark">
      <div className="site-container py-24 text-center sm:py-28 lg:py-32">

        <p className="text-[11px] font-medium uppercase tracking-[0.32em] text-[#C58C67]">
          Start a Conversation
        </p>

        <h2
          className="mx-auto mt-5 w-full text-center"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "64px",
            lineHeight: "0.98",
            fontWeight: 500,
            letterSpacing: "-0.025em",
          }}
        >
          Let's Build Something Exceptional.
        </h2>

        <p
          style={{
            width: "100%",
            maxWidth: "760px",
            margin: "28px auto 0",
            textAlign: "center",
            fontSize: "17px",
            lineHeight: "1.75",
            color: "#C8D3DE",
          }}
        >
          Every remarkable structure begins with a conversation. Let’s discuss your
          vision and bring it to life.
        </p>

        <a
          href="mailto:levellupbuilders@gmail.com"
          className="mt-16 inline-flex min-h-[58px] min-w-[210px] items-center justify-center border border-[#C58C67] px-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#F5F2EA] transition hover:bg-[#C58C67]"
        >
          Contact Us
        </a>

      </div>
    </section>
  );
}