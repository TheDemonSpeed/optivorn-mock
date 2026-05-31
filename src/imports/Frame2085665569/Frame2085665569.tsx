function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="bg-[#ccfc7e] col-1 h-[44px] ml-[207px] mt-[50px] relative row-1 w-[69px]" />
      <div className="[word-break:break-word] col-1 font-['DM_Sans:Bold',sans-serif] font-bold ml-0 mt-0 relative row-1 text-[36px] text-black text-center w-[345px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] mb-0">Our Clients</p>
        <p className="leading-[normal]">Have To Say</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#fafafa] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center p-[24px] relative size-full text-[#5e5e5e] text-center">
          <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[24px] tracking-[-0.48px] w-[941px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Optivron has significantly improved visibility across our pickup and processing operations. The real-time tracking and verified data have reduced manual follow-ups and made compliance reporting far more reliable.
          </p>
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[35px] relative shrink-0 text-[20px] tracking-[-0.4px] w-[941px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            -Operations Manager, Viking Commodity INC
          </p>
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[10.038px] relative shrink-0 w-[61px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 10.038">
        <g id="Frame 2085665561">
          <circle cx="5.01899" cy="5.01899" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10096" r="5.01899" />
          <circle cx="22.0063" cy="5.01904" fill="var(--fill-0, black)" id="Ellipse 10097" r="5.01899" />
          <circle cx="38.9937" cy="5.01904" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10098" r="5.01899" />
          <circle cx="55.981" cy="5.01904" fill="var(--fill-0, #D9D9D9)" id="Ellipse 10099" r="5.01899" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <Group />
      <Frame />
      <Frame1 />
    </div>
  );
}