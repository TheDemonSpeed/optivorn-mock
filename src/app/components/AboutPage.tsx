import imgHero from "../../imports/About/53deb2a5fc51761411a5f6b36cee7ab7de756c81.png";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { Stats } from "./Stats";
import { Clients } from "./Clients";
import { CTAFooter } from "./CTAFooter";

const visionItems = [
  { number: "01", title: "99% Accurate Reporting", body: "Every appliance, refrigerant unit, and material flow is logged with verifiable accuracy across the operation." },
  { number: "02", title: "End-to-End Visibility", body: "From pickup to processing, every stage is monitored in real time with full traceability." },
  { number: "03", title: "Fully Automated Logs", body: "Ideal for EPA, CARB, DTSC, R2, e-waste audits." },
  { number: "04", title: "Faster Floor Operations", body: "Streamlined workflows reduce dwell time and accelerate throughput at every facility." },
  { number: "05", title: "Boost Profit Margins", body: "Capture every revenue source — scrap, refrigerant, oil, and carbon credits — without leakage." },
  { number: "06", title: "Hardware + Software Ecosystem", body: "Integrated scanners, sensors, and dashboards work as one connected operating layer." },
];

export function AboutPage() {
  return (
    <div className="bg-white w-full">
      <section className="relative w-full h-[640px] overflow-hidden bg-[#f3f3f3]">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          alt=""
          src={imgHero}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(127deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.75) 75%)" }} />
        <div className="relative max-w-[1440px] mx-auto h-full flex items-end justify-end px-[160px] pb-[80px]">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="text-[62px] text-white tracking-[-1.24px] leading-[1.05] text-right"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
          >
            Built for <span className="text-[#6bc152]">Responsible</span><br />Operations
          </motion.h1>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[160px] py-[80px]">
        <div className="flex items-start justify-between gap-[80px]">
          <Reveal>
            <div className="relative inline-grid w-[494px]">
              <div className="bg-[#ccfc7e] h-[44px] w-[196px] absolute left-[180px] top-[144px]" />
              <p className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Our mission is to enable transparent, efficient, and compliant operations that supports a sustainable future.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="w-[485px]">
            <p className="text-[20px] tracking-[-0.72px] text-[#5e5e5e]">
              We're transforming appliance recycling with intelligent software and automated workflows that ensure accuracy, accountability, and environmental responsibility at every step. From retailers and recyclers to haulers and municipalities, Optivron powers a fully digitized, zero-waste ecosystem with real-time processing, zero errors, and full compliance.
            </p>
          </Reveal>
        </div>
      </section>

      <Stats />

      <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
        <div className="flex items-start gap-[120px]">
          <Reveal className="w-[455px] sticky top-[140px]">
            <div className="relative inline-grid mb-[24px]">
              <div className="bg-[#ccfc7e] h-[49px] w-[112px] absolute left-[66px] top-0" />
              <h2 className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Our Vision
              </h2>
            </div>
            <p className="text-[20px] tracking-[-0.72px] text-[#5e5e5e]">
              A fully digitized, zero-waste recycling ecosystem where retailers, recyclers, and logistics providers can process appliances in real time, with zero errors and full compliance.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex-1 max-w-[485px]">
            <Accordion items={visionItems} openIndex={2} />
          </Reveal>
        </div>
      </section>

      <Clients />
      <CTAFooter />
    </div>
  );
}
