import img1 from "../../imports/Frame2085665560/8878dfeea4135840e1030a61370589601a6a5093.png";
import img2 from "../../imports/Frame2085665560/e07677816d7a4bd2ed96722b299e3ec66cb8445e.png";
import img3 from "../../imports/Frame2085665560/00a294bc7356b7d7768271c0a2b799c392c157fc.png";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const steps = [
  {
    img: img1,
    title: "Pickup & Trailer Management",
    desc: "Drivers receive optimized pickup schedules, scan appliances, track loads, and update real-time statuses.",
  },
  {
    img: img2,
    title: "Appliance Processing & Recycling",
    desc: "Floor manager module logs refrigerant evacuation, oil removal, PCB/switch checks, and microwave capacitor discharge.",
  },
  {
    img: img3,
    title: "Reporting & Revenue Insights",
    desc: "Vendors and Admins receive complete analytics on appliance counts, scrap revenue, refrigerant sales, and carbon-credit value.",
  },
];

export function HowItWorks() {
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
      <div className="flex gap-[120px] items-start">
        <Reveal className="w-[455px] sticky top-[140px]">
          <div className="relative inline-grid mb-[16px]">
            <div className="bg-[#ccfc7e] h-[47px] w-[155px] absolute left-[77px] top-[3px]" />
            <h2 className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              How Optivron<br />Works
            </h2>
          </div>
          <p className="text-[22px] leading-[31px] text-[#5e5e5e] tracking-[-0.792px]">
            Purpose-built workflows that streamline pickups, processing, and reporting improving accuracy, compliance, and operational speed across every stage of appliance recycling.
          </p>
        </Reveal>
        <div className="flex flex-col gap-[60px] w-[485px]">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="flex flex-col gap-[24px]"
              >
                <div className="bg-[#f3f3f3] h-[263px] overflow-hidden rounded-[3.2px] w-full">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    alt=""
                    src={s.img}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[20px] text-black tracking-[-0.8px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                    {s.title}
                  </p>
                  <p className="text-[16px] text-black/70 tracking-[-0.32px]">{s.desc}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
