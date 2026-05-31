import imgLogo from "../../imports/Frame2085665617/012815452ebcdd16d5bb62fb66ae39f95fbd7e4b.png";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { useRouter, Route } from "../router";

export function CTAFooter() {
  const { navigate } = useRouter();
  const navItem = (label: string, route: Route) => (
    <button key={label} onClick={() => navigate(route)} className="text-[#6b6b6b] hover:text-[#328000] transition-colors text-left cursor-pointer" style={{ fontWeight: 500 }}>
      {label}
    </button>
  );
  return (
    <div className="flex flex-col gap-[60px] w-full">
      <Reveal className="w-full">
        <div className="max-w-[1120px] mx-auto px-[160px] flex flex-col items-center gap-[28px] py-[40px]">
          <div className="flex flex-col gap-[20px] items-center text-center">
            <h2 className="text-[54px] text-[#1c1c1c] tracking-[-1.08px] leading-[60px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              Request a Demo
            </h2>
            <p className="text-[16px] leading-[23px] text-[#010d3e] tracking-[-0.16px]">
              See how Optivron simplifies appliance recycling operations<br />
              with real-time visibility, automation, and compliance-ready reporting.
            </p>
          </div>
          <motion.button
            onClick={() => navigate("enquire")}
            whileHover={{ scale: 1.05, gap: 12 }}
            className="flex gap-[8px] items-center text-[#328000] text-[16px] tracking-[-0.32px] cursor-pointer"
            style={{ fontWeight: 600 }}
          >
            Request Demo
            <ArrowRight size={20} color="#328000" />
          </motion.button>
        </div>
      </Reveal>

      <footer className="bg-[#f6f6f6] flex flex-col gap-[40px] pt-[40px] w-full">
        <div className="flex items-start justify-between px-[160px] max-w-[1440px] mx-auto w-full">
          <div className="flex flex-col gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <div className="h-[30px] w-[110px] relative overflow-hidden">
                <img alt="" src={imgLogo} className="absolute h-[450.86%] left-[-11.79%] max-w-none top-[-175.24%] w-[123.35%]" />
              </div>
              <p className="text-[16px] text-[#575757] w-[377px]">
                Intelligent recycling software for digitized, compliant, and scalable appliance operations.
              </p>
            </div>
            <div className="flex flex-col gap-[6px] text-[#575757] text-[16px]">
              <div className="flex gap-[6px] items-center"><MapPin size={20} color="black" /> Based in California, serving nationwide</div>
              <div className="flex gap-[6px] items-center"><Phone size={20} color="black" /> (341) 254-9666</div>
              <div className="flex gap-[6px] items-center"><Mail size={20} color="black" /> support@optivron.com</div>
            </div>
          </div>
          <div className="flex gap-[48px] text-[14px]">
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#2b2b2b]" style={{ fontWeight: 600 }}>Company</p>
              {["Home", "About", "Features", "Pricing", "Contact"].map((x) => (
                <p key={x} className="text-[#6b6b6b]" style={{ fontWeight: 500 }}>{x}</p>
              ))}
            </div>
            <div className="flex flex-col gap-[16px]">
              <p className="text-[#2b2b2b]" style={{ fontWeight: 600 }}>Legal</p>
              {["Privacy", "Terms", "Security"].map((x) => (
                <p key={x} className="text-[#6b6b6b]" style={{ fontWeight: 500 }}>{x}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-[#ccfc7e] flex items-center justify-center px-[120px] py-[24px]">
          <p className="text-[#3e2723] text-[14px] tracking-[-0.28px]">© 2026 Optivron. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
