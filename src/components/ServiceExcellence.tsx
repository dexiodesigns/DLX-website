import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TAB_CONFIGS, getTabConfig } from "../constants/tabConfig";
import productsVideo from "../assets/Videos/Products-SaaS-Intelligence.mp4";
import AcademyHomeImg from "../assets/HomePageImages/AcademyHomeImg.png";
import DesignServicesVideo from "../assets/Videos/DesignServicesVideo.mp4";

export default function ServiceExcellence() {
  const [activeTab, setActiveTab] = useState("Services");
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const navigate = useNavigate();
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [tabDimensions, setTabDimensions] = useState({ left: 0, width: 0 });

  // Update sliding indicator position when active tab changes
  useEffect(() => {
    const activeButton = tabRefs.current[activeTab];
    if (activeButton) {
      const container = activeButton.parentElement;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        setTabDimensions({
          left: buttonRect.left - containerRect.left,
          width: buttonRect.width,
        });
      }
    }
  }, [activeTab]);

  const tabOrder = Object.keys(TAB_CONFIGS);

  return (
    <section className="max-w-10xl px-6 xl:px-[200px] py-16 md:py-[28px]">

      {/* Tab Switcher with Sliding Indicator */}
      <div className="flex justify-center mb-[32px] md:mb-[48px] w-full">
        <div
          className="p-1 md:p-2 rounded-[24px] flex flex-wrap md:flex-nowrap justify-center items-center gap-1 md:gap-0 relative"
          style={{ backgroundColor: 'rgb(26 27 30 / 66%)' }}
        >
          {/* Sliding Background Indicator */}
          <motion.div
            className="absolute rounded-[20px] z-0"
            animate={{
              left: tabDimensions.left,
              width: tabDimensions.width,
              backgroundColor: getTabConfig(activeTab).activeColor,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            style={{
              height: 'calc(100% - 8px)',
              top: '4px',
            }}
          />

          {Object.values(TAB_CONFIGS).map((tabConfig) => (
            <button
              key={tabConfig.label}
              ref={(el) => { tabRefs.current[tabConfig.label] = el; }}
              onClick={() => setActiveTab(tabConfig.label)}
              className={`px-4 md:px-8 py-2 md:py-2.5 rounded-[20px] text-[14px] md:text-base font-medium leading-6 capitalize whitespace-nowrap relative z-10 transition-colors duration-300 ${activeTab === tabConfig.label
                ? tabConfig.textColor
                : "text-white hover:text-white/80"
                }`}
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
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: tabOrder.indexOf(activeTab) > tabOrder.indexOf(activeTab) ? 20 : -20, y: 0 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: tabOrder.indexOf(activeTab) > tabOrder.indexOf(activeTab) ? -20 : 20, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <h2 className="text-[28px] md:text-[40px] font-semibold leading-tight mb-6 font-sora md:font-sans" style={{ color: '#F1F2F4', fontFamily: 'Sora, sans-serif' }}>
                {getTabConfig(activeTab).content.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-[38rem] mx-auto md:mx-0" style={{ color: '#D5D7DD' }}>
                {getTabConfig(activeTab).content.description}
              </p>

              {/* Stats Row - Centered on Mobile */}
              {activeTab === "Services" && (
                <div className="flex justify-center md:justify-start gap-8 md:gap-12 mb-8">
                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold mb-1 font-sora" style={{ fontFamily: 'Sora, sans-serif' }}>100+</span>
                    <span className="font-sora text-xs md:text-base font-normal leading-6 tracking-[1px]" style={{ color: '#D5D7DD' }}>Projects</span>
                  </div>

                  <div className="w-[1px] h-10 md:h-12 bg-zinc-800 self-center"></div>

                  <div className="flex flex-col">
                    <span className="text-3xl md:text-4xl font-bold mb-1 font-sora" style={{ fontFamily: 'Sora, sans-serif' }}>20+</span>
                    <span className="font-sora text-xs md:text-base font-normal leading-6 tracking-[1px]" style={{ color: '#D5D7DD' }}>Clients</span>
                  </div>
                </div>
              )}

              {/* Button - Show for all tabs */}
              <div className="flex justify-center md:justify-start">
                {activeTab === "Services" ? (
                  <button
                    onClick={() => navigate('/services/ux-audit')}
                    className="w-fit bg-[#22252A] px-6 py-3 rounded-full flex items-center gap-2 hover:bg-zinc-800 transition text-[18px] font-medium leading-6 capitalize"
                  >
                    <span className="bg-gradient-to-tr from-[#6366f1] via-[#a855f7] via-[#c34772] to-[#f9f916] bg-clip-text text-transparent">
                      {getTabConfig(activeTab).content.buttonText}
                    </span>
                    <ArrowRight size={16} className="text-[#a855f7]" />
                  </button>
                ) : (
                  <span className="text-[18px] font-medium leading-6 capitalize bg-gradient-to-tr from-[#6366f1] via-[#a855f7] via-[#c34772] to-[#f9f916] bg-clip-text text-transparent">
                    Coming Soon...
                  </span>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side: Visual Content (Video/Image) - Higher priority on mobile order */}
        <div className="relative group cursor-pointer order-1 md:order-2 w-full md:w-[604px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-[24px] md:rounded-[32px] overflow-hidden"
            >
              {activeTab === "Services" ? (
                <div className="relative" onClick={() => setIsVideoModalOpen(true)}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[250px] md:h-[340px] object-cover cursor-pointer"
                  >
                    <source src={DesignServicesVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                </div>
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <video
              autoPlay
              controls
              className="w-full rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={DesignServicesVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  );
}