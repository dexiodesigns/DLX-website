import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Settings, MessageCircle, Sparkles, Focus, MousePointer, PenTool, Heart, ThumbsUp, Award, BarChart2, Scale, ChevronUp, ChevronDown, TrendingDown, AlignLeft, RefreshCw, GitBranch, CircleDot, Zap, Brain, GitPullRequest, LogIn, MessageSquare, Grid3x3, Lightbulb, Maximize, Circle, PlayCircle, Cpu, TrendingUp, Cloud, MessageSquareOff } from "lucide-react";
import { getServiceBySlug, serviceNavItems, ServiceData } from "../data/servicesData";
import Footer from "../components/Footer";

const iconMap: { [key: string]: React.ReactNode } = {
  CheckCircle: <CheckCircle className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  MessageCircle: <MessageCircle className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
  Focus: <Focus className="w-6 h-6" />,
  MousePointer: <MousePointer className="w-6 h-6" />,
  PenTool: <PenTool className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  ThumbsUp: <ThumbsUp className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  BarChart2: <BarChart2 className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  ChevronUp: <ChevronUp className="w-6 h-6" />,
  ChevronDown: <ChevronDown className="w-6 h-6" />,
  TrendingDown: <TrendingDown className="w-6 h-6" />,
  AlignLeft: <AlignLeft className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
  GitBranch: <GitBranch className="w-6 h-6" />,
  CircleDot: <CircleDot className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Brain: <Brain className="w-6 h-6" />,
  GitPullRequest: <GitPullRequest className="w-6 h-6" />,
  LogIn: <LogIn className="w-6 h-6" />,
  MessageSquare: <MessageSquare className="w-6 h-6" />,
  Grid3x3: <Grid3x3 className="w-6 h-6" />,
  Lightbulb: <Lightbulb className="w-6 h-6" />,
  Maximize: <Maximize className="w-6 h-6" />,
  Circle: <Circle className="w-6 h-6" />,
  PlayCircle: <PlayCircle className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Cloud: <Cloud className="w-6 h-6" />,
  MessageSquareOff: <MessageSquareOff className="w-6 h-6" />,
};

const getIcon = (iconName: string) => {
  return iconMap[iconName] || <Circle className="w-6 h-6" />;
};

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  // Scroll to top when service changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0B0C0E] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/" className="text-purple-400 hover:text-purple-300">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen pt-[100px] md:pt-[164px] font-['Inter']">
      {/* Sticky Service Navigation - Hidden on mobile, visible on desktop */}
      <div 
        className="hidden md:flex fixed top-[100px] left-0 right-0 z-40 justify-center px-6 py-4"
        style={{ backgroundColor: '#0B0C0E' }}
      >
        <div 
          className="flex items-center justify-center bg-zinc-900/80 border border-zinc-800"
          style={{
            maxWidth: '1110px',
            width: '100%',
            height: '64px',
            borderRadius: '28px',
            padding: '8px 16px',
          }}
        >
          {serviceNavItems.map((item, index) => (
            <Link
              key={item.slug}
              to={item.href}
              className={`px-6 py-3 rounded-[20px] text-sm font-medium transition-all whitespace-nowrap ${
                item.slug === slug
                  ? "bg-white text-black"
                  : "bg-transparent text-zinc-400 hover:text-white"
              } ${index === 0 ? 'ml-2' : ''} ${index === serviceNavItems.length - 1 ? 'mr-2' : ''}`}
              style={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-6 text-center py-[44px] md:py-12">
        <h1 
          className="text-[36px] leading-[44px] md:text-[48px] md:leading-[60px] font-bold mb-2 md:mb-4"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {service.title}
        </h1>
        <p 
          className={`text-[28px] leading-[36px] md:text-[32px] md:leading-[40px] font-semibold mb-4 md:mb-4 bg-gradient-to-r ${service.subtitleGradient} bg-clip-text text-transparent`}
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {service.subtitle}
        </p>
        <p 
          className="text-[16px] leading-[24px] md:text-lg text-zinc-400 max-w-2xl mx-auto mb-[36px] md:mb-8 px-2 md:px-0"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {service.description}
        </p>
        <Link
          to={service.ctaLink}
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition text-[16px] md:text-base"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
        >
          {service.ctaText}
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-[44px] md:py-16">
        <h2 
          className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] font-bold text-center mb-4 md:mb-12"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          {service.statsHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[26px] md:gap-6">
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/80 border border-zinc-800/50 rounded-[24px] md:rounded-2xl p-6 md:p-8 flex items-center justify-between"
            >
              <div>
                <p 
                  className="text-[24px] md:text-[36px] leading-[48px] md:text-4xl font-bold text-white mb-0 md:mb-3"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {stat.value}
                </p>
                <p 
                  className="text-[14px] leading-[24px] md:text-[20px] text-[#F1F2F4]-400"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.label}
                </p>
              </div>
              <div className="text-[#6366f1] flex justify-start items-start mb-[22px] md:mb-[38px]" style={{ width: '60px', height: '60px' }}>
                {stat.customSvg ? (
                  <div 
                    className="w-full h-full [&>svg]:w-full [&>svg]:h-full"
                    dangerouslySetInnerHTML={{ __html: stat.customSvg }} 
                  />
                ) : (
                  <div className="[&>svg]:w-[60px] [&>svg]:h-[60px]">
                    {getIcon(stat.icon)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section 
        className="py-12 md:py-16"
        style={{
          background: 'linear-gradient(0deg, rgba(11, 12, 14, 0.3), rgba(11, 12, 14, 0.3)), linear-gradient(0deg, #4044E8, #4044E8)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <h2 
            className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] font-bold text-center mb-10 md:mb-12"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {service.challengesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
            {service.challenges.map((challenge, index) => (
              <div
                key={index}
                className={`relative text-center p-4 md:p-8 ${
                  // Right border for first two columns on desktop
                  index % 3 !== 2 ? 'md:border-r md:border-white/15' : ''
                } ${
                  // Bottom border for first row on desktop
                  index < 3 ? 'md:border-b md:border-white/15' : ''
                }`}
              >
                <div className="flex justify-center items-center text-cyan-300">
                  {challenge.customSvg ? (
                    <div dangerouslySetInnerHTML={{ __html: challenge.customSvg }} />
                  ) : (
                    <div className="[&>svg]:w-16 [&>svg]:h-16">
                      {getIcon(challenge.icon)}
                    </div>
                  )}
                </div>
                <h3 
                  className="text-[18px] leading-[26px] md:text-lg font-semibold text-white mb-2"
                  style={{ fontFamily: 'Sora, sans-serif' }}
                >
                  {challenge.title}
                </h3>
                <p 
                  className="text-[14px] leading-[22px] md:text-sm text-blue-100/80"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-16">
        <div className="text-left md:text-center mb-8 md:mb-12">
          <h2 
            className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] font-bold mb-3 md:mb-4"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            {service.processHeading}
          </h2>
          <p 
            className="text-[14px] leading-[150%] max-w-2xl md:mx-auto"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#D5D7DD',
            }}
          >
            {service.processSubheading}
          </p>
          {/* Structured & Outcome-Focused Approach - Both views */}
          <p 
            className="text-[20px] leading-[28px] md:text-[24px] md:leading-[36px] mt-6 md:mt-8"
            style={{ 
              fontFamily: 'Sora, sans-serif',
              fontWeight: 400,
              textTransform: 'capitalize',
              color: '#676F7E',
            }}
          >
            Structured & Outcome-Focused Approach
          </p>
        </div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block">
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

          {/* Desktop Step Labels */}
          <div className="flex items-start justify-between w-full mb-12">
            {service.processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center" style={{ width: '280px' }}>
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
                  {step.title}
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
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden">
          <div className="relative">
            {service.processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 mb-8 last:mb-0">
                {/* Icon and Line */}
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  {index === 0 ? (
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 relative z-10"
                      style={{ 
                        border: '1.5px solid #F06058',
                        backgroundColor: '#0B0C0E',
                      }}
                    />
                  ) : index === service.processSteps.length - 1 ? (
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 relative z-10"
                      style={{ backgroundColor: '#F06058' }}
                    />
                  ) : (
                    <div className="flex-shrink-0 relative z-10">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L12 20L20 6H4Z" stroke="#F06058" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="#0B0C0E"/>
                      </svg>
                    </div>
                  )}
                  {/* Connecting Line */}
                  {index < service.processSteps.length - 1 && (
                    <div 
                      className="absolute top-6 left-1/2 -translate-x-1/2 w-[2px]"
                      style={{ 
                        height: '100px',
                        background: 'linear-gradient(180deg, rgba(240, 96, 88, 0.6), rgba(240, 96, 88, 0.6)), linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
                      }}
                    />
                  )}
                </div>
                {/* Content */}
                <div className="flex-1 pb-4">
                  <h3 
                    className="text-[18px] leading-[26px] font-semibold text-white mb-2"
                    style={{ fontFamily: 'Sora, sans-serif' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-[14px] leading-[20px] text-zinc-400"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-4 md:px-6 pt-12 pb-20 flex justify-center">
        <div 
          className="relative text-left md:text-center flex flex-col items-start md:items-center justify-center w-[335px] md:w-full md:max-w-[1280px] min-h-[258px] md:min-h-[310px] gap-6 rounded-[24px] md:rounded-[36px] p-6 md:p-[72px]"
          style={{
            background: 'linear-gradient(180deg, rgba(11, 12, 14, 0.5) 0%, rgba(11, 12, 14, 0) 100%)',
          }}
        >
          <div 
            className="absolute inset-0 rounded-[24px] md:rounded-[36px]"
            style={{
              padding: '2px',
              background: 'linear-gradient(225deg, #F4DC7C -0.1%, #F06058 39.94%, #4044E8 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          
          <h2 
            className="relative z-10 text-[24px] leading-[150%] md:text-[32px] md:leading-[140%] font-bold"
            style={{ 
              fontFamily: 'Sora, sans-serif',
              fontWeight: 700,
              color: '#F1F2F4',
            }}
          >
            {service.ctaBoxHeading}
          </h2>
          <p 
            className="relative z-10 text-[16px] leading-[150%]"
            style={{ 
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              color: '#D5D7DD',
            }}
          >
            {service.ctaBoxSubheading}
          </p>
          {/* Mobile Button */}
          <Link
            to={service.ctaLink}
            className="md:hidden relative z-10 inline-flex items-center justify-center hover:opacity-90 transition"
            style={{
              width: '232px',
              height: '46px',
              gap: '12px',
              paddingLeft: '24px',
              paddingRight: '24px',
              borderRadius: '16px',
              background: '#F1F2F4',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              textTransform: 'capitalize',
              color: '#0B0C0E',
            }}
          >
            {service.ctaBoxButtonText}
            <ArrowRight size={18} />
          </Link>
          {/* Desktop Button */}
          <Link
            to={service.ctaLink}
            className="hidden md:inline-flex relative z-10 items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition"
          >
            {service.ctaBoxButtonText}
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

