import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { TAB_CONFIGS, getTabConfig } from "../constants/tabConfig";
import { VideoImg } from "../assets/VideoImg";
import productsVideo from "../assets/Videos/Products-SaaS-Intelligence.mp4";
import AcademyHomeImg from "../assets/HomePageImages/AcademyHomeImg.jpg";

export default function ServiceExcellence() {
  const [activeTab, setActiveTab] = useState("Design Services");
  const navigate = useNavigate();

  return (
    <section className="max-w-10xl px-6 xl:px-[200px] py-16 md:py-[28px]">
      
      {/* Tab Switcher - Optimized for Mobile (No overflow, centered wrap) */}
      <div className="flex justify-center mb-[32px] md:mb-[48px] w-full">
        <div 
          className="p-1 md:p-2 rounded-[24px] flex flex-wrap md:flex-nowrap justify-center items-center gap-1 md:gap-0" 
          style={{backgroundColor: 'rgb(26 27 30 / 66%)'}}
        >
          {Object.values(TAB_CONFIGS).map((tabConfig) => (
            <button
              key={tabConfig.label}
              onClick={() => setActiveTab(tabConfig.label)}
              className={`px-4 md:px-8 py-2 md:py-2.5 rounded-[20px] transition-all duration-300 text-[14px] md:text-base font-medium leading-6 capitalize whitespace-nowrap ${
                activeTab === tabConfig.label
                  ? `h-full ${tabConfig.textColor}`
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

      {/* Content Grid - Stacks on Mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[48px] items-start max-w-[1208px] mx-auto">
        
        {/* Left Side: Content & Stats */}
        <div className="flex flex-col text-center md:text-left order-2 md:order-1 md:max-w-[604px]">
          <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight mb-6 font-sora md:font-sans" style={{ color: '#F1F2F4', fontFamily: 'Sora, sans-serif' }}>
            {getTabConfig(activeTab).content.title}
          </h2>
          <p className="text-sm md:text-base leading-relaxed mb-8 max-w-[38rem] mx-auto md:mx-0" style={{ color: '#D5D7DD' }}>
            {getTabConfig(activeTab).content.description}
          </p>

          {/* Stats Row - Centered on Mobile */}
          {activeTab === "Design Services" && (
            <div className="flex justify-center md:justify-start gap-8 md:gap-12 mb-8">
              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold mb-1 font-sora" style={{fontFamily: 'Sora, sans-serif'}}>100+</span>
                <span className="font-sora text-xs md:text-base font-normal leading-6 tracking-[1px]" style={{color: '#D5D7DD'}}>Projects</span>
              </div>
              
              <div className="w-[1px] h-10 md:h-12 bg-zinc-800 self-center"></div>

              <div className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold mb-1 font-sora" style={{fontFamily: 'Sora, sans-serif'}}>20+</span>
                <span className="font-sora text-xs md:text-base font-normal leading-6 tracking-[1px]" style={{color: '#D5D7DD'}}>Clients</span>
              </div>
            </div>
          )}

          <div className="flex justify-center md:justify-start">
            <button 
              onClick={() => navigate('/contact')}
              className="w-fit bg-[#22252A] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition text-base font-medium leading-6 capitalize" 
              style={{ color: '#D5D7DD' }}
            >
              {getTabConfig(activeTab).content.buttonText} <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Visual Content (Video/Image) - Higher priority on mobile order */}
        <div className="relative group cursor-pointer order-1 md:order-2 w-full md:w-[604px]">
          <div className="rounded-[24px] md:rounded-[32px] overflow-hidden">
            {activeTab === "Design Services" ? (
              <VideoImg />
            ) : activeTab === "Products" ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[250px] md:h-[340px] object-cover"
              >
                <source src={productsVideo} type="video/mp4" />
              </video>
            ) : activeTab === "Academy" ? (
              <img 
                src={AcademyHomeImg} 
                alt="Academy Experience" 
                className="w-full h-[250px] md:h-[340px] object-cover" 
              />
            ) : (
              <div className="bg-[#111214] p-8 h-[250px] md:h-[340px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl md:text-6xl mb-4 opacity-50">📚</div>
                  <p className="text-white/60">Coming Soon</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}