import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink =
    "https://wa.me/8801714076190?text=Hello%20A.A.%20Engineering%2C%20I%20am%20interested%20in%20your%20services";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-[#0a2540] to-[#14375b] text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')`,
          filter: "brightness(0.6) contrast(1.1)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(0, 102, 204, 0.15) 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0, 102, 204, 0.15) 21px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative max-w-5xl text-center z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Modern Welcome Message */}
        <div className="mb-4">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-100 tracking-wide"
          >
            👋Assalamu Alaikum & Welcome to{" "}
            <span className="text-[#7de1ff] font-bold">A.A. Engineering & Constructions</span>
          </motion.p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Let the{" "}
          <span className="text-[#00ccff] underline underline-offset-8 decoration-4">
            Future of Structure
          </span>{" "}
          <br />
          <span className="text-[#7de1ff]">Be Risk-Free</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl max-w-xl mx-auto text-blue-200 mb-12 leading-relaxed font-medium">
          Trusted engineering and construction services delivering safety, quality, and structural excellence across Bangladesh.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          {/* Start Project Button */}
          <Button
            onClick={() => scrollTo("#contact")}
            className="inline-flex items-center justify-center gap-2 bg-[#00aaff] hover:bg-[#008ecc] text-white px-10 py-4 text-xl font-semibold rounded-full shadow-lg transition-all h-[64px]"
            aria-label="Start Your Project Now"
          >
            🚧 Start Your Project Now
          </Button>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white px-10 py-4 text-xl font-semibold rounded-full shadow-lg transition-all h-[64px]"
            style={{ minWidth: "300px", textAlign: "center" }}
            aria-label="Text On WhatsApp"
          >
            <MessageCircle size={22} strokeWidth={2.5} />
            Text On WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}