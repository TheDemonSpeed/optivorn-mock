import { Reveal } from "./Reveal";

export function Transparency() {
  return (
    <section className="max-w-[1440px] mx-auto px-[160px] py-[60px]">
      <div className="flex gap-[80px] items-start">
        <Reveal className="flex flex-col gap-[24px]">
          <div className="relative inline-grid">
            <div className="bg-[#ccfc7e] h-[44px] w-[332px] absolute left-0 top-[51px]" />
            <p className="relative text-[36px] text-black w-[551px]" style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700 }}>
              A transparent program that turns appliance recycling into measurable financial value for retailers.
            </p>
          </div>
          <p className="text-[20px] text-[#5e5e5e] tracking-[-0.72px] w-[556px]">
            Retailers may earn a share of recovery value generated through Optivron's certified recycling network, fully tracked, compliant, and audit-ready.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="flex flex-col gap-[60px] w-[485px] text-[20px]">
          <div className="flex flex-col gap-[16px]">
            <p className="text-black tracking-[-0.8px]" style={{ fontWeight: 600 }}>How It Works</p>
            <p className="text-[#5e5e5e] tracking-[-0.72px]">
              Appliances are processed by certified clients, materials are measured at batch level, and revenue is calculated transparently.
              <br />
              Retailers may receive a pre-agreed share with full traceability.
            </p>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-black tracking-[-0.8px]" style={{ fontWeight: 600 }}>Value Sources</p>
            <div className="text-[#5e5e5e] tracking-[-0.72px]">
              <p>• Scrap metal</p>
              <p>• Refrigerant (Freon) resale</p>
              <p>• Oil recovery</p>
              <p>• Carbon credits</p>
              <p>All recovery and data is shared with the clients.</p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <p className="text-black tracking-[-0.8px]" style={{ fontWeight: 600 }}>Built for Transparency & Sustainability</p>
            <p className="text-[#5e5e5e] tracking-[-0.72px]">
              • Location-level reporting
              <br />• Material & refrigerant logs
              <br />• Revenue analytics & ESG reporting
            </p>
            <p className="text-[#5e5e5e] tracking-[-0.72px]">
              Transforms recycling from a cost center into a performance-driven sustainability program, without operational burden on retailers.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
