import imgHero from "../../imports/Frame2085665558/3102f0383805a9efc3f5412df7d32bc4a9a38e66.png";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "../router";

export function Hero() {
  const { navigate } = useRouter();
  return (
    <section className="relative w-full h-[700px] overflow-hidden bg-white">
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        alt=""
        src={imgHero}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent h-[519px]" />
      <div className="relative max-w-[1440px] mx-auto px-[160px] pt-[53px] flex justify-between gap-[60px]">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-[40px] text-white tracking-[-0.8px] w-[507px]"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}
        >
          Smart Appliance Recycling Powered by AI, Automation & Real-Time Visibility
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex flex-col gap-[24px] items-end w-[367px]"
        >
          <p className="text-[16px] text-right text-white tracking-[-0.32px]">
            Optivron is an intelligent platform that automates appliance pickups, tracking, processing, compliance, and reporting in one system.
          </p>
          <motion.button
            onClick={() => navigate("enquire")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white flex gap-[8px] items-center justify-center p-[12px] rounded-[4px] text-black text-[16px] tracking-[-0.32px] cursor-pointer"
          >
            Enquire Now
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
