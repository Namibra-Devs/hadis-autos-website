import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import Button from "@components/ui/Button";
import { motion, useScroll, useTransform } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const PremiumStaggeredScrollHero = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);

  const sections = [
    {
      id: 1,
      bgImage: "/images/hero1.jpg",
      title: "Premium Canadian Vehicles",
      subtitle:
        "Source from our exclusive network of Canadian dealerships and private sellers.",
      ctaText: "Explore Inventory",
    },
    {
      id: 2,
      bgImage: "/images/hero2.webp",
      title: "Door-to-Door Delivery",
      subtitle:
        "Complete logistics solution from Canadian port to your doorstep in Ghana.",
      ctaText: "Calculate Shipping",
    },
    {
      id: 3,
      bgImage: "/images/hero3.jpg",
      title: "Transparent Pricing",
      subtitle:
        "All-inclusive pricing with no surprises. Know exactly what you're paying for.",
      ctaText: "View Price Example",
    },
  ];

  // Active section tracker (clean version)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.6 },
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // default duration for all animations
      once: true, // only animate once
      easing: "ease-out-cubic",
      offset: 50, // trigger offset
    });

    // refresh AOS when content changes (optional)
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="snap-y snap-mandatory">
        {sections.map((section, index) => {
          const ref = useRef(null);

          const { scrollYProgress } = useScroll({
            target: ref,
            offset: ["start end", "end start"],
          });

          // Subtle Tesla parallax ONLY (no scale / no opacity)
          const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

          return (
            <section
              key={section.id}
              ref={(el) => {
                ref.current = el;
                sectionRefs.current[index] = el;
              }}
              className="sticky top-0 h-screen snap-start flex items-center justify-center overflow-hidden"
              style={{ zIndex: index + 1 }}
            >
              {/* Parallax Background */}
              <motion.div
                style={{
                  y: bgY,
                  willChange: "transform",
                }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${section.bgImage})`,
                  }}
                />
              </motion.div>

              {/* Uniform Card with AOS */}
              <div
                className="relative container mx-auto px-4 lg:px-10 -mt-10 lg:-mt-60"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                data-aos-once="true"
              >
                <div className="max-w-2xl bg-red-700/80 p-8 rounded-xl shadow-2xl">
                  <h1
                    className="text-3xl lg:text-5xl font-bold text-white mb-6"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="400"
                    data-aos-once="true"
                  >
                    {section.title}
                  </h1>

                  <p
                    className="text-lg lg:text-xl text-white mb-8"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                    data-aos-once="true"
                  >
                    {section.subtitle}
                  </p>

                  <div
                    className="flex flex-wrap gap-4"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                    data-aos-once="true"
                  >
                    <Button
                      as="a"
                      href="tel:+1234567890"
                      className="group relative overflow-hidden
              text-gray-900
              px-6 py-3 lg:px-8 lg:py-4 rounded-lg font-semibold
              hover:shadow-2xl hover:scale-105 transition-all cursor-pointer"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Our Experts
                    </Button>

                    <Button
                      as={Link}
                      to={
                        index === 0
                          ? "/cars"
                          : index === 1
                            ? "/shipping"
                            : "/pricing"
                      }
                      className="
          group relative overflow-hidden
          bg-transparent border-2 border-white/30 text-white
          hover:bg-white/10 hover:border-white/60
          px-6 py-3 lg:px-8 lg:py-4 rounded-xl font-semibold
          transition-all hover:scale-105 cursor-pointer
        "
                    >
                      <span className="relative z-10 flex items-center">
                        {section.ctaText}
                        <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <div className="h-screen" />
      </div>
    </>
  );
};

export default PremiumStaggeredScrollHero;
