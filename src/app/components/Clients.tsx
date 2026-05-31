import imgAcme from "../../imports/Frame2085665571/68390137fa798a89850dfbc5b024cd65dd796bd0.png";
import imgQuantum from "../../imports/Frame2085665571/824f01bd4dbadbf345d6eb1f0394eec73c693cce.png";
import imgEcho from "../../imports/Frame2085665571/6c1dfc5e3fea0c75f87b551289232f0bc6d1d3d7.png";
import imgCelestia from "../../imports/Frame2085665571/54600a66c618f1e2437090a8d332ed71a06f2a87.png";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const logos = [
  { src: imgAcme, w: 192 },
  { src: imgQuantum, w: 162 },
  { src: imgEcho, w: 239 },
  { src: imgCelestia, w: 172 },
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const items = [...logos, ...logos];
  return (
    <div className="overflow-hidden w-full">
      <motion.div
        className="flex gap-[80px] items-center w-max"
        animate={{ x: reverse ? [0, -1400] : [-1400, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {items.map((l, i) => (
          <img
            key={i}
            src={l.src}
            alt=""
            style={{ width: l.w, height: 42 }}
            className="opacity-60 hover:opacity-100 transition-opacity object-contain shrink-0"
          />
        ))}
      </motion.div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px] flex flex-col gap-[50px] items-center">
      <Reveal>
        <div className="relative inline-grid">
          <div className="bg-[#ccfc7e] h-[49px] w-[197px] absolute left-0 top-[45px]" />
          <h2 className="relative text-[36px] text-black text-center" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
            Proud To<br />Work With
          </h2>
        </div>
      </Reveal>
      <div className="flex flex-col gap-[40px] w-full">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
