import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const items = [
  {
    quote: "Optivron has significantly improved visibility across our pickup and processing operations. The real-time tracking and verified data have reduced manual follow-ups and made compliance reporting far more reliable.",
    author: "-Operations Manager, Viking Commodity INC",
  },
  {
    quote: "The automation has cut our manual reporting time dramatically, and the audit-ready logs give us total peace of mind during compliance reviews.",
    author: "-Compliance Lead, PLS Recycling",
  },
  {
    quote: "Real-time GPS visibility into every trailer changed how we plan pickups. Our drivers and floor teams are finally on the same page.",
    author: "-Logistics Director, National Retailer",
  },
  {
    quote: "From refrigerant evacuation to revenue analytics, every step is now traceable. Optivron made sustainability measurable for us.",
    author: "-Sustainability Manager, Appliance Group",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(1);
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px] flex flex-col gap-[40px] items-center">
      <div className="relative inline-grid">
        <div className="bg-[#ccfc7e] h-[44px] w-[69px] absolute left-[207px] top-[50px]" />
        <h2 className="relative text-[36px] text-black text-center w-[345px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
          Our Clients<br />Have To Say
        </h2>
      </div>
      <div className="bg-[#fafafa] border border-[#e9e9e9] rounded-[16px] w-full min-h-[260px] flex items-center justify-center p-[24px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-[24px] items-center text-center text-[#5e5e5e]"
          >
            <p className="text-[24px] tracking-[-0.48px] max-w-[941px]">{items[active].quote}</p>
            <p className="text-[20px] tracking-[-0.4px] leading-[35px]" style={{ fontWeight: 600 }}>{items[active].author}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-[12px]">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`rounded-full transition-all ${active === i ? "bg-black w-[14px] h-[14px]" : "bg-[#d9d9d9] w-[10px] h-[10px]"}`}
          />
        ))}
      </div>
    </section>
  );
}
