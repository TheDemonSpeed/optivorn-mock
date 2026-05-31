import svgPaths from "./svg-pf1duoiljs";
import imgFinalLogo03Dec20251 from "./012815452ebcdd16d5bb62fb66ae39f95fbd7e4b.png";

function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[20px] items-center relative shrink-0 whitespace-nowrap">
      <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[60px] relative shrink-0 text-[#1c1c1c] text-[54px] tracking-[-1.08px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Request a Demo
      </p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#010d3e] text-[16px] text-center tracking-[-0.16px]">
        <p className="leading-[23px] mb-0 whitespace-pre">{`See how Optivron simplifies appliance recycling operations `}</p>
        <p className="leading-[23px] whitespace-pre">with real-time visibility, automation, and compliance-ready reporting.</p>
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

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0">
      <Frame />
      <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Button">
        <div className="[word-break:break-word] flex flex-col font-['DM_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#328000] text-[16px] tracking-[-0.32px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          <p className="leading-[normal]">Request Demo</p>
        </div>
        <ArrowRight />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[160px] relative shrink-0 w-[1120px]">
      <Frame1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <div className="h-[30.094px] relative shrink-0 w-[110px]" data-name="Final_logo_03Dec2025 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[450.86%] left-[-11.79%] max-w-none top-[-175.24%] w-[123.35%]" src={imgFinalLogo03Dec20251} />
        </div>
      </div>
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#575757] text-[16px] w-[377px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Intelligent recycling software for digitized, compliant, and scalable appliance operations.
      </p>
    </div>
  );
}

function MapPin() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="MapPin">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="MapPin">
          <path d={svgPaths.p2605d880} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <MapPin />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#575757] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        Based in California, serving nationwide
      </p>
    </div>
  );
}

function PhoneCall() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="PhoneCall">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="PhoneCall">
          <path d={svgPaths.p1ff1e000} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <PhoneCall />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#575757] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        (341) 254-9666
      </p>
    </div>
  );
}

function Envelope() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Envelope">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Envelope">
          <path d={svgPaths.p2d99ef80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0">
      <Envelope />
      <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#575757] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        support@optivron.com
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0">
      <Frame7 />
      <Frame6 />
    </div>
  );
}

function Company() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[71px]" data-name="Company">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2b2b2b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Company
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Home
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        About
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Features
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Pricing
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact
      </p>
    </div>
  );
}

function Security() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[59px]" data-name="Security">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#2b2b2b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Legal
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Privacy
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Terms
      </p>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium relative shrink-0 text-[#6b6b6b]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Security
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[48px] items-start leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap">
      <Company />
      <Security />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex items-start justify-between px-[160px] relative size-full">
        <Frame4 />
        <Frame3 />
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ccfc7e] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[120px] py-[24px] relative size-full">
          <p className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3e2723] text-[14px] tracking-[-0.28px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
            © 2026 Optivron. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function FooterL() {
  return (
    <div className="bg-[#f6f6f6] content-stretch flex flex-col gap-[40px] items-start pt-[40px] relative shrink-0 w-[1440px]" data-name="Footer-L">
      <Frame12 />
      <Frame11 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[60px] items-center relative size-full">
      <Frame2 />
      <FooterL />
    </div>
  );
}