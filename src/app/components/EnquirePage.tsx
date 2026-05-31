import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { CTAFooter } from "./CTAFooter";

const applianceTypes = ["Refrigerators", "Washers / Dryers", "Microwaves", "Dishwashers", "Mixed"];

function Field({
  label,
  value,
  onChange,
  type = "text",
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;
  return (
    <div className="relative w-full">
      <motion.label
        animate={{
          y: active ? -10 : 14,
          fontSize: active ? 12 : 16,
          color: active ? "#328000" : "#989898",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-[16px] pointer-events-none origin-left"
      >
        {label}
      </motion.label>
      {textarea ? (
        <textarea
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-b border-[#dedede] focus:border-[#328000] outline-none px-[16px] pt-[24px] pb-[12px] text-[16px] text-black resize-none h-[100px] transition-colors"
        />
      ) : (
        <input
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent border-b border-[#dedede] focus:border-[#328000] outline-none px-[16px] pt-[24px] pb-[12px] text-[16px] text-black transition-colors"
        />
      )}
    </div>
  );
}

function Select({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  const active = !!value;
  return (
    <div className="relative w-full">
      <motion.label
        animate={{
          y: active ? -10 : 14,
          fontSize: active ? 12 : 16,
          color: active ? "#328000" : "#989898",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-[16px] pointer-events-none origin-left"
      >
        Types of appliances
      </motion.label>
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full bg-transparent border-b border-[#dedede] hover:border-[#328000] outline-none px-[16px] pt-[24px] pb-[12px] text-[16px] text-black flex justify-between items-center transition-colors"
      >
        <span>{value}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }}>
          <ChevronDown size={18} />
        </motion.div>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute z-10 top-full left-0 right-0 mt-[4px] bg-white border border-[#e9e9e9] rounded-[8px] shadow-lg overflow-hidden"
        >
          {applianceTypes.map((t) => (
            <button
              key={t}
              onClick={() => {
                onChange(t);
                setOpen(false);
              }}
              className="w-full text-left px-[16px] py-[10px] text-[14px] hover:bg-[#f3f3f3] transition-colors"
            >
              {t}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export function EnquirePage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", appliance: "", volume: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-[160px] py-[80px]">
        <div className="flex items-start justify-between gap-[80px]">
          <Reveal className="w-[460px]">
            <div className="relative inline-grid">
              <div className="bg-[#ccfc7e] h-[44px] w-[194px] absolute left-0 top-px" />
              <p className="relative text-[36px] text-black" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Get in touch to request a demo, understand features, or see how Optivron fits your operational needs.
              </p>
            </div>
            <div className="mt-[40px] flex flex-col gap-[20px] text-[#5e5e5e]">
              <div className="flex items-center gap-[12px]">
                <span className="size-[8px] rounded-full bg-[#9ccc50]" />
                <span>Reply within 24 hours</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="size-[8px] rounded-full bg-[#9ccc50]" />
                <span>Personalized walkthrough</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <span className="size-[8px] rounded-full bg-[#9ccc50]" />
                <span>No commitment required</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="w-[560px]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#ccfc7e] rounded-[16px] p-[40px] text-center"
              >
                <p className="text-[28px] text-black mb-[8px]" style={{ fontWeight: 700 }}>Thank you!</p>
                <p className="text-[16px] text-[#3e2723]">We'll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-[28px]"
              >
                <Field label="Full Name" value={form.name} onChange={update("name")} />
                <div className="flex gap-[24px]">
                  <Field label="E-mail ID" value={form.email} onChange={update("email")} type="email" />
                  <Field label="Contact Number" value={form.phone} onChange={update("phone")} />
                </div>
                <div className="flex gap-[24px]">
                  <Select value={form.appliance} onChange={update("appliance")} />
                  <Field label="Volume" value={form.volume} onChange={update("volume")} />
                </div>
                <Field label="Message" value={form.message} onChange={update("message")} textarea />
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="bg-[#328000] flex gap-[8px] items-center justify-center p-[14px] rounded-[4px] text-white text-[16px] tracking-[-0.32px] cursor-pointer self-start px-[28px]"
                >
                  Submit
                  <ArrowRight size={20} color="white" />
                </motion.button>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
