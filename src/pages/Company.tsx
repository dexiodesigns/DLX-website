import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
    <main className="bg-[#0B0C0E] text-white min-h-screen font-['Inter']">
      {/* Hero Section with Video Background */}
      <section className="relative flex flex-col items-center overflow-hidden">
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
        
        {/* Hero Content Container */}
        <div 
          className="relative z-10 text-center flex flex-col items-center justify-center"
          style={{ 
            width: '1280px',
            maxWidth: '100%',
            height: '552px',
            gap: '12px',
            paddingTop: '144px',
            marginTop: '76px',
          }}
        >
          <div className="mx-auto">
            <h1 
              className="mb-2"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
            >
              Designing for SaaS that is
            </h1>
            <h2 
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '48px',
                lineHeight: '60px',
                letterSpacing: '0%',
                textAlign: 'center',
              }}
            >
              <span className="bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#f97316] bg-clip-text text-transparent">
                no longer built only for humans.
              </span>
            </h2>
          </div>
          
          {/* Description */}
          <div 
            className="mx-auto"
            style={{ maxWidth: '1280px', minHeight: '48px' }}
          >
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed">
              Every modern user works alongside AI and Dexio LabX designs Human&lt;&gt;AI systems that deliver real
              <br className="hidden md:block" />
              value inside SaaS products.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div 
            className="flex items-center justify-center mx-auto"
            style={{ 
              maxWidth: '444px',
              height: '72px',
              gap: '24px',
              paddingTop: '24px'
            }}
          >
            <Link
              to="/work"
              className="flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition whitespace-nowrap"
              style={{ height: '48px' }}
            >
              Explore Our Work
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2 border border-zinc-600 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition whitespace-nowrap"
              style={{ height: '48px' }}
            >
              Talk To An Expert
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Our Vision Section - Inside Video Background */}
        <div 
          className="relative z-10 flex items-center justify-center px-6"
          style={{
            width: '100%',
            marginTop: '144px',
            paddingBottom: '144px',
          }}
        >
          <div 
            className="flex items-center justify-between"
            style={{
              width: '1280px',
              maxWidth: '100%',
              minHeight: '288px',
              gap: '12px',
            }}
          >
            {/* Video on Left */}
            <div 
              className="relative overflow-hidden rounded-lg"
              style={{ 
                width: '604px', 
                height: '288px',
                flexShrink: 0,
              }}
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
            
            {/* Content on Right */}
            <div 
              className="flex flex-col"
              style={{
                width: '604px',
                height: '288px',
                gap: '12px',
              }}
            >
              <h2 
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '36px',
                  lineHeight: '48px',
                  letterSpacing: '0%',
                  color: '#ffffff',
                }}
              >
                Our vision is to help product teams move beyond usability and build for:
              </h2>
              
              {/* Bullet Points */}
              <ul className="space-y-3 mt-2">
                {[
                  "Shared context between user and AI",
                  "Clear decision ownership",
                  "Reduced cognitive load",
                  "Scalable, AI-assisted workflows"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '24px',
                      letterSpacing: '0%',
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
      </section>

      {/* We Design Products Section */}
      <section 
        className="flex flex-col items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '80px',
          paddingBottom: '144px',
          backgroundColor: '#0B0C0E',
        }}
      >
        {/* Section Title */}
        <h2 
          className="text-center mb-12"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '60px',
            letterSpacing: '0%',
            color: '#ffffff',
            maxWidth: '800px',
          }}
        >
          We design products that think with the user, not around them.
        </h2>

        {/* Three Cards Container */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          style={{
            width: '1280px',
            maxWidth: '100%',
          }}
        >
          {/* Card 1 - Experiences Designed Around User Intent */}
          <div 
            className="flex flex-col p-8 rounded-2xl bg-zinc-900 border border-white/5"
          >
            {/* Blue Icon - Person with circles */}
            <div className="mb-6">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="16" r="8" stroke="#60A5FA" strokeWidth="2" fill="none"/>
                <path d="M32 28V36" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 44H40" stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
                <ellipse cx="32" cy="52" rx="16" ry="6" stroke="#60A5FA" strokeWidth="2" fill="none"/>
                <circle cx="32" cy="52" r="3" fill="#60A5FA"/>
              </svg>
            </div>
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
                color: '#ffffff',
              }}
            >
              Experiences Designed Around User Intent
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              We design interfaces that understand user context, anticipate next actions, and surface the right guidance at the right moment.
            </p>
          </div>

          {/* Card 2 - Human-Led, AI-Assisted Workflows */}
          <div 
            className="flex flex-col p-8 rounded-2xl bg-zinc-900 border border-white/5"
          >
            {/* Red/Orange Icon - Connected nodes */}
            <div className="mb-6">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              className="mb-4"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
                color: '#ffffff',
              }}
            >
              Human-Led, AI-Assisted Workflows
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              AI supports decisions, automates complexity, and amplifies human judgment, without taking control away from the user.
            </p>
          </div>

          {/* Card 3 - Systems That Learn And Scale */}
          <div 
            className="flex flex-col p-8 rounded-2xl bg-zinc-900 border border-white/5"
          >
            {/* Cyan Icon - Brain */}
            <div className="mb-6">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 20C20 20 16 24 16 28C16 32 18 34 18 34C14 36 14 42 18 44C18 48 22 52 28 52H36C42 52 46 48 46 44C50 42 50 36 46 34C46 34 48 32 48 28C48 24 44 20 40 20" stroke="#22D3EE" strokeWidth="2" fill="none"/>
                <path d="M32 20V52" stroke="#22D3EE" strokeWidth="2"/>
                <path d="M24 28C26 28 28 30 28 32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 28C38 28 36 30 36 32" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M24 40C26 40 28 38 28 36" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
                <path d="M40 40C38 40 36 38 36 36" stroke="#22D3EE" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 
              className="mb-4"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '32px',
                color: '#ffffff',
              }}
            >
              Systems That Learn And Scale
            </h3>
            <p 
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
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
        className="flex flex-col items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '14px',
          paddingBottom: '144px',
          backgroundColor: '#0B0C0E',
        }}
      >
        {/* Section Title */}
        <h2 
          className="text-center mb-4"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '60px',
            color: '#ffffff',
          }}
        >
          How We Work
        </h2>
        
        {/* Subtitle */}
        <p 
          className="text-center mb-16"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '28px',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          Structured. Collaborative. Outcome-Driven.
        </p>

        {/* Timeline Container */}
        <div 
          className="flex flex-col items-center"
          style={{
            width: '1280px',
            maxWidth: '100%',
          }}
        >
          {/* Timeline Line with Icons */}
          <div className="relative flex items-center justify-between mb-8" style={{ width: '100%' }}>
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
            
            {/* Triangle Icon 1 - with line passing through */}
            <div className="flex-shrink-0 relative z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4L20 12L6 20V4Z" stroke="#F06058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#0B0C0E"/>
              </svg>
            </div>
            
            {/* Triangle Icon 2 - with line passing through */}
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

          {/* Step Labels */}
          <div className="flex items-start justify-between w-full">
            {/* Step 1 - Understand */}
            <div className="flex flex-col items-center text-center" style={{ width: '280px' }}>
              <h3 
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#ffffff',
                }}
              >
                Understand
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Deep dive into your product, users, and business context.
              </p>
            </div>

            {/* Step 2 - Define */}
            <div className="flex flex-col items-center text-center" style={{ width: '280px' }}>
              <h3 
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#ffffff',
                }}
              >
                Define
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Clear problem statements, success metrics, and scope.
              </p>
            </div>

            {/* Step 3 - Design */}
            <div className="flex flex-col items-center text-center" style={{ width: '280px' }}>
              <h3 
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#ffffff',
                }}
              >
                Design
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Iterative UX, strong systems thinking, and rapid validation.
              </p>
            </div>

            {/* Step 4 - Enable */}
            <div className="flex flex-col items-center text-center" style={{ width: '280px' }}>
              <h3 
                className="mb-3"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#ffffff',
                }}
              >
                Enable
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.7)',
                }}
              >
                Clean handoffs, documentation, and ongoing support for scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Curious Squad Section */}
      <section 
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '14px',
          paddingBottom: '144px',
          backgroundColor: '#0B0C0E',
        }}
      >
        <div 
          className="relative flex items-center"
          style={{
            width: '1280px',
            maxWidth: '100%',
            minHeight: '410px',
          }}
        >
          {/* Left Content */}
          <div style={{ width: '500px', flexShrink: 0 }}>
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '36px',
                lineHeight: '48px',
                color: '#ffffff',
              }}
            >
              The Curious Squad
            </h2>
            <p 
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '24px',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              We are a Curiously Obsessed Squad; designers, researchers, builders, and thinkers who are driven by learning and experimentation.
            </p>
            <p 
              className="mb-4"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                color: '#ffffff',
              }}
            >
              Our squad:
            </p>
            <ul className="space-y-3">
              {[
                "Experiments daily with AI tools and workflows",
                "Questions defaults and challenges assumptions",
                "Designs systems, not just interfaces",
                "Stays stupidly curious about what's next"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image Collage */}
          <div className="relative ml-auto" style={{ width: '669px', height: '410px', }} > 
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
                zIndex: 2, // Higher z-index to overlay img4
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
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          paddingBottom: '100px',
          backgroundColor: '#0B0C0E',
        }}
      >
        <h2 
          className="text-center"
          style={{
            fontFamily: 'Sora, sans-serif',
            fontWeight: 600,
            fontSize: '36px',
            lineHeight: '48px',
            color: '#ffffff',
            maxWidth: '800px',
          }}
        >
          "We care deeply about craft.<br />
          We care even more about impact."
        </h2>
      </section>

      {/* CTA Section with Gradient Top Border */}
      <section 
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '60px',
          paddingBottom: '144px',
          backgroundColor: '#0B0C0E',
        }}
      >
        <div 
          className="relative overflow-hidden"
          style={{
            width: '1280px',
            maxWidth: '100%',
            borderRadius: '24px',
          }}
        >
          {/* Gradient border at top only */}
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(225deg, #F4DC7C -0.1%, #F06058 39.94%, #4044E8 100%)',
              borderTopLeftRadius: '24px',
              borderTopRightRadius: '24px',
            }}
          />
          
          <div style={{ padding: '72px' }}>
            <p 
              className="mb-6"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '30px',
                letterSpacing: '0%',
                color: '#D5D7DD',
                width: '1136px',
                maxWidth: '100%',
              }}
            >
              We collaborate closely with founders and teams to understand challenges, align priorities, and explore how thoughtful design can unlock measurable business growth.
            </p>
            <div className="flex items-center justify-between">
              <h3 
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 700,
                  fontSize: '32px',
                  lineHeight: '48px',
                  letterSpacing: '0%',
                  color: '#F1F2F4',
                  width: '763px',
                  maxWidth: '100%',
                }}
              >
                Thinking of partnering beyond just execution?
              </h3>
              <a
                href="/contact"
                className="flex items-center justify-center font-medium transition hover:opacity-90"
                style={{
                  width: '214px',
                  height: '56px',
                  gap: '12px',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  borderRadius: '24px',
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(0deg, #F06058, #F06058)',
                  color: '#ffffff',
                }}
              >
                Let's connect
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 9H14M14 9L9 4M14 9L9 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

