import svgPaths from "./svg-mee1s0zffq";
import imgFreepikRealisticAerialangledViewOfModernEwasteLogis779101 from "./3102f0383805a9efc3f5412df7d32bc4a9a38e66.png";

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ArrowRight">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ArrowRight">
          <path d={svgPaths.p29c16400} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex gap-[8px] items-center justify-center p-[12px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="[word-break:break-word] flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-black tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal]">Enquire Now</p>
      </div>
      <ArrowRight />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-end left-[913px] top-[53px] w-[367px]">
      <p className="[word-break:break-word] font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] min-w-full relative shrink-0 text-[16px] text-right text-white tracking-[-0.32px] w-[min-content]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Optivron is an intelligent platform that automates appliance pickups, tracking, processing, compliance, and reporting in one system.
      </p>
      <Button />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <div className="-translate-x-1/2 absolute h-[1014px] left-[calc(50%+0.5px)] top-[-109px] w-[1483px]" data-name="freepik__realistic-aerialangled-view-of-modern-ewaste-logis__77910 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFreepikRealisticAerialangledViewOfModernEwasteLogis779101} />
      </div>
      <div className="absolute bg-gradient-to-b from-[42.871%] from-[rgba(0,0,0,0.79)] h-[519px] left-0 to-[rgba(0,0,0,0)] top-[-23px] w-[1440px]" />
      <p className="[word-break:break-word] absolute font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] left-[160px] text-[40px] text-white top-[53px] tracking-[-0.8px] w-[507px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Smart Appliance Recycling Powered by AI, Automation & Real-Time Visibility`}</p>
      <Frame1 />
    </div>
  );
}