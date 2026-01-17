import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FutureIntelliImg from "../assets/HomePageImages/futureIntelliImg.jpg";
import { Star } from "../assets/HomeIcons/Star";
import { Bulb } from "../assets/HomeIcons/Bulb";
import { Sun } from "../assets/HomeIcons/Sun"; 
import EvidenceOfImpact from "../components/Evidence";
import ContactFooter from "../components/ContactFooter";
import homePageVideo from "../assets/Videos/HomePage-HeroSection.mov";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LogoMarquee from "../components/Companies";
import FAQSection from "../components/FAQSection";
import ServiceExcellence from "../components/ServiceExcellence";

export default function Home() {
  const navigate = useNavigate();
  const HomeDescription = 'Every modern user works alongside AI and Dexio LabX designs Human<>AI systems that deliver real value inside SaaS products.';
  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen pt-16 selection:bg-purple-500/30 overflow-x-hidden">
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-400px] md:top-[-400px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#0B0C0E] z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src={homePageVideo} type="video/mp4" />
          {/* MOV fallback for Safari */}
          <source src={homePageVideo} type="video/quicktime" />
        </video>
        <div className="absolute top-0 left-0 right-0 h-42 bg-gradient-to-b from-[#0B0C0E] to-transparent z-10"></div>
        <div className="absolute md:top-[-200px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#0B0C0E] z-10"></div>
      </div>

      {/* First Section: Hero */}
      <section className="relative max-w-6xl mx-auto px-6 text-center flex flex-col items-center pt-28 pb-20 md:py-[144px] z-20">
        <div className="flex flex-col items-center">
          {/* Mobile Heading Size 30px as per Figma */}
          <h1 className="text-[30px] md:text-[48px] font-[600] pb-0 tracking-[0%] leading-[40px] md:leading-[60px]" style={{color: '#F1F2F4', fontFamily: 'Sora, sans-serif'}}>
            Designing for SaaS that is
          </h1>
          <h2 className="text-[30px] md:text-[48px] font-[600] tracking-[0%] md:tracking-[1px] leading-[1.2] md:leading-tight inline-block bg-gradient-to-tr from-[#6366f1] via-[#a855f7] via-[#c34772] to-[#f9f916] bg-clip-text text-transparent" style={{fontFamily: 'Sora, sans-serif'}}>
            no longer built only for humans.
          </h2>  
          
          <p className="mt-4 md:mt-[12px] max-w-3xl text-center font-inter text-[14px] md:text-base font-normal leading-[150%] md:leading-6 px-0 md:px-0" style={{color: '#D5D7DD'}}>
            {HomeDescription}
          </p>

          {/* Button Container - Stacked on Mobile, Row on Desktop */}
          <div className="mt-[40px] md:mt-[36px] flex flex-col md:flex-row gap-4 w-full md:w-auto px-4 md:px-0 items-center">
            <button 
              onClick={() => navigate('/contact')}
              className="mobile-hero-button w-[200px] md:w-auto justify-center bg-[#F1F2F4] px-6 py-3 md:px-6 md:py-3 rounded-[20px] font-inter text-base font-medium leading-6 flex items-center gap-2 hover:bg-gray-200 transition" 
              style={{color: '#0B0C0E'}}
            >
              Design With Us <ArrowRight className="w-5 h-5" />
            </button>
            {/* <button className="w-full md:w-auto justify-center border border-zinc-700 bg-transparent px-8 py-3.5 rounded-[20px] font-inter text-base font-semibold leading-6 text-white flex items-center gap-2 hover:bg-zinc-900 transition" style={{color: '#F1F2F4'}}>
              Join Our Tribe <ArrowRight size={18} />
            </button> */}
          </div>
        </div>
      </section>
    </div>

      {/* Second Section: Future Intelli */}
      <section className="relative max-w-7xl mx-auto flex flex-col md:grid md:grid-cols-2 items-center z-20 
        /* Mobile: 44px top/bottom, 20px sides as per Figma markers */
        pt-[44px] pb-[44px] px-[20px] 
        /* Desktop: Reverting to your original spacing */
        md:pt-11 md:pb-40 md:px-6 md:gap-16"
      >
        
        {/* Top on Mobile: Image */}
        <div className="relative w-full order-1">
          <div 
            className="absolute -top-12 left-1/2 -translate-x-1/2 w-[280px] md:w-[500px] h-[370px] md:h-[500px] blur-[60px] -z-10 opacity-40 md:opacity-60"
            style={{
              background: 'radial-gradient(circle, #F06058 0%, transparent 70%)'
            }}
          ></div>
          <div className="relative rounded-[24px] overflow-hidden flex justify-center">
            <img 
              src={FutureIntelliImg} 
              alt="Future Intelligent Design" 
              className="w-full md:max-w-none h-auto object-contain" 
            />
          </div>
        </div>

        {/* Bottom on Mobile: Text Content */}
        <div className="flex flex-col text-center md:text-left order-2 
          /* Mobile: 20px gap between heading and paragraph as per Figma marker */
          gap-[20px] 
          /* Mobile: 44px gap from the image above it */
          mt-[44px] 
          /* Desktop resets */
          md:mt-0 md:gap-3"
        >
          <h2 className="font-sora font-semibold text-[#F1F2F4]
            /* Mobile: Matching the tight leading and size in Figma */
            text-[24px] leading-[32px] tracking-[0.02em]
            /* Desktop resets */
            md:text-[36px] md:leading-[48px] md:tracking-[0.5px]"
            style={{fontFamily: 'Sora, sans-serif'}}
          >
            Building the future of intelligent design and automation.
          </h2>
          
          <p className="font-inter font-normal text-[#D5D7DD]
            /* Mobile: Matching paragraph size and leading */
            text-[14px] leading-[22px]
            /* Desktop resets */
            md:text-base md:leading-relaxed"
          >
            We are more than a digital agency. We are a laboratory of innovation. By fusing human-centric design with AI-driven SaaS products, we help businesses move from friction to flow. Our mission is to transform complex ideas into intelligent experiences that create measurable value.
          </p>
        </div>
      </section>

      {/* --- Service Excellence Section --- */}
   <ServiceExcellence/>

      <section className="mx-6 md:m-32 text-center max-w-10xl md:mx-auto px-6">
        <h3 className="font-sora text-[28px] md:text-[36px] font-semibold leading-[36px] md:leading-[48px] mb-8 md:mb-16" style={{ color: '#F1F2F4' }}>
          Trusted by visionaries, loved by teams.
        </h3>
        
        {/* Logo Flex Row */}
        <div className="overflow-hidden">
          <LogoMarquee/>
        </div>
      </section>
     
     <TestimonialCarousel/>

<section className="py-24 px-6 xl:px-[200px]">
      
      {/* --- Features Cards --- */}
      <div className="text-center">
        <h2 className="mb-8 md:mb-12 text-[36px] font-semibold leading-[36px] md:leading-[48px]" style={{color: '#F1F2F4', fontFamily: 'Sora, sans-serif'}}>
          We don't just build. We evolve with you.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12 md:gap-12 max-w-[1280px] mx-auto" style={{gap: '48px'}}>
          {/* Card 1 */}
          <div className="bg-[#111214] p-9 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Sparkles className="text-indigo-500" size={24} /> */}
              <Star/>
            </div>
            <h3 className="text-[24px] font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight" style={{fontFamily: 'Sora, sans-serif'}}>AI-Driven Innovation</h3>
            <p className="text-[#D5D7DD] text-[16px]" style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400', lineHeight: '24px'}}>
              Every solution is built with automation and intelligence at its core.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111214] p-9 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Globe className="text-orange-500" size={24} /> */}
              <Sun/>
            </div>
            <h3 className="text-[24px] font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight" style={{fontFamily: 'Sora, sans-serif'}}>Global Mindset</h3>
            <p className="text-[#D5D7DD] text-[16px]" style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400', lineHeight: '24px'}}>
              Trusted by startups and enterprises across industries and continents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111214] p-9 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Lightbulb className="text-cyan-500" size={24} /> */}
              <Bulb/>
            </div>
            <h3 className="text-[24px] font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight" style={{fontFamily: 'Sora, sans-serif'}}>Creativity-First Thinking</h3>
            <p className="text-[#D5D7DD] text-[16px]" style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400', lineHeight: '24px'}}>
              Where aesthetics meet measurable business outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* --- FAQ Section --- */}
      <FAQSection/>
      </section>
      <EvidenceOfImpact/>
    {/* --- Talk Section --- */}
      <ContactFooter 
        title="We design digital products, systems and stories that move the businesses forward - built on, Clarity, Creativity and measurable growth."
        subtitle="Great partnership, starts with a quick hello."
        buttonText="Let’s Talk"
      />
    {/* --- Footer --- */}
      {/* <Footer/> */}
    </main>
  );
}