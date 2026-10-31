import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FutureResidencePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#0b1622] text-[#F5F2EA]">
        {/* HERO */}
        <section className="site-container py-28 sm:py-36 lg:py-40">
          <p className="eyebrow text-[#C58C67]">
            Residential — Project 03
          </p>

          <h1
            className="mt-8 text-[4rem] leading-[0.95] tracking-[-0.035em] sm:text-[5rem] lg:text-[7rem]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Future
            <br />
            Residence
          </h1>

          <p className="!mt-10 max-w-2xl text-[17px] leading-9 text-[#C8D3DE]">
            A future project in the evolving collection of Levell Up Builders.
          </p>
        </section>

        {/* PROJECT INFORMATION */}
        <section className="bg-[#F3F0E8] py-20 text-[#10243a] sm:py-28">
          <div className="site-container grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow text-[#A76F4E]">
                Coming Soon
              </p>

              <h2
                className="mt-6 max-w-xl text-4xl leading-tight sm:text-5xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Future Residence
              </h2>
            </div>

            <div className="max-w-2xl text-[16px] leading-8 text-[#566779]">
              <p>
                More details about this project will be shared soon.
                Check back as our project collection continues to grow.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}