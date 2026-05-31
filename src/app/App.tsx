import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EndToEnd } from "./components/EndToEnd";
import { HowItWorks } from "./components/HowItWorks";
import { Partnerships } from "./components/Partnerships";
import { Transparency } from "./components/Transparency";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Clients } from "./components/Clients";
import { CTAFooter } from "./components/CTAFooter";
import { AboutPage } from "./components/AboutPage";
import { FeaturesPage } from "./components/FeaturesPage";
import { PricingPage } from "./components/PricingPage";
import { BlogsPage } from "./components/BlogsPage";
import { EnquirePage } from "./components/EnquirePage";
import {
  motion,
  useScroll,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { RouterProvider, useRouter } from "./router";

function HomePage() {
  return (
    <>
      <Hero />
      <EndToEnd />
      <HowItWorks />
      <Partnerships />
      <Transparency />
      <Stats />
      <Testimonials />
      <Clients />
      <CTAFooter />
    </>
  );
}

function Pages() {
  const { route } = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={route}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {route === "home" && <HomePage />}
        {route === "about" && <AboutPage />}
        {route === "features" && <FeaturesPage />}
        {route === "pricing" && <PricingPage />}
        {route === "blogs" && <BlogsPage />}
        {route === "enquire" && <EnquirePage />}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <RouterProvider>
      <div className="bg-white w-full min-h-screen overflow-x-hidden">
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[3px] bg-[#9ccc50] origin-left z-[60]"
        />
        <Navbar />
        <Pages />
      </div>
    </RouterProvider>
  );
}