import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export type AccItem = { title: string; body: string; number?: string };

export function Accordion({ items, openIndex = 0 }: { items: AccItem[]; openIndex?: number }) {
  const [open, setOpen] = useState<number | null>(openIndex);
  return (
    <div className="w-full flex flex-col">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="border-b border-[#d9d9d9]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-[18px] text-left cursor-pointer group"
            >
              <div className="flex gap-[24px] items-center">
                {it.number && (
                  <span className="text-[20px] tracking-[-0.72px] text-[#5e5e5e]">{it.number}</span>
                )}
                <span
                  className={`text-[20px] tracking-[-0.72px] transition-colors ${isOpen ? "text-[#6bc152]" : "text-[#5e5e5e] group-hover:text-black"}`}
                  style={{ fontWeight: 600 }}
                >
                  {it.title}
                </span>
              </div>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={20} />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-[18px] pl-[44px] pr-[28px] text-[20px] tracking-[-0.72px] text-[#5e5e5e]">
                    {it.body}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
