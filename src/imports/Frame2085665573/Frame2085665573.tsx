import imgFinalLogo03Dec20251 from "./012815452ebcdd16d5bb62fb66ae39f95fbd7e4b.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['DM_Sans:Medium',sans-serif] font-medium gap-[2px] items-center leading-[0] relative shrink-0 text-[12px] text-center tracking-[-0.225px] w-full whitespace-nowrap">
      <div className="flex flex-col justify-center relative shrink-0 text-[#0f0f0f]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[16.875px]">{`We’ve just launched new features to help you work smarter! `}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#0a0a0a]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="[text-underline-position:from-font] decoration-from-font decoration-solid leading-[16.875px] underline">Check them out now!</p>
      </div>
    </div>
  );
}

function Desktop() {
  return (
    <div className="bg-[#ccfc7e] relative shrink-0 w-full" data-name="Desktop">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[120px] py-[12px] relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">About</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Features</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Pricing</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#676767] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Blogs</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
      <Frame3 />
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function NavDesktop() {
  return (
    <div className="bg-white h-[86px] relative shrink-0 w-full" data-name="Nav - Desktop">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[160px] py-[24px] relative size-full">
          <div className="h-[37.481px] relative shrink-0 w-[137px]" data-name="Final_logo_03Dec2025 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[450.86%] left-[-11.79%] max-w-none top-[-175.24%] w-[123.35%]" src={imgFinalLogo03Dec20251} />
            </div>
          </div>
          <Frame1 />
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Desktop />
      <NavDesktop />
    </div>
  );
}