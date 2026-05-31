import imgHero from "../../imports/Features/c52ed34cac8c5be671c2cf9a4ed8ba77c5165496.png";
import img1 from "../../imports/Features/762a802a1fdb312600d69ba70258bf84988bcbf5.png";
import img2 from "../../imports/Features/4f77bc902b8ba3bab9abbf7c86fcde6c7c03c8cf.png";
import img3 from "../../imports/Features/501efede38780384a828330aeb7aa689a2077d8e.png";
import img4 from "../../imports/Features/aedc453816a571b3853d116ee4fbcbfe25b8a8c8.png";
import img5 from "../../imports/Features/3b4aec54e284b1fb6a15c6c313da046e619352fc.png";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Accordion } from "./Accordion";
import { CTAFooter } from "./CTAFooter";

const features = [
  { img: img1, title: "Multi-Role Dashboard", desc: "Super Admin, Admin, Vendors, Floor Managers, and Drivers each get tailored dashboards to manage operations, track performance, and monitor revenue in real time." },
  { img: img2, title: "Pickup & Route Intelligence", desc: "Plan optimized routes, assign drivers, verify pickups with photo proof, and track load counts and trailer status with live updates." },
  { img: img3, title: "Trailer & Asset Visibility", desc: "Track trailers and trucks with GPS, idle alerts, unauthorized movement warnings, ETA predictions, and complete trip history logs." },
  { img: img4, title: "Smart Appliance Intake", desc: "Scan and tag appliances by category, ensure AI-assisted count accuracy, batch process trailers." },
  { img: img5, title: "Automated Refrigerant & Oil Evacuation", desc: "Capture refrigerant type, quantity, oil removal, timestamps, and serial data directly from machines—fully compliant, audit-ready, and paperless." },
];

const faqs = [
  { title: "How does Optivron optimize pickups and routes?", body: "Optivron uses live driver data, load balance, and historical trip patterns to generate optimized routes that reduce drive time and fuel cost." },
  { title: "How does the platform help with regulatory compliance?", body: "Every refrigerant evacuation, oil removal, and material flow is logged automatically with timestamps, ready for EPA, CARB, DTSC, and R2 audits." },
  { title: "Can different teams access different dashboards?", body: "Yes. Role-based dashboards ensure admins, drivers, and managers see only what's relevant to their responsibilities, all from one platform." },
  { title: "Do I get real-time operational visibility?", body: "Yes — GPS, intake counts, evacuation logs, and floor activity stream live into your admin dashboard." },
];

export function FeaturesPage() {
  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-[160px] pt-[60px] pb-[60px]">
        <Reveal>
          <div className="relative inline-grid mb-[40px]">
            <div className="bg-[#ccfc7e] h-[44px] w-[310px] absolute left-[130px] top-[3px]" />
            <h1 className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              Explore 20+ purpose-built features<br />designed to manage pickups, trailers,<br />teams, compliance, and reporting
            </h1>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="h-[467px] w-full overflow-hidden rounded-[8px] shadow-lg"
          >
            <img alt="" src={imgHero} className="w-full h-full object-cover" />
          </motion.div>
        </Reveal>
      </section>

      <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
        <div className="flex gap-[120px] items-start">
          <Reveal className="w-[455px] sticky top-[140px]">
            <h2 className="text-[36px] text-black tracking-[-0.72px] mb-[16px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              Our wide range of features
            </h2>
            <p className="text-[22px] leading-[31px] text-[#5e5e5e] tracking-[-0.792px]">
              Purpose-built workflows that reduce complexity while increasing accuracy, compliance, and throughput.
            </p>
          </Reveal>
          <div className="flex flex-col gap-[60px] w-[485px]">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 200, damping: 18 }} className="flex flex-col gap-[24px]">
                  <div className="bg-[#f3f3f3] h-[263px] overflow-hidden rounded-[3.2px] w-full">
                    <motion.img whileHover={{ scale: 1.08 }} transition={{ duration: 0.6 }} alt="" src={f.img} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-[12px]">
                    <p className="text-[20px] text-black tracking-[-0.8px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      {f.title}
                    </p>
                    <p className="text-[16px] text-black/70 tracking-[-0.32px]">{f.desc}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
        <div className="flex items-start justify-between gap-[120px]">
          <Reveal className="w-[370px]">
            <div className="relative inline-grid mb-[16px]">
              <div className="bg-[#ccfc7e] h-[42px] w-[181px] absolute left-0 top-[52px]" />
              <h2 className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Frequently Asked<br />Questions
              </h2>
            </div>
            <p className="text-[22px] leading-[31px] text-[#5e5e5e] tracking-[-0.792px]">
              Purpose-built workflows that reduce complexity while increasing accuracy, compliance, and throughput.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="w-[485px]">
            <Accordion items={faqs} openIndex={2} />
          </Reveal>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
