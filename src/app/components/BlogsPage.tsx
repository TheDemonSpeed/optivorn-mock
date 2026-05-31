import imgBlog1 from "../../imports/Blogs/8bf2f4bf152b0eae9898188f1b188413106beae6.png";
import imgBlog2 from "../../imports/Blogs/7e8e1152a49b83c8e94f98a3fb8ddd2cdfbe3504.png";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CTAFooter } from "./CTAFooter";

const posts = [
  {
    img: imgBlog1,
    tag: "Operations",
    date: "May 12, 2026",
    title: "Digitizing Appliance Recycling Operations",
    desc: "Recycling facilities are moving from manual tracking to digital systems that streamline pickups, floor processing, and compliance reporting for better efficiency.",
  },
  {
    img: imgBlog2,
    tag: "Compliance",
    date: "Apr 28, 2026",
    title: "Why Refrigerant Recovery Compliance Matters",
    desc: "Proper refrigerant evacuation is essential for environmental safety. Digital tracking helps facilities maintain accurate records and meet regulatory standards.",
  },
];

export function BlogsPage() {
  return (
    <div className="bg-white w-full">
      <section className="max-w-[1440px] mx-auto px-[160px] pt-[80px] pb-[40px]">
        <div className="flex items-start justify-between gap-[80px]">
          <Reveal>
            <div className="relative inline-grid">
              <div className="bg-[#ccfc7e] h-[54px] w-[289px] absolute left-0 top-0" />
              <h1 className="relative text-[40px] text-black w-[493px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
                Blogs &amp; Insights for Modern Recycling Facilities
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="w-[402px] pt-[20px]">
            <p className="text-[20px] tracking-[-0.72px] text-[#5e5e5e]">
              Discover ideas, best practices, and industry insights on improving appliance pickup, processing efficiency, refrigerant handling, and compliance management.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-[160px] pb-[80px]">
        <div className="grid grid-cols-2 gap-[60px]">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="flex flex-col gap-[24px] group cursor-pointer"
              >
                <div className="bg-[#f3f3f3] h-[300px] overflow-hidden rounded-[8px] relative">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.7 }}
                    alt=""
                    src={p.img}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-[16px] left-[16px] flex gap-[8px]">
                    <span className="bg-white/90 backdrop-blur text-[12px] px-[10px] py-[4px] rounded-full text-[#0f0f0f]" style={{ fontWeight: 600 }}>
                      {p.tag}
                    </span>
                    <span className="bg-black/70 backdrop-blur text-[12px] px-[10px] py-[4px] rounded-full text-white">
                      {p.date}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <h3 className="text-[22px] text-black tracking-[-0.8px] group-hover:text-[#328000] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                    {p.title}
                  </h3>
                  <p className="text-[16px] text-black/70 tracking-[-0.32px]">{p.desc}</p>
                </div>
                <motion.div whileHover={{ x: 6 }} className="flex items-center gap-[8px] text-[#328000] text-[16px]" style={{ fontWeight: 600 }}>
                  Read Blog
                  <ArrowRight size={18} color="#328000" />
                </motion.div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
