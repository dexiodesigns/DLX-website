import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ContactFooter from "../components/ContactFooter";

// Video paths - Using URL constructor for files with spaces
const companyHeroVideoMov = new URL('../assets/companies/Company Page - Hero Section Video.mov', import.meta.url).href;
const companyHeroVideoMp4 = new URL('../assets/companies/Company Page - Hero Section Video.mov', import.meta.url).href;
const ourVisionVideo = new URL('../assets/companies/Our vision.mp4', import.meta.url).href;

// Team images
const img1 = new URL('../assets/companies/img1.png', import.meta.url).href;
const img2 = new URL('../assets/companies/img2.png', import.meta.url).href;
const img3 = new URL('../assets/companies/img3.png', import.meta.url).href;
const img4 = new URL('../assets/companies/img4.png', import.meta.url).href;

export default function Company() {
  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen font-['Inter'] pt-24">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center overflow-hidden md:pb-[144px]">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        >
          {/* MP4 first for better browser support */}
          <source src={companyHeroVideoMp4} type="video/mp4" />
          {/* MOV fallback for Safari */}
          <source src={companyHeroVideoMov} type="video/quicktime" />
        </video>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/80" style={{ zIndex: 1 }} />
        
        {/* Gradient fade at bottom */}
<div className="absolute bottom-0 left-0 right-0 h-48 md:h-64 bg-gradient-to-b from-transparent to-[#0B0C0E] z-[5]"></div>

        {/* Hero Content Container */}
        <div 
          className="relative z-10 text-center flex flex-col items-center justify-center w-full max-w-[1280px] px-6 md:px-0 pt-[100px] md:pt-[144px] pb-[60px] md:pb-0 mt-[76px] gap-3"
        >
          <div className="mx-auto w-full">
            <h1 
              className="mb-2 text-[32px] leading-[40px] md:text-[48px] md:leading-[60px] text-center"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
              }}
            >
              Design that drives growth.
            </h1>
            <h2 
              className="text-[32px] leading-[40px] md:text-[48px] md:leading-[60px] text-center"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
              }}
            >
              <span className="bg-gradient-to-r from-[#f97316] via-[#ec4899] to-[#a855f7] bg-clip-text text-transparent">
                AI that simplifies work.
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div className="mx-auto w-full max-w-[1280px]">
            <p className="text-zinc-300 text-sm md:text-lg leading-relaxed text-center px-4 md:px-0">
              Dexio LabX is a multidisciplinary ecosystem where creativity, technology, and learning converge. We empower
              <br className="hidden md:block" />
              startups to scale, enterprises to innovate, and individuals to evolve.
            </p>
          </div>
          
          {/* CTA Buttons - Stack vertically on mobile, horizontal on desktop */}
          <div className="flex flex-col md:flex-row items-center justify-center mx-auto w-full md:w-auto gap-4 md:gap-6 pt-6 px-6 md:px-0">
            <Link
              to="/work"
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition whitespace-nowrap w-full md:w-auto h-[56px]"
            >
              Talk To An Expert
              <ArrowRight size={18} />
            </Link>
            {/* <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-zinc-600 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition whitespace-nowrap w-full md:w-auto h-[56px]"
            >
              Talk To An Expert
              <ArrowRight size={18} />
            </Link> */}
          </div>
        </div>
      </section>
        {/* Our Vision Section - Inside Video Background */}
        <div 
          className="relative z-10 flex items-center justify-center px-6 mt-[80px] md:mt-[144px] pb-[80px] md:pb-[0px]"
          style={{ width: '100%' }}
        >
          <div 
            className="flex flex-col md:flex-row items-center md:items-center md:justify-between w-full max-w-[1280px] gap-8 md:gap-3"
          >
            {/* Video - Top on mobile, Left on desktop */}
            <div 
              className="relative overflow-hidden rounded-2xl w-full md:w-[604px] h-[300px] md:h-[288px] flex-shrink-0"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={ourVisionVideo} type="video/mp4" />
              </video>
            </div>
            
            {/* Content - Below on mobile, Right on desktop */}
            <div 
              className="flex flex-col w-[99%] md:w-[604px] gap-3 md:gap-3"
            >
              <h2 
                className="text-[28px] leading-[36px] md:text-[36px] md:leading-[48px]"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  color: '#ffffff',
                }}
              >
                Our vision is to help product teams move beyond usability and build for:
              </h2>
              
              {/* Bullet Points */}
              <ul className="space-y-1 mt-4 ml-2 md:ml-0">
                {[
                  "Shared context between user and AI",
                  "Clear decision ownership",
                  "Reduced cognitive load",
                  "Scalable, AI-assisted workflows"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 text-[16px] leading-[24px] md:gap-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      color: '#ffffff',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      {/* We Design Products Section */}
      <section 
        className="flex flex-col items-center justify-center px-6 py-[60px]  md:mt-[144px] md:pb-0"
        style={{
          width: '100%',
          backgroundColor: '#0B0C0E',
        }}
      >
        {/* Section Title */}
        <h2 
          className="text-center mb-8 md:mb-12 text-[28px] leading-[36px] md:text-[36px] md:leading-[50px] max-w-[800px]"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          We design products that think with the user, not around them.
        </h2>

        {/* Three Cards Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1280px]"
        >
          {/* Card 1 - Experiences Designed Around User Intent */}
          <div 
            className="flex flex-col p-6 md:p-8 rounded-2xl bg-[#131517] border border-white/5"
          >
            {/* Blue Icon - Person with circles */}
            <div className="mb-4 md:mb-6">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="16" r="8" stroke="#60A5FA" strokeWidth="2" fill="none"/>
                <path d="M32 28V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 44H40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="32" cy="52" rx="16" ry="6" stroke="#60A5FA" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="52" r="3" fill="#60A5FA"/>
              </svg>
            </div>
            <h3 
              className="mb-3 md:mb-4 text-[20px] leading-[28px] md:text-[24px] md:leading-[32px]"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Experiences Designed Around User Intent
            </h3>
            <p 
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              We design interfaces that understand user context, anticipate next actions, and surface the right guidance at the right moment.
            </p>
          </div>

          {/* Card 2 - Human-Led, AI-Assisted Workflows */}
          <div 
            className="flex flex-col p-6 md:p-8 rounded-2xl bg-[#131517] border border-white/5"
          >
            {/* Red/Orange Icon - Connected nodes */}
            <div className="mb-4 md:mb-6">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="16" r="6" stroke="#F87171" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="40" r="6" stroke="#F87171" strokeWidth="2" fill="none"/>
                <circle cx="48" cy="40" r="6" stroke="#F87171" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="48" r="6" stroke="#F87171" strokeWidth="2" fill="none"/>
                <path d="M32 22V42" stroke="#F87171" strokeWidth="2"/>
                <path d="M26 18L18 36" stroke="#F87171" strokeWidth="2"/>
                <path d="M38 18L46 36" stroke="#F87171" strokeWidth="2"/>
                <path d="M22 42H26" stroke="#F87171" strokeWidth="2"/>
                <path d="M38 42H42" stroke="#F87171" strokeWidth="2"/>
                <circle cx="32" cy="16" r="3" fill="#F87171"/>
                <circle cx="16" cy="40" r="3" fill="#F87171"/>
                <circle cx="48" cy="40" r="3" fill="#F87171"/>
                <circle cx="32" cy="48" r="3" fill="#F87171"/>
              </svg>
            </div>
            <h3 
              className="mb-3 md:mb-4 text-[20px] leading-[28px] md:text-[24px] md:leading-[32px]"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Human-Led, AI-Assisted Workflows
            </h3>
            <p 
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              AI supports decisions, automates complexity, and amplifies human judgment, without taking control away from the user.
            </p>
          </div>

          {/* Card 3 - Systems That Learn And Scale */}
          <div 
            className="flex flex-col p-6 md:p-8 rounded-2xl bg-[#131517] border border-white/5"
          >
            {/* Cyan Icon - Brain */}
            <div className="mb-4 md:mb-6">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 20C20 20 16 24 16 28C16 32 18 34 18 34C14 36 14 42 18 44C18 48 22 52 28 52H36C42 52 46 48 46 44C50 42 50 36 46 34C46 34 48 32 48 28C48 24 44 20 40 20" stroke="#22D3EE" strokeWidth="2" fill="none"/>
                <path d="M32 20V52" stroke="#22D3EE" strokeWidth="2"/>
                <path d="M24 28C26 28 28 30 28 32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 28C38 28 36 30 36 32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 40C26 40 28 38 28 36" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 40C38 40 36 38 36 36" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 
              className="mb-3 md:mb-4 text-[20px] leading-[28px] md:text-[24px] md:leading-[32px]"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              Systems That Learn And Scale
            </h3>
            <p 
              className="text-[14px] leading-[22px] md:text-[16px] md:leading-[24px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              Our designs evolve with usage, adapting to behaviour, data, and scale while remaining clear, predictable, and trustworthy.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section 
        className="flex flex-col items-start md:items-center justify-center px-6 py-[60px] md:py-[144px]"
        style={{
          width: '100%',
          backgroundColor: '#0B0C0E',
        }}
      >
        {/* Section Title */}
        <h2 
          className="text-left md:text-center mb-2 text-[28px] leading-[36px] md:text-[36px] md:leading-[60px] w-full max-w-[1280px]"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          How We Work
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-left md:text-center mb-10 md:mb-16 text-[20px] md:text-[24px] leading-[24px] md:leading-[28px] w-full max-w-[1280px]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            color: '#D5D7DD',
          }}
        >
          Structured. Collaborative. Outcome-Driven.
        </p>

        {/* Desktop Timeline - Horizontal */}
        <div 
          className="hidden md:flex flex-col items-center w-full max-w-[1280px]"
        >
          {/* Timeline Line with Icons */}
          <div className="relative flex items-center justify-between mb-8 w-[80%]">
            {/* Continuous Line Behind Icons */}
            <div 
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2"
              style={{ 
                height: '2px', 
                background: 'linear-gradient(0deg, rgba(240, 96, 88, 0.6), rgba(240, 96, 88, 0.6)), linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
              }} 
            />
            
            {/* Circle Icon (outline) */}
            <div 
              className="w-6 h-6 rounded-full flex-shrink-0 relative z-10"
              style={{ 
                border: '1.5px solid #F06058',
                backgroundColor: '#0B0C0E',
              }}
            />
            
            {/* Triangle Icon 1 */}
            <div className="flex-shrink-0 relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L20 12L6 20V4Z" stroke="#F06058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#0B0C0E"/>
              </svg>
            </div>
            
            {/* Triangle Icon 2 */}
            <div className="flex-shrink-0 relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L20 12L6 20V4Z" stroke="#F06058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#0B0C0E"/>
              </svg>
            </div>
            
            {/* Filled Circle Icon */}
            <div 
              className="w-6 h-6 rounded-full flex-shrink-0 relative z-10"
              style={{ backgroundColor: '#F06058' }}
            />
          </div>

          {/* Step Labels - Desktop */}
          <div className="flex items-start justify-between w-full">
            {[
              { title: "Understand", desc: "Deep dive into your product, users, and business context." },
              { title: "Define", desc: "Clear problem statements, success metrics, and scope." },
              { title: "Design", desc: "Iterative UX, strong systems thinking, and rapid validation." },
              { title: "Enable", desc: "Clean handoffs, documentation, and ongoing support for scale." }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center" style={{ width: '280px' }}>
                <h3 
                  className="mb-3 text-[20px] leading-[28px]"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[14px] leading-[20px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden w-[80%]">
          {[
            { title: "Understand", desc: "Deep dive into your product, users, and business context.", iconType: "circle-outline" },
            { title: "Define", desc: "Clear problem statements, success metrics, and scope.", iconType: "triangle" },
            { title: "Design", desc: "Iterative UX, strong systems thinking, and rapid validation.", iconType: "triangle" },
            { title: "Enable", desc: "Clean handoffs, documentation, and ongoing support for scale.", iconType: "circle-filled" }
          ].map((step, index, arr) => (
            <div key={index} className="flex items-start gap-4">
              {/* Icon and Line Column */}
              <div className="flex flex-col items-center">
                {/* Icon */}
                {step.iconType === "circle-outline" && (
                  <div 
                    className="w-8 h-8 rounded-full flex-shrink-0"
                    style={{ 
                      border: '2px solid #F06058',
                      backgroundColor: '#0B0C0E',
                    }}
                  />
                )}
                {step.iconType === "triangle" && (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                    <path d="M8 6L8 26L24 16L8 6Z" stroke="#F06058" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#0B0C0E"/>
                  </svg>
                )}
                {step.iconType === "circle-filled" && (
                  <div 
                    className="w-8 h-8 rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#F06058' }}
                  />
                )}
                {/* Vertical Line (except for last item) */}
                {index < arr.length - 1 && (
                  <div 
                    className="w-[2px] flex-1 min-h-[80px]"
                    style={{ 
                      background: 'linear-gradient(180deg, rgba(240, 96, 88, 0.6), rgba(240, 96, 88, 0.6))',
                    }}
                  />
                )}
              </div>
              
              {/* Content Column */}
              <div className="flex flex-col pb-8">
                <h3 
                  className="mb-2 text-[20px] leading-[28px]"
                  style={{
                    fontFamily: 'Sora, sans-serif',
                    fontWeight: 600,
                    color: '#ffffff',
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-[14px] leading-[22px]"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Curious Squad Section */}
      <section 
        className="flex items-center justify-center px-6 pt-[60px] md:pb-[144px]"
        style={{
          width: '100%',
          backgroundColor: '#0B0C0E',
        }}
      >
        <div 
          className="relative flex flex-col md:flex-row md:items-center w-full max-w-[1280px]"
        >
          {/* Left Content */}
          <div className="w-full md:w-[500px] md:flex-shrink-0 mb-8 md:mb-0">
            <h2 
              className="mb-6 md:mb-6 text-[28px] leading-[36px] md:text-[36px] md:leading-[48px]"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              The Curious Squad
            </h2>
            {/* Mobile Subtitle */}
            <p 
              className="md:hidden mb-9 md:mb-6 text-[20px] md:text-[16px] leading-[24px] tracking-[0.1px]"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#D5D7DD',
              }}
            >
              Structured. Collaborative. Outcome-Driven.
            </p>
            <p 
              className="mb-6 text-[18px] leading-[22px] md:text-[16px] md:leading-[24px] tracking-[0.1px] md:text-[16px]"
              style={{
                // fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                color: '#D5D7DD',
              }}
            >
              We are a Curiously Obsessed Squad; designers, researchers, builders, and thinkers who are driven by learning and experimentation.
            </p>
            <p 
              className="mb-4 text-[18px] leading-[24px] tracking-[0.1px] md:text-[16px]"
              style={{
                // fontFamily: 'Inter, sans-serif',
                fontWeight: 100,
                color: '#D5D7DD',
              }}
            >
              Our squad:
            </p>
            <ul className="space-y-1">
              {[
                "Experiments daily with AI tools and workflows",
                "Questions defaults and challenges assumptions",
                "Designs systems, not just interfaces",
                "Stays stupidly curious about what's next"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-[16px] md:text-[14px] leading-[28px] md:text-[16px] md:leading-[24px] tracking-[0.1px]"
                  style={{
                    fontWeight: 400,
                    color: '#D5D7DD',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Image Collage */}
          <div className="md:hidden w-full mt-8 relative" style={{ height: '420px' }}>
            {/* Top-left image */}
            <img 
              src={img3} 
              alt="Team collaboration 1" 
              className="absolute object-cover"
              style={{ 
                width: '45%', 
                height: '150px', 
                top: '0', 
                left: '0',
                borderTopLeftRadius: '12px',
                borderTopRightRadius: '24px',
                borderBottomRightRadius: '24px',
                borderBottomLeftRadius: '24px',
                zIndex: 1,
              }}
            />
            
            {/* Top-right image - OVERLAYS img4 */}
            <img 
              src={img2} 
              alt="Team collaboration 2" 
              className="absolute object-cover"
              style={{ 
                width: '53%', 
                height: '220px', 
                top: '0', 
                right: '0',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                borderBottomRightRadius: '24px',
                borderBottomLeftRadius: '60px',
                zIndex: 2,
              }}
            />
            
            {/* Bottom-left image - with circular cutout */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: '60%',
                height: '200px',
                top: '170px',
                left: '0',
                borderRadius: '24px',
                zIndex: 1,
              }}
            >
              <img 
                src={img4} 
                alt="Team collaboration 3" 
                className="w-full h-full object-cover"
              />
              {/* Circular cutout */}
              <div
                className="absolute"
                style={{
                  top: '-70px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: '#0B0C0E',
                }}
              />
            </div>
            
            {/* Bottom-right image */}
            <img 
              src={img1} 
              alt="Team collaboration 4" 
              className="absolute object-cover"
              style={{ 
                width: '38%', 
                height: '130px', 
                bottom: '55px', 
                right: '0',
                borderTopLeftRadius: '24px',
                borderTopRightRadius: '24px',
                borderBottomRightRadius: '12px',
                borderBottomLeftRadius: '24px',
                zIndex: 1,
              }}
            />
          </div>

          {/* Desktop Image Collage */}
          <div className="hidden md:block relative ml-auto" style={{ width: '669px', height: '410px' }}> 
            {/* Top-left image (smaller) */}
            <img 
                src={img3} 
                alt="Team collaboration 1" 
                style={{ 
                position: 'absolute', 
                width: '290px', 
                height: '180px', 
                top: '0px', 
                left: '0px', 
                borderTopLeftRadius: '12px', 
                borderTopRightRadius: '36px', 
                borderBottomRightRadius: '36px', 
                borderBottomLeftRadius: '36px', 
                objectFit: 'cover',
                zIndex: 1,
                }} 
            />

            {/* Bottom-left image - with circular cutout - BEHIND img2 */}
            <div
                style={{
                position: 'absolute',
                width: '400px',
                height: '210px',
                top: '200px',
                left: '0px',
                borderRadius: '36px',
                overflow: 'hidden',
                zIndex: 1,
                }}
            >
                <img 
                src={img4} 
                alt="Team collaboration 3" 
                style={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover', 
                }} 
                />
                {/* Circular cutout with 22px gap from img2 */}
                <div
                style={{
                    position: 'absolute',
                    top: '-85px',
                    right: '-56px',
                    width: '161px',
                    height: '160px',
                    borderRadius: '50%',
                    background: 'black',
                }}
                />
            </div>

            {/* Top-right image - OVERLAYS img4 - fully visible */}
            <img 
                src={img2} 
                alt="Team collaboration 2" 
                style={{ 
                position: 'absolute', 
                width: '365px', 
                height: '260px', 
                top: '0px', 
                left: '304px', 
                borderTopLeftRadius: '36px', 
                borderTopRightRadius: '36px', 
                borderBottomRightRadius: '36px', 
                borderBottomLeftRadius: '80px', 
                objectFit: 'cover',
                zIndex: 2,
                }} 
            />

            {/* Bottom-right image (smaller) */}
            <img 
                src={img1} 
                alt="Team collaboration 4" 
                style={{ 
                position: 'absolute', 
                width: '255px', 
                height: '135px', 
                bottom: '0px', 
                right: '0px', 
                borderTopLeftRadius: '36px', 
                borderTopRightRadius: '36px', 
                borderBottomRightRadius: '12px', 
                borderBottomLeftRadius: '36px', 
                objectFit: 'cover',
                zIndex: 1,
                }} 
            />
           </div>
        </div>
      </section>

      {/* Quote Section */}
      <section 
        className="flex items-center justify-center px-6 py-[40px] md:py-[60px] md:pb-[80px]"
        style={{
          width: '100%',
          backgroundColor: '#0B0C0E',
        }}
      >
        <h2 
          className="text-center text-[24px] leading-[32px] md:text-[36px] md:leading-[48px] max-w-[800px] md:max-w-[800px]"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            color: '#ffffff',
          }}
        >
          "We care deeply about craft. <br></br>We care even more about impact."
        </h2>
      </section>

      {/* CTA Section with Gradient Border */}
      <ContactFooter 
        title="We collaborate closely with founders and teams to understand challenges, align priorities, and explore how thoughtful design can unlock measurable business growth."
        subtitle="Thinking of partnering beyond just execution?"
        buttonText="Let’s Connect"
      />
    </main>
  );
}

