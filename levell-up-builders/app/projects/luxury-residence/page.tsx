import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommercialComplexPage() {
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
              Commercial
              <br />
              Complex
            </h1>

            <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#C8D3DE]">
              A complete commercial development combining
              architectural presence with practical execution.
            </p>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}