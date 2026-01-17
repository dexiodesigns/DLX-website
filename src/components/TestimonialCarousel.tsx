import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import People1 from "../assets/peopleImages/people1.png";
import People2 from "../assets/peopleImages/people2.png";
import People3 from "../assets/peopleImages/people3.jpg";
import People4 from "../assets/peopleImages/people4.png";
import People5 from "../assets/peopleImages/people5.png";

export const testimonials = [
  {
    id: 1,
    name: "Shashank Mahesh",
    role: "Head of Business Development, Miniture",
    content:
      "Dexio Designs exceeded our expectations in bringing our parenting app vision to life. As a small startup, conveying our story effectively was paramount. Their ability to merge functionality with aesthetics resulted in a sleek, cutting-edge interface that perfectly encapsulates our app's purpose and story. They consistently delivered high-quality work, with special thanks to Mani & Ganga for their dedicated late-hour sessions. Their quick turnaround made it feel like they were part of our in-house team. Excited for our continued partnership!",
    image: People1
  },
  {
    id: 2,
    name: "Mani Doraisamy",
    role: "Co-Founder of Neartail",
    content:
      "As developers with limited knowledge of UX, we found fantastic partners in Karthik and his team. They did more than just design our user experience; they really got to know our business to better engage our customers. We trusted them to create our product pages and explainer videos because they truly understand our products. To us, they are more than just a vendor; they are an essential part of our team. I highly recommend their services!",
    image: People2
  },
  {
    id: 3,
    name: "Rithwin",
    role: "Founder, Route Your Travel",
    content:
      "Dexio team was able to support us in our revamp journey and are now turning out to be a valuable member of our engineering community. Our POC and designer Ganga has been a phenomenal young talent for Vittae and she has proved that she is hungry to learn & grow along with us.",
    image: People3
  },
  {
    id: 4,
    name: "Nagraj Kuppuswamy",
    role: "Co-Founder, Beaconer",
    content:
      "Working with Dexio completely changed how our platform looks and feels. They helped us tell a clear story through our UI/UX, which led to great customer feedback. Dexio took the time to truly understand our complex platform instead of copying generic designs. Their work was high quality, collaborative, and budget-friendly for a startup like ours. I’d highly recommend Dexio for thoughtful and personalized design work.",
    image: People4
  },
  {
    id: 5,
    name: "Mithun",
    role: "Founder, Route Your Travel",
    content:
      "Dexio did an excellent job across branding and website design for Route Your Travel. The logo creation was impressive and aligned well with our brand identity, and the website hero section delivered a strong first impression. The AI-based itinerary builder stood out as an innovative solution that significantly reduced the time required to build itineraries while addressing real travel needs. The team supported us closely throughout the journey and delivered with clarity, creativity, and precision.",
    image: People5
  }
];

const SparkleIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 0Q12 12 24 12Q12 12 12 24Q12 12 0 12Q12 12 12 0Z"
      fill="#F06058"
    />
  </svg>
);

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getIndex = (offset: number) => {
    return (activeIndex + offset + testimonials.length) % testimonials.length;
  };

  return (
    <section className="bg-[#2f329d] pt-10 pb-20 px-6 flex flex-col items-center text-center relative overflow-hidden">
      
      {/* Navigation Arrows – Desktop only */}
      <button
        onClick={handlePrev}
        className="hidden md:flex absolute left-10 top-[45%] z-50 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={handleNext}
        className="hidden md:flex absolute right-10 top-[45%] z-50 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition"
      >
        <ChevronRight size={32} />
      </button>

      {/* Avatar Stack with Swipe Support (Mobile) */}
      <motion.div
        className="flex items-center justify-center relative h-52 w-full max-w-4xl"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x < -50) handleNext();
          if (info.offset.x > 50) handlePrev();
        }}
      >
        {/* Left Far */}
        <motion.div layout animate={{ x: -170, scale: 0.8 }} className="absolute z-10">
          <div className="w-[88px] h-[88px] rounded-[34px] border-2 border-[#4d5ef7] overflow-hidden relative">
            <img
              src={testimonials[getIndex(-2)].image}
              className="w-full h-full object-cover grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-[#4044E8]/60 mix-blend-color" />
          </div>
        </motion.div>

        {/* Left Near */}
        <motion.div layout animate={{ x: -110, scale: 1 }} className="absolute z-20">
          <div className="w-[96px] h-[96px] rounded-[40px] border-[3px] border-[#4d5ef7] overflow-hidden relative">
            <img
              src={testimonials[getIndex(-1)].image}
              className="w-full h-full object-cover grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-[#4044E8]/60 mix-blend-color" />
          </div>
        </motion.div>

        {/* Center */}
        <motion.div layout animate={{ x: 0, scale: 1.1 }} className="relative z-30">
          <div className="w-[144px] h-[144px] rounded-[62px] border border-white flex items-center justify-center bg-[#4044E8]">
            <div className="w-[128px] h-[128px] rounded-[56px] border border-white overflow-hidden bg-white shadow-2xl">
              <img
                src={testimonials[activeIndex].image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Near */}
        <motion.div layout animate={{ x: 110, scale: 1 }} className="absolute z-20">
          <div className="w-[96px] h-[96px] rounded-[40px] border-[3px] border-[#4d5ef7] overflow-hidden relative">
            <img
              src={testimonials[getIndex(1)].image}
              className="w-full h-full object-cover grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-[#3b3ded]/60 mix-blend-color" />
          </div>
        </motion.div>

        {/* Right Far */}
        <motion.div layout animate={{ x: 170, scale: 0.8 }} className="absolute z-10">
          <div className="w-[88px] h-[88px] rounded-[34px] border-2 border-[#4d5ef7] overflow-hidden relative">
            <img
              src={testimonials[getIndex(2)].image}
              className="w-full h-full object-cover grayscale brightness-75"
            />
            <div className="absolute inset-0 bg-[#3b3ded]/60 mix-blend-color" />
          </div>
        </motion.div>
      </motion.div>

      {/* Text Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <h4 className="mb-[1.25rem] text-[36px] font-semibold text-[#F1F2F4] leading-[40px] md:leading-normal" style={{ fontFamily: 'Sora, sans-serif' }}>
            {testimonials[activeIndex].name}
          </h4>
          <p className="text-[#F1F2F4] text-[20px] mb-8">
            {testimonials[activeIndex].role}
          </p>
          <p className="max-w-[80rem] px-4 text-[#F1F2F4] text-[20px] leading-[30px]">
            {testimonials[activeIndex].content}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="flex items-center gap-2 mt-8">
        {testimonials.map((_, i) =>
          i === activeIndex ? (
            <div key={i} className="w-8 h-8 flex items-center justify-center">
              <SparkleIcon />
            </div>
          ) : (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2 h-2 rounded-full bg-white/40 cursor-pointer hover:bg-white/70 transition"
            />
          )
        )}
      </div>
    </section>
  );
}
