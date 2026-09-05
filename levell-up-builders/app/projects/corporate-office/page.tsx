import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CorporateOfficePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1622] text-[#F5F2EA]">

        <section className="py-32">
          <div className="mx-auto w-[min(calc(100%-32px),1440px)] sm:w-[min(calc(100%-64px),1440px)] lg:w-[min(calc(100%-96px),1440px)]">

            <p className="text-[11px] uppercase tracking-[0.32em] text-[#C58C67]">
              Commercial
            </p>

            <h1
              className="mt-6 text-[4rem] leading-[0.95] sm:text-[5rem] lg:text-[6rem]"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Corporate
              <br />
              Office
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C8D3DE]">
              A contemporary workplace designed for clarity,
              collaboration and long-term functionality.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}