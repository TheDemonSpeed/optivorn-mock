function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#ccfc7e] col-1 h-[44px] ml-0 mt-[51px] relative row-1 w-[332px]" />
      <p className="[word-break:break-word] col-1 font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[5px] mt-0 relative row-1 text-[36px] text-black w-[551.099px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A transparent program that turns appliance recycling into measurable financial value for retailers.
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Group />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#5e5e5e] text-[20px] tracking-[-0.72px] w-[556px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Retailers may earn a share of recovery value generated through Optivron’s certified recycling network, fully tracked, compliant, and audit-ready.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-black tracking-[-0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        How It Works
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#5e5e5e] tracking-[-0.72px] w-[485px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Appliances are processed by certified clients, materials are measured at batch level, and revenue is calculated transparently.
        <br aria-hidden />
        Retailers may receive a pre-agreed share with full traceability.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 whitespace-nowrap">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-black tracking-[-0.8px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Value Sources
      </p>
      <div className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#5e5e5e] tracking-[-0.72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] mb-0">
          • Scrap metal
          <br aria-hidden />• Refrigerant (Freon) resale
          <br aria-hidden />• Oil recovery
          <br aria-hidden />• Carbon credits
        </p>
        <p className="leading-[normal]">All recovery and data is shared with the clients.</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[normal] relative shrink-0">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-black tracking-[-0.8px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>{`Built for Transparency & Sustainability`}</p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#5e5e5e] tracking-[-0.72px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        • Location-level reporting
        <br aria-hidden />
        {`• Material & refrigerant logs`}
        <br aria-hidden />
        {`• Revenue analytics & ESG reporting`}
      </p>
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#5e5e5e] tracking-[-0.72px] w-[485px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Transforms recycling from a cost center into a performance-driven sustainability program, without operational burden on retailers.
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[60px] items-start justify-center relative shrink-0 text-[20px] w-[485px]">
      <Frame1 />
      <Frame />
      <Frame2 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[80px] items-start relative size-full">
      <Frame5 />
      <Frame4 />
    </div>
  );
}