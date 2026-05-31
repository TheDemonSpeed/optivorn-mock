import { motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { CTAFooter } from "./CTAFooter";
import { useRouter } from "../router";

const plans = [
  {
    price: 24,
    period: "30 days",
    name: "BASIC PLAN",
    desc: "Essential tools to manage appliances.",
    features: ["10 vendor pickup requests / month", "Manual driver assignment", "Standard reporting", "Priority support (Email)"],
    featured: false,
  },
  {
    price: 79,
    period: "90 days",
    name: "PRO PLAN",
    desc: "Recommended for Growing Businesses",
    features: ["Everything in Basic Plan", "50 vendor pickup requests / month", "Enhanced reporting", "Priority support (Email + Call)"],
    featured: true,
  },
  {
    price: 199,
    period: "120 days",
    name: "ENTERPRISE PLAN",
    desc: "Recommended for Growing Businesses",
    features: ["Everything in Pro Plan", "Unlimited vendor pickup requests", "Enhanced Pro™ reporting", "24x7 support"],
    featured: false,
  },
];

export function PricingPage() {
  const { navigate } = useRouter();
  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-[160px] pt-[80px] pb-[40px]">
        <div className="flex items-start justify-between gap-[80px]">
          <Reveal>
            <div className="relative inline-grid">
              <div className="bg-[#ccfc7e] h-[44px] w-[180px] absolute left-0 top-[3px]" />
              <h1 className="relative text-[48px] tracking-[-0.96px] text-black leading-[1.15]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Pricing That Scales<br />With Your Operations
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="w-[340px] pt-[20px]">
            <p className="text-[16px] text-[#5e5e5e] tracking-[-0.32px]">
              Choose a model that fits your facility size, operational volume, and expansion plans, without locking you into rigid plans.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[160px] pb-[80px]">
        <div className="grid grid-cols-3 gap-[24px]">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className={`relative rounded-[16px] p-[28px] flex flex-col gap-[20px] border transition-all h-full ${
                  p.featured
                    ? "bg-[#0f0f0f] text-white border-transparent shadow-2xl"
                    : "bg-white border-[#e9e9e9] hover:border-[#9ccc50]"
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-[12px] left-[28px] bg-[#ccfc7e] text-[#0f0f0f] text-[12px] px-[10px] py-[4px] rounded-full" style={{ fontWeight: 600 }}>
                    Most Popular
                  </div>
                )}
                <div className="flex items-baseline gap-[10px]">
                  <span className="text-[42px]" style={{ fontWeight: 700 }}>$ {p.price}</span>
                  <span className={`text-[14px] ${p.featured ? "text-white/60" : "text-[#5e5e5e]"}`}>{p.period}</span>
                </div>
                <div className="flex flex-col gap-[6px]">
                  <p className="text-[16px] tracking-[-0.32px]" style={{ fontWeight: 700 }}>{p.name}</p>
                  <p className={`text-[14px] ${p.featured ? "text-white/70" : "text-[#5e5e5e]"}`}>{p.desc}</p>
                </div>
                <div className="flex flex-col gap-[10px] flex-1">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-[10px] text-[14px]">
                      <div className={`size-[18px] rounded-full flex items-center justify-center shrink-0 ${p.featured ? "bg-[#9ccc50] text-black" : "bg-black text-white"}`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={p.featured ? "text-white/90" : "text-[#3a3a3a]"}>{f}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 4 }}
                  onClick={() => navigate("enquire")}
                  className={`flex items-center gap-[8px] text-[16px] cursor-pointer mt-[8px] ${p.featured ? "text-[#ccfc7e]" : "text-[#328000]"}`}
                  style={{ fontWeight: 600 }}
                >
                  Buy Now
                  <ArrowRight size={18} />
                </motion.button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
