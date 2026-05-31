import svgPaths from "./svg-7t9lb8tp9x";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#ccfc7e] col-1 h-[40px] ml-0 mt-[51px] relative row-1 w-[138px]" />
      <div className="[word-break:break-word] col-1 font-['DM_Sans:Bold',sans-serif] font-bold ml-[5px] mt-0 relative row-1 text-[36px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] mb-0 whitespace-pre">{`End-to-End Control for `}</p>
        <p className="leading-[normal] whitespace-pre">Modern Logistics</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d={svgPaths.p29c16400} fill="var(--fill-0, #328000)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[31px] relative shrink-0 text-[#5e5e5e] text-[20px] tracking-[-0.72px] w-[474px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        A unified platform for retailers, recyclers, and logistics teams to process appliances efficiently, transparently, and profitably, with real-time visibility and complete operational control from pickup to processing.
      </p>
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#328000] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">View More</p>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative size-full">
      <Group />
      <Frame />
    </div>
  );
}