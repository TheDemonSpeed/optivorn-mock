import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function EndToEnd() {
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
      <div className="flex items-start justify-between gap-[60px]">
        <Reveal>
          <div className="relative inline-grid">
            <div className="bg-[#ccfc7e] h-[40px] w-[138px] absolute left-0 top-[51px]" />
            <h2 className="relative text-[36px] tracking-[-0.8px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              End-to-End Control for<br />Modern Logistics
            </h2>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-[24px] items-start max-w-[474px]">
          <p className="text-[20px] leading-[31px] text-[#5e5e5e] tracking-[-0.72px]">
            A unified platform for retailers, recyclers, and logistics teams to process appliances efficiently, transparently, and profitably, with real-time visibility and complete operational control from pickup to processing.
          </p>
          <a className="flex gap-[8px] items-center text-[#328000] text-[16px] tracking-[-0.32px] cursor-pointer" style={{ fontWeight: 600 }}>
            View More
            <ArrowRight size={20} color="#328000" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
