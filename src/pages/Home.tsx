import { ArrowRight } from "lucide-react";
import FutureIntelliImg from "../assets/HomePageImages/futureIntelliImg.jpg";
import AcademyHomeImg from "../assets/HomePageImages/AcademyHomeImg.jpg";
import { VideoImg } from "../assets/VideoImg";
import { useState } from "react";
import { Star } from "../assets/HomeIcons/Star";
import { Bulb } from "../assets/HomeIcons/Bulb";
import { Sun } from "../assets/HomeIcons/Sun"; 
import EvidenceOfImpact from "../components/Evidence";
import ContactFooter from "../components/ContactFooter";
import homePageVideo from "../assets/Videos/HomePage-HeroSection.mov";
import productsVideo from "../assets/Videos/Products-SaaS-Intelligence.mp4";
import { TAB_CONFIGS, getTabConfig } from "../constants/tabConfig";
import TestimonialCarousel from "../components/TestimonialCarousel";
import LogoMarquee from "../components/Companies";
import FAQSection from "../components/FAQSection";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Design Services");
  const HomeDescription = 'Every modern user works alongside AI and Dexio LabX designs Human<>AI systems that deliver real value inside SaaS products.';
  return (
<main className="bg-[#0B0C0E] text-white min-h-screen pt-24 selection:bg-purple-500/30">
  {/* Video Background Container - spans both sections */}
<div className="relative">
  {/* Video Background */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute inset-0 bg-black/70 z-10"></div>
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover"
      onError={(e) => console.error('Video error:', e)}
      onLoadedData={() => console.log('Video loaded successfully')}
    >
      <source src={homePageVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Gradient fade at top */}
    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0B0C0E] to-transparent z-10"></div>
    {/* Gradient fade at bottom - starts from 50% */}
    <div className="absolute top-[-800px] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-[#0B0C0E] z-10"></div>
  </div>

    {/* First Section */}
    <section className="relative max-w-6xl mx-auto px-6 text-center flex flex-col items-center py-40 z-20">
      <div className="flex flex-col items-center">
        <h1 className="text-[48px] font-[600] pb-5 tracking-[1.5px] inline-block" style={{color: '#F1F2F4', transform: 'scaleX(0.98)'}}>
          Designing for SaaS that is
        </h1>
        <h2 className="text-[48px] font-[600] tracking-[1px] leading-tight inline-block bg-gradient-to-tr from-[#6366f1] via-[#a855f7] via-[#c34772] to-[#f9f916] bg-clip-text text-transparent" style={{transform: 'scaleX(1)'}}>
          no longer built only for humans.
        </h2>  
        <p className="mt-8 max-w-3xl text-center font-inter text-base font-normal leading-6" style={{color: '#D5D7DD'}}>
          {HomeDescription}
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white px-8 py-3 rounded-[20px] font-inter text-base font-medium leading-6 capitalize flex items-center gap-2 hover:bg-gray-200 transition" style={{color: '#0B0C0E'}}>
            Design With Us <ArrowRight size={18} />
          </button>
          <button className="border border-zinc-700 px-8 py-3 rounded-[20px] font-inter text-base font-medium leading-6 capitalize text-white flex items-center gap-2 hover:bg-zinc-900 transition" style={{color: '#D5D7DD'}}>
            Join Our Tribe <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>

    {/* Second Section */}
    <section className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center pb-40 z-20">
      {/* Left: Image with shadow effect */}
      <div className="relative">
        {/* Glow effect behind image */}
<div 
  className="absolute -top-12 left-1/2 -translate-x-1/2 w-[700px] h-[450px] blur-[60px] -z-10 opacity-60 mt-[20px]"
  style={{
    background: 'radial-gradient(circle, #F06058 0%, transparent 70%)'
  }}
></div>
        <div className="relative">
          {/* <FutureIntelliImg/> */}
          <img src={FutureIntelliImg} alt="Future Intelligent Design" />
        </div>
      </div>

      {/* Right: Text Content */}
      <div className="flex flex-col gap-6">
        <h2 className="font-sora text-[36px] font-semibold leading-[48px] tracking-[0.5px]" style={{color: '#F1F2F4'}}>
          Building the future of intelligent design and automation.
        </h2>
        <p className="text-400 leading-relaxed" style={{color: '#e5e7ecff'}}>
          We are more than a digital agency. We are a laboratory of innovation. By fusing human-centric design with AI-driven SaaS products, we help businesses move from friction to flow. Our mission is to transform complex ideas into intelligent experiences that create measurable value.
        </p>
      </div>
    </section>
  </div>
      {/* --- Service Excellence Section --- */}
      <section className="max-w-10xl px-6 xl:px-[200px]">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-[48px] h-[64px]">
          <div className="p-2 rounded-[24px] flex items-center" style={{backgroundColor: 'rgb(26 27 30 / 66%)'}}>
            {Object.values(TAB_CONFIGS).map((tabConfig) => (
          <button
          key={tabConfig.label}
          onClick={() => setActiveTab(tabConfig.label)}
          className={`px-8 py-2.5 rounded-[20px] transition-colors duration-300 text-base font-medium leading-6 capitalize ${
            activeTab === tabConfig.label
              ? `h-[100%] ${tabConfig.textColor}`
              : "text-white bg-transparent hover:bg-zinc-800/50"
          }`}
          style={{
            backgroundColor:
              activeTab === tabConfig.label ? tabConfig.activeColor : undefined,
          }}
        >
          {tabConfig.label}
        </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[72px] items-start">
          {/* Left Side: Content & Stats */}
          <div className="flex flex-col">
            <h2 className="text-[40px] font-semibold leading-tight mb-6 whitespace-pre-line" style={{ color: '#F1F2F4' }}>
              {getTabConfig(activeTab).content.title}
            </h2>
            <p className="text-base leading-relaxed mb-6 max-w-[38rem]" style={{ color: '#D5D7DD' }}>
              {getTabConfig(activeTab).content.description}
            </p>

            {/* Stats Row - Only show for Design Services */}
            {activeTab === "Design Services" && (
              <div className="flex gap-12 mb-6">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold mb-1">100+</span>
                  <span className="font-sora text-base font-normal leading-6 tracking-[1px]" style={{color: '#D5D7DD'}}>Projects</span>
                </div>
                
                {/* Vertical Divider */}
                <div className="w-[1px] h-12 bg-zinc-800 self-center"></div>

                <div className="flex flex-col">
                  <span className="text-4xl font-bold mb-1">20+</span>
                  <span className="font-sora text-base font-normal leading-6 tracking-[1px]" style={{color: '#D5D7DD'}}>Clients</span>
                </div>
              </div>
            )}

            <button className="w-fit bg-[#22252A] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition text-base font-medium leading-6 capitalize" style={{ color: '#D5D7DD' }}>
              {getTabConfig(activeTab).content.buttonText} <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Side: Dynamic Content */}
          <div className="relative group cursor-pointer">
            {activeTab === "Design Services" ? (
              <VideoImg />
            ) : activeTab === "Products" ? (
              <div className="relative rounded-[32px] overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[350px] object-cover rounded-[32px]"
                >
                  <source src={productsVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : activeTab === "Academy" ? (
              <div className="relative rounded-[32px] overflow-hidden">
                <img src={AcademyHomeImg} alt="Academy Experience" className="w-full h-[350px] object-cover rounded-[32px]" />
              </div>
            ) : (
              <div className="bg-[#111214] rounded-[32px] p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 opacity-50">📚</div>
                  <p className="text-white/60">Coming Soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="m-32 text-center max-w-10xl mx-auto px-6">
        <h3 className="font-sora text-[36px] font-semibold leading-[48px] mb-16" style={{ color: '#F1F2F4' }}>
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
        <h2 className="mb-12" style={{color: '#F1F2F4', fontSize: '38px', fontStyle: 'normal', fontWeight: '600', lineHeight: '48px'}}>
          We don't just build. We evolve with you.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          {/* Card 1 */}
          <div className="bg-[#111214] p-8 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Sparkles className="text-indigo-500" size={24} /> */}
              <Star/>
            </div>
            <h3 className="text-2xl font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight">AI-Driven Innovation</h3>
            <p className="text-[#D5D7DD] text-[16px]" style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400', lineHeight: '24px'}}>
              Every solution is built with automation and intelligence at its core.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111214] p-8 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Globe className="text-orange-500" size={24} /> */}
              <Sun/>
            </div>
            <h3 className="text-2xl font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight">Global Mindset</h3>
            <p className="text-[#D5D7DD] text-[16px]" style={{overflow: 'hidden', textOverflow: 'ellipsis', fontWeight: '400', lineHeight: '24px'}}>
              Trusted by startups and enterprises across industries and continents.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111214] p-8 rounded-[32px] text-left hover:border-zinc-700 transition">
            <div className="mb-6">
              {/* <Lightbulb className="text-cyan-500" size={24} /> */}
              <Bulb/>
            </div>
            <h3 className="text-2xl font-bold text-[#F1F2F4] mb-4 tracking-[1px] leading-tight">Creativity-First Thinking</h3>
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