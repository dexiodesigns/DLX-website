import { ArrowRight } from "lucide-react";
import {HomeImg} from "../assets/HomeImg";
import { VideoImg } from "../assets/VideoImg";
import { useState } from "react";
import { Vittae } from "../assets/companies/Vittae";
import {Miniature} from "../assets/companies/Miniature";
import {MotorQ} from "../assets/companies/MotorQ";
import {NearTail} from "../assets/companies/NearTail";
import {Dforth} from "../assets/companies/Dforth";
import {Route} from "../assets/companies/Route";
import {Treasure} from "../assets/companies/Treasure";
import { People1 } from "../assets/peopleImages/people1";
import { People2 } from "../assets/peopleImages/people2";
import { People3 } from "../assets/peopleImages/people3";
import { People4 } from "../assets/peopleImages/people4";
import { People5 } from "../assets/peopleImages/people5";
import { Star } from "../HomeIcons/Star";
import { Bulb } from "../HomeIcons/Bulb";
import { Sun } from "../HomeIcons/Sun";
import { Plus } from "../HomeIcons/Plus";
import EvidenceOfImpact from "../components/Evidence";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Design Services");
    const [activeFAQTab, setActiveFAQTab] = useState("Design Company");
const SparkleIcon = () => (
  <svg 
    width="34" 
    height="34" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      /* M = Move to top tip
         Q = Quadratic curve to the right tip (using center 12,12 as pull point)
      */
      d="M12 0Q12 12 24 12Q12 12 12 24Q12 12 0 12Q12 12 12 0Z" 
      fill="#F06058" 
    />
  </svg>
);
const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "What are your areas of focus as a leading UI/UX design company in India?",
      answer: "We specialize in user research, interaction design, usability testing, and digital product strategy. From mobile applications to enterprise platforms, our solutions combine human neuroscience, psychology, technology, and design thinking to develop intuitive, high-performing experiences."
    },
    { question: "What separates Dexio from other top UI/UX design agencies?", answer: "Our focus on AI-driven innovation and multidisciplinary approach." },
    { question: "Does Dexio have experience working with large corporate organisations in UX/UI design?", answer: "Yes, we partner with both startups and global enterprises." },
    { question: "Does Dexio work with startups in UX/UI design?", answer: "Absolutely, we help startups scale through intelligent design." },
    { question: "Why should we onboard Dexio? What's special about you?", answer: "We don't just build products; we evolve with your business needs." }
  ];
  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen pt-24 selection:bg-purple-500/30">
      
      {/* --- Hero Section --- */}
      <section className="max-w-6xl mx-auto px-6 text-center flex flex-col items-center my-40">
        <h1 className="text-[48px] font-[600] pb-5 tracking-[1.5px] inline-block" style={{color: '#F1F2F4', transform: 'scaleX(0.98)'}}>
          Design that drives growth.
        </h1>
      <h2 className="text-[48px] font-[600] tracking-[1px] leading-tight inline-block bg-gradient-to-tr from-[#6366f1] via-[#a855f7] via-[#c34772] to-[#f9f916] bg-clip-text text-transparent" style={{transform: 'scaleX(1)'}}>
  AI that simplifies work.
</h2>  
        <p className="mt-8 max-w-3xl text-center font-inter text-base font-normal leading-6" style={{color: '#D5D7DD'}}>
          Dexio LabX is a multidisciplinary ecosystem where creativity, technology, and learning converge. 
          We empower startups to scale, enterprises to innovate, and individuals to evolve.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-white px-8 py-3 rounded-[20px] font-inter text-base font-medium leading-6 capitalize flex items-center gap-2 hover:bg-gray-200 transition" style={{color: '#0B0C0E'}}>
            Design With Us <ArrowRight size={18} />
          </button>
          <button className="border border-zinc-700 px-8 py-3 rounded-[20px] font-inter text-base font-medium leading-6 capitalize text-white flex items-center gap-2 hover:bg-zinc-900 transition" style={{color: '#D5D7DD'}}>
            Join Our Tribe <ArrowRight size={18} />
          </button>
        </div>
      </section>

      {/* --- Second Section --- */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Dummy Image / Abstract Visual */}
        <div>
         <HomeImg/>
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
      {/* --- Service Excellence Section --- */}
      <section className="max-w-10xl px-6 xl:px-[200px] mt-32">
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-[48px] h-[64px]">
          <div className="p-2 rounded-[24px] flex items-center" style={{backgroundColor: 'rgb(26 27 30 / 66%)'}}>
            {["Design Services", "Products", "Academy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-[20px] transition-all duration-300  text-base font-medium leading-6 capitalize ${
                  activeTab === tab 
                    ? "bg-[#7a78ed] text-black h-[100%]" 
                    : "text-white hover:text-white"
                }`}
                // style={activeTab === tab ? {color: 'rgba(213, 215, 221, 1)'} : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-[72px] items-start">
          {/* Left Side: Content & Stats */}
          <div className="flex flex-col">
            <h2 className="text-[40px] font-semibold leading-tight mb-6" style={{ color: '#F1F2F4' }}>
              Service <br /> Excellence
            </h2>
            <p className="text-base leading-relaxed mb-6 max-w-[38rem]" style={{ color: '#D5D7DD' }}>
              Crafting human-centered design for digital transformation. From UX Research to Marketing Assets, we partner with businesses to design experiences that drive growth.
            </p>

            {/* Stats Row */}
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

            <button className="w-fit bg-[#22252A] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition text-base font-medium leading-6 capitalize" style={{ color: '#D5D7DD' }}>
              Explore Design Services <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Side: Video Card */}
          <div className="relative group cursor-pointer">
            <VideoImg />
          </div>
        </div>
      </section>

      <section className="m-32 text-center max-w-10xl mx-auto px-6">
        <h3 className="font-sora text-[36px] font-semibold leading-[48px] mb-16" style={{ color: '#F1F2F4' }}>
          Trusted by visionaries, loved by teams.
        </h3>
        
        {/* Logo Flex Row */}
        <div className="overflow-hidden">
          <div className="flex gap-x-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-[marquee_30s_linear_infinite]">
            <div className="flex-shrink-0"><Vittae/></div>
            <div className="flex-shrink-0"><Miniature/></div>
            <div className="flex-shrink-0"><MotorQ/></div>
            <div className="flex-shrink-0"><NearTail/></div>
            <div className="flex-shrink-0"><Dforth/></div>
            <div className="flex-shrink-0"><Route/></div>
            <div className="flex-shrink-0"><Treasure/></div>
            {/* Duplicate for seamless loop */}
            <div className="flex-shrink-0"><Vittae/></div>
            <div className="flex-shrink-0"><Miniature/></div>
            <div className="flex-shrink-0"><MotorQ/></div>
            <div className="flex-shrink-0"><NearTail/></div>
            <div className="flex-shrink-0"><Dforth/></div>
            <div className="flex-shrink-0"><Route/></div>
            <div className="flex-shrink-0"><Treasure/></div>
          </div>
        </div>
      </section>

      {/* --- Testimonial Section (Blue Banner) --- */}
      <section className="bg-[#2f329d] pt-10 pb-2 px-6 flex flex-col items-center text-center">
        {/* Avatar Stack */}
        <div className="flex items-center justify-center relative h-44">
          {/* Left Far - Small Squircle (Blue Border Only) */}
          <div className="absolute -translate-x-[10.5rem] flex items-center justify-center opacity-50">
            <div className="w-[64px] h-[64px] rounded-[24px] border-2 border-[#4d5ef7] overflow-hidden">
                <People1/>
              {/* <img src="https://i.pravatar.cc/150?u=1" className="w-full h-full object-cover grayscale brightness-75" /> */}
              <div className="absolute inset-0 bg-[#4044E8]/40 mix-blend-color"></div>
            </div>
          </div>

          {/* Left Near - Medium Squircle (Blue Border Only) */}
          <div className="absolute -translate-x-[6.5rem] flex items-center justify-center z-10">
            <div className="w-[96px] h-[96px] rounded-[40px] border-[3px] border-[#4d5ef7] overflow-hidden relative">
                <People2/>
              {/* <img src="https://i.pravatar.cc/150?u=2" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 bg-[#4044E8]/30 mix-blend-color"></div>
            </div>
          </div>

          {/* Main Avatar (Center) - Circular with Double White Borders */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Outer White Ring */}
            <div className="w-[144px] h-[144px] rounded-[62px] border-[1.5px] border-white flex items-center justify-center bg-[#4044E8]/100">
              {/* Inner Main White Border */}
              <div className="w-[128px] h-[128px] rounded-[56px] border-[1.5px] border-white overflow-hidden bg-white shadow-2xl">
                <People3/>
                {/* <img src="https://i.pravatar.cc/150?u=3" className="w-full h-full object-cover scale-110" /> */}
              </div>
            </div>
          </div>

          {/* Right Near - Medium Squircle (Blue Border Only) */}
          <div className="absolute translate-x-[6.5rem] flex items-center justify-center z-10">
            <div className="w-[96px] h-[96px] rounded-[40px] border-[3px] border-[#4d5ef7] overflow-hidden relative">
                <People4/>
              {/* <img src="https://i.pravatar.cc/150?u=4" className="w-full h-full object-cover" /> */}
              <div className="absolute inset-0 bg-[#3b3ded]/30 mix-blend-color"></div>
            </div>
          </div>

          {/* Right Far - Small Squircle (Blue Border Only) */}
          <div className="absolute translate-x-[10.5rem] flex items-center justify-center opacity-50">
            <div className="w-[64px] h-[64px] rounded-[24px] border-2 border-[#4d5ef7] overflow-hidden">
                <People5/>
              {/* <img src="https://i.pravatar.cc/150?u=5" className="w-full h-full object-cover grayscale brightness-75" /> */}
              <div className="absolute inset-0 bg-[#3b3ded]/40 mix-blend-color"></div>
            </div>
          </div>
        </div>
        <h4 className="mb-1 tracking-[1px] leading-tight" style={{color: '#F1F2F4', textAlign: 'center', fontSize: '36px', fontStyle: 'normal', fontWeight: '600', lineHeight: '48px'}}>Rithwin</h4>
        <p className="text-[#F1F2F4] tracking-[0.5px] leading-tight text-[20px] mb-8">Founder & CEO, Vittae Inc.</p>

        <p className="max-w-[52rem] mb-10 px-4 sm:px-6 md:px-0" style={{overflow: 'hidden', color: '#F1F2F4', textAlign: 'center', textOverflow: 'ellipsis', fontFamily: 'Inter', fontSize: '20px', fontStyle: 'normal', fontWeight: '400', lineHeight: '30px'}}>
          Dexio team was able to support us in our revamp journey and are now turning out to 
          be a valuable member of our engineering community. Our POC and designer Ganga 
          has been a phenomenal young talent for Vittae and she has proved that she is 
          hungry to learn & grow along with us.
        </p>

        {/* Custom Pagination/Dots */}
        <div className="flex items-center gap-3">
          {/* <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50"></div> */}
<div className="flex items-center gap-2 mt-8">
  {/* Left inactive dots */}
  <div className="w-2 h-2 rounded-full bg-white/40"></div>
  <div className="w-2 h-2 rounded-full bg-white/40"></div>
  
  {/* The Sharp Sparkle */}
  <div className="flex items-center justify-center w-8 h-8">
    <SparkleIcon />
  </div>

  {/* Right inactive dots */}
  <div className="w-2 h-2 rounded-full bg-white/40"></div>
  <div className="w-2 h-2 rounded-full bg-white/40"></div>
</div>
          {/* <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50"></div>
          <div className="w-2 h-2 rounded-full bg-blue-300 opacity-50"></div> */}
        </div>
      </section>

<section className="bg-black py-24 px-6 xl:px-[200px]">
      
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
      <div className="mt-40">
        <h2 className="text-4xl font-bold text-white text-center mb-10">FAQs</h2>
        
        {/* FAQ Tabs Switcher */}

                <div className="flex justify-center mb-[24px] h-[64px]">
          <div className="p-2 rounded-[24px] flex items-center" style={{backgroundColor: 'rgb(26 27 30 / 66%)'}}>
            {["Design Company", "Design Services", "Design Process", "Design Academy"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFAQTab(tab)}
                className={`px-8 py-2.5 rounded-[20px] transition-all duration-300  text-base font-medium leading-6 capitalize ${
                  activeFAQTab === tab 
                    ? "bg-white text-black h-[100%] font-inter" 
                    : "text-white hover:text-white"
                }`}
                // style={activeTab === tab ? {color: 'rgba(213, 215, 221, 1)'} : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion */}
<div>
  {faqs.map((faq, index) => (
    <div key={index} className="flex gap-4">
      <div className={`${openFaq === index ? "pt-4" : "pt-8"}`}>
        <Plus/>
      </div>
      <div className="flex-1 border-b border-zinc-800">
        <button 
          onClick={() => setOpenFaq(openFaq === index ? null : index)}
          className={`w-full text-left group  ${openFaq === index ? "py-4" : "py-8"}`}
        >
          <h3 className="text-[18px] md:text-xl font-bold transition leading-10 text-[#F1F2F4]">
            {faq.question}
          </h3>
        </button>
        
        <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-60 pb-8" : "max-h-0"}`}>
          <p 
            style={{ 
              color: '#D5D7DD', 
              fontFamily: 'Inter', 
              fontSize: '16px', 
              fontWeight: '400', 
              lineHeight: '24px' 
            }}
          >
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
      <EvidenceOfImpact/>
    </main>
  );
}