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
    <main className="bg-[#0B0C0E] text-white min-h-screen pt-[164px] font-['Inter']">
      {/* Sticky Service Navigation - 24px gap from main navbar */}
      <div 
        className="fixed top-[100px] left-0 right-0 z-40 flex justify-center px-6 py-4"
        style={{ backgroundColor: '#0B0C0E' }}
      >
        <div 
          className="flex items-center justify-center bg-zinc-900/80 border border-zinc-800"
          style={{
            maxWidth: '989px',
            width: '100%',
            height: '64px',
            borderRadius: '28px',
            padding: '8px',
          }}
        >
          {serviceNavItems.map((item) => (
            <Link
              key={item.slug}
              to={item.href}
              className={`px-6 py-3 rounded-[20px] text-sm font-medium transition-all whitespace-nowrap ${
                item.slug === slug
                  ? "bg-white text-black"
                  : "bg-transparent text-zinc-400 hover:text-white"
              }`}
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

      <section className="max-w-4xl mx-auto px-6 text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
        <p className={`text-lg md:text-xl font-medium mb-4 bg-gradient-to-r ${service.subtitleGradient} bg-clip-text text-transparent`}>
          {service.subtitle}
        </p>
        <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
          {service.description}
        </p>
        <Link
          to={service.ctaLink}
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition"
        >
          {service.ctaText}
          <ArrowRight size={18} />
        </Link>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          {service.statsHeading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.stats.map((stat, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-zinc-400 text-sm">{stat.label}</p>
              </div>
              <div className="text-blue-400">
                {getIcon(stat.icon)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#1a1d4d] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {service.challengesHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.challenges.map((challenge, index) => (
              <div
                key={index}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4 text-blue-300">
                  {getIcon(challenge.icon)}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {challenge.title}
                </h3>
                <p className="text-zinc-300 text-sm">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {service.processHeading}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            {service.processSubheading}
          </p>
        </div>

        <p className="text-center text-zinc-500 text-sm mb-8">
          Structured & Outcome-Focused Approach
        </p>

        <div className="relative mb-12">
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-zinc-700">
            <div 
              className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-orange-500"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4 relative">
            {service.processSteps.map((step, index) => (
              <div key={index} className="text-center pt-10">
                <div className="absolute top-2 left-1/2 -translate-x-1/2">
                  {index === 0 && (
                    <div className="w-3 h-3 rounded-full border-2 border-zinc-500 bg-[#0B0C0E]" />
                  )}
                  {index > 0 && index < service.processSteps.length - 1 && (
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-zinc-500 rotate-90" />
                  )}
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div 
          className="relative rounded-3xl p-12 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(168, 85, 247, 0.1) 50%, rgba(59, 130, 246, 0.1) 100%)',
          }}
        >
          <div 
            className="absolute inset-0 rounded-3xl p-[1px]"
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #a855f7 50%, #3b82f6 100%)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {service.ctaBoxHeading}
          </h2>
          <p className="text-zinc-400 mb-8">
            {service.ctaBoxSubheading}
          </p>
          <Link
            to={service.ctaLink}
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition"
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

