import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const stats = [
  { value: 100, label: "Data Accuracy", desc: "Appliance counts, refrigerant quantities, and evacuation logs are captured digitally to eliminate manual errors and revenue leakage." },
  { value: 40, label: "Faster Floor Operations", desc: "Every action, from pickup to evacuation, is digitally recorded, time-stamped, and user-verified." },
  { value: 100, label: "Real time GPS monitoring", desc: "Live GPS tracking for trailers, driver activity, and facility status across all locations." },
  { value: 99, label: "Accurate Appliance Count", desc: "Digitally capture and verify appliance counts at intake with automated workflows, reducing errors and processing time." },
];

export function Stats() {
  return (
    <section className="bg-[#f8f8f8] max-w-[1440px] mx-auto px-[40px] py-[60px] flex flex-col gap-[32px]">
      <h2 className="text-[36px] text-[#0f0f0f] tracking-[-0.72px] leading-[39px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
        Built for scale.<br />Proven in operations.
      </h2>
      <div className="flex items-stretch justify-between gap-[24px]">
        {stats.map((s, i) => (
          <div key={s.label} className="flex items-stretch flex-1 gap-[24px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col gap-[24px] flex-1"
            >
              <div className="flex flex-col gap-[4px]">
                <div className="flex gap-[8px] items-start">
                  <span className="text-[48px] text-[#0f0f0f] tracking-[-2px] leading-none" style={{ fontWeight: 600 }}>
                    <Counter to={s.value} />
                  </span>
                  <span className="text-[42px] text-[#9ccc50] leading-[42px] tracking-[-1.68px]">%</span>
                </div>
                <p className="text-[16px] text-black tracking-[-0.64px]" style={{ fontWeight: 600 }}>{s.label}</p>
              </div>
              <p className="text-[14px] text-[#0f0f0f]/80 tracking-[-0.28px]">{s.desc}</p>
            </motion.div>
            {i < stats.length - 1 && <div className="w-px bg-[#d9d9d9] self-stretch" />}
          </div>
        ))}
      </div>
    </section>
  );
}
