import imgRect from "../../imports/Frame2085665843/dc06ea2a702ec3b3678e47504708b2276e58eac1.png";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

export function Partnerships() {
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
      <div className="flex gap-[80px] items-center">
        <Reveal className="w-[555px]">
          <div className="relative inline-grid mb-[30px]">
            <div className="bg-[#ccfc7e] h-[50px] w-[319px] absolute left-0 top-0" />
            <p className="relative text-[36px] text-black w-[551px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              Strategic recycling partnerships for compliant, high-volume appliance processing
            </p>
          </div>
          <motion.div
            initial={{ rotate: -2 }}
            whileInView={{ rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[541px] w-[555px]"
          >
            <div className="bg-[#ccfc7e] absolute top-[189px] left-px h-[383px] w-[554px] rounded-md" />
            <div className="absolute left-[70px] top-0 h-[541px] w-[420px] overflow-hidden rounded-lg shadow-xl">
              <img src={imgRect} alt="" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </Reveal>
        <Reveal delay={0.1} className="w-[485px]">
          <div className="text-[20px] leading-[30px] text-[#5e5e5e] tracking-[-0.72px] space-y-[18px]">
            <p>Viking Commodity Inc. and PLS Recycling are clients of Optivron and deliver safe, scalable, and regulation-compliant appliance recycling operations.</p>
            <p>Through advanced refrigerant evacuation systems, we ensure EPA-compliant Freon recovery, zero atmospheric discharge, accurate gas measurement, and real-time monitoring for every unit processed.</p>
            <p>Optivron also provides full cradle-to-grave tracking of hazardous by-products generated during appliance processing—including refrigerants (Freon), compressor oils, and recovered gases—ensuring complete environmental accountability, regulatory compliance, and documented chain-of-custody for every material stream.</p>
            <p>From appliance intake to controlled extraction and certified storage, each step is tracked and documented, reducing emissions, ensuring environmental safety, and maintaining complete audit readiness across operations.</p>
            <p>This cradle-to-grave hazardous material tracking creates a regulatory compliance layer that most recycling facilities cannot achieve, positioning Optivron as a trusted infrastructure partner for large-scale appliance recycling networks.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
