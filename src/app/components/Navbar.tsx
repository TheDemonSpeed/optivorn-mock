import imgLogo from "../../imports/Frame2085665617/012815452ebcdd16d5bb62fb66ae39f95fbd7e4b.png";
import { motion } from "motion/react";
import { useRouter, Route } from "../router";

const items: { label: string; route: Route }[] = [
  { label: "About", route: "about" },
  { label: "Features", route: "features" },
  { label: "Pricing", route: "pricing" },
  { label: "Blogs", route: "blogs" },
];

export function Navbar() {
  const { route, navigate } = useRouter();
  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="bg-[#ccfc7e] w-full text-center py-[12px] px-[120px]">
        <p className="text-[12px] tracking-[-0.225px] text-[#0f0f0f]">
          We've just launched new features to help you work smarter!{" "}
          <a className="underline text-[#0a0a0a]" href="#">
            Check them out now!
          </a>
        </p>
      </div>
      <nav className="bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center justify-between px-[160px] py-[24px] max-w-[1440px] mx-auto">
          <button
            onClick={() => navigate("home")}
            className="h-[37px] w-[137px] relative overflow-hidden cursor-pointer"
          >
            <img
              alt="Optivron"
              src={imgLogo}
              className="absolute h-[450.86%] left-[-11.79%] max-w-none top-[-175.24%] w-[123.35%]"
            />
          </button>
          <div className="flex gap-[16px] items-center">
            {items.map((it) => {
              const active = route === it.route;
              return (
                <motion.button
                  key={it.label}
                  onClick={() => navigate(it.route)}
                  whileHover={{ y: -2 }}
                  className={`relative text-[16px] tracking-[-0.32px] p-[8px] cursor-pointer ${active ? "text-[#328000]" : "text-[#676767] hover:text-[#328000]"}`}
                >
                  {it.label}
                  {active && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-[8px] right-[8px] -bottom-[2px] h-[2px] bg-[#9ccc50] rounded-full"
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
