import svgPaths from "./svg-pff3f80puu";
import imgRectangle34625296 from "./dc06ea2a702ec3b3678e47504708b2276e58eac1.png";
import { imgRectangle34625295 } from "./svg-vkhwt";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#ccfc7e] col-1 h-[50px] ml-0 mt-0 relative row-1 w-[319px]" />
      <p className="[word-break:break-word] col-1 font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] ml-[3.9px] mt-0 relative row-1 text-[36px] text-black w-[551.099px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Strategic recycling partnerships for compliant, high-volume appliance processing
      </p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[59.5px] mt-0 place-items-start relative row-1" data-name="Mask group">
      <div className="col-1 flex h-[541px] items-center justify-center ml-[10px] mt-[-2px] relative row-1 w-[429px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[541px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10px_2px] mask-size-[353px_530px] relative w-[429px]" style={{ maskImage: `url('${imgRectangle34625295}')` }}>
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[261.71%] left-[-144.18%] max-w-none top-[-120.89%] w-[438.97%]" src={imgRectangle34625296} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return <div className="col-1 ml-[446px] mt-[167px] relative row-1 size-[100px]" />;
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="bg-[#ccfc7e] col-1 h-[383px] ml-px mt-[189px] relative row-1 w-[554px]" />
      <MaskGroup />
      <div className="col-1 h-[72.5px] ml-0 mt-[498.5px] relative row-1 w-[453.858px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 453.858 72.5">
          <path d={svgPaths.pe388300} fill="var(--fill-0, #71913D)" id="Vector 2" />
        </svg>
      </div>
      <div className="col-1 h-[39px] ml-[108.5px] mt-[497px] relative row-1 w-[306.5px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 306.5 39">
          <path d={svgPaths.p31974700} fill="var(--fill-0, #4A6124)" id="Vector 3" />
        </svg>
      </div>
      <Frame2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[555px]">
      <Group />
      <Group1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[80px] items-center leading-[0] relative size-full">
      <Frame />
      <div className="[word-break:break-word] font-['DM_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#5e5e5e] text-[20px] tracking-[-0.72px] w-[485px] whitespace-pre-wrap" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[normal] mb-0">Viking Commodity Inc. and PLS Recycling are clients of Optivron and deliver safe, scalable, and regulation-compliant appliance recycling operations.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Through advanced refrigerant evacuation systems, we ensure EPA-compliant Freon recovery, zero atmospheric discharge, accurate gas measurement, and real-time monitoring for every unit processed.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">Optivron also provides full cradle-to-grave tracking of hazardous by-products generated during appliance processing—including refrigerants (Freon), compressor oils, and recovered gases—ensuring complete environmental accountability, regulatory compliance, and documented chain-of-custody for every material stream.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">From appliance intake to controlled extraction and certified storage, each step is tracked and documented, reducing emissions, ensuring environmental safety, and maintaining complete audit readiness across operations.</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">This cradle-to-grave hazardous material tracking creates a regulatory compliance layer that most recycling facilities cannot achieve, positioning Optivron as a trusted infrastructure partner for large-scale appliance recycling networks.</p>
      </div>
    </div>
  );
}