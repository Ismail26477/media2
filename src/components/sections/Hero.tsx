import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = memo(() => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center overflow-hidden bg-black min-h-screen md:min-h-screen"
      style={{
        backgroundImage: "url('/hero-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="container relative text-center px-4 sm:px-6 max-w-5xl mx-auto flex flex-col justify-center w-full gap-6 sm:gap-8 py-32 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-4 sm:mb-10"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-300 uppercase tracking-[0.4em] font-light letter-spacing leading-tight">
            Film | Sound | Music
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 bg-primary text-black text-xs uppercase tracking-[0.3em] font-semibold hover:bg-opacity-90 transition-all hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] whitespace-nowrap"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 border border-white/20 text-white text-xs uppercase tracking-[0.3em] font-semibold hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      <Link
        to="/about"
        aria-label="Go to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary"
      >
        <span className="text-[10px] uppercase tracking-[0.4em]">Explore</span>
        <ArrowDown size={16} className="animate-scroll-bounce" />
      </Link>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
