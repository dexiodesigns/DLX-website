import React, { useState, useEffect, useRef } from "react";
import { SunMoon, Sun, Moon, ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Menu, X, FileSearch, Search, BarChart2, PenTool, Wand2, TrendingUp, PlayCircle } from "lucide-react";
import { Logo } from "./../assets/Logo";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isServicesOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const services = [
    { 
      icon: <FileSearch className="w-6 h-6" />, 
      title: "UX Audit", 
      desc: "Identify Usability Gaps, Friction Points, And Conversion Blockers Across Your Product." 
    },
    { 
      icon: <PenTool className="w-6 h-6" />, 
      title: "UX Design", 
      desc: "Design Intuitive, Scalable Product Experiences That Balance User Needs With Business Goals." 
    },
    { 
      icon: <PlayCircle className="w-6 h-6" />, 
      title: "Motion Graphics", 
      desc: "Explain Products And Stories Through Motion. Clear, Engaging, And Conversion-Oriented." 
    },
    { 
      icon: <Search className="w-6 h-6" />, 
      title: "UX Research", 
      desc: "Understand Real User Needs And Behaviors Through Validated Research." 
    },
    { 
      icon: <Wand2 className="w-6 h-6" />, 
      title: "Next-Gen Experience Design", 
      desc: "Design Intelligent, Immersive, And Future-Ready Experiences For Emerging Technologies." 
    },
    { 
      icon: <BarChart2 className="w-6 h-6" />, 
      title: "Data-Driven UX", 
      desc: "Design Intelligent, Immersive, And Future-Ready Experiences For Emerging Technologies." 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Growth-Focused Marketing Design", 
      desc: "Design Intelligent, Immersive, And Future-Ready Experiences For Emerging Technologies." 
    },
  ];

  const navItems = [
    { name: "Services", hasSubmenu: true },
    { name: "Products", hasSubmenu: false },
    { name: "Academy", hasSubmenu: false },
    { name: "Resources", hasSubmenu: false },
    { name: "Company", hasSubmenu: false },
    { name: "Contact", hasSubmenu: false },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md text-white font-['Inter']">
        <div className="px-6 md:px-[200px] py-6 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <Logo/>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center text-sm font-medium">
                <li className="relative">
                  <button 
                    ref={buttonRef}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="hover:text-white/80 cursor-pointer transition flex items-center gap-1 outline-none"
                  >
                    Services 
                    {isServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </li>
                <li className="hover:text-white/80 cursor-pointer transition">Products</li>
                <li className="hover:text-white/80 cursor-pointer transition">Academy</li>
                <li className="hover:text-white/80 cursor-pointer transition">Resources</li>
                <li className="hover:text-white/80 cursor-pointer transition">Company</li>
                <li className="hover:text-white/80 cursor-pointer transition">Contact</li>
            </ul>

            {/* Desktop Theme Toggle */}
            <div className="bg-zinc-800 p-1 rounded-full flex items-center gap-2 border border-zinc-700 ml-4">
                <div className="p-1 rounded-full bg-zinc-700"><SunMoon size={16} /></div>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <button 
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Desktop Services Mega Menu */}
      {isServicesOpen && (
        <div 
          ref={dropdownRef}
          className="hidden md:flex fixed top-[76px] left-0 w-full z-40 bg-black/50 backdrop-blur-md text-white font-['Inter'] border-t border-white/10 justify-center"
          style={{ 
            height: '384px',
          }}
        >
          <div 
            className="px-6 md:px-[200px] py-6 h-full w-full grid grid-cols-3 gap-x-12 gap-y-6 overflow-y-auto"
          >
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group">
                <div className="mt-1 text-white/90 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">{service.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B0C0E] text-white font-['Inter']">
          {/* Mobile Menu Header */}
          <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
            <Logo />
            <button 
              onClick={closeMobileMenu}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Mobile Menu Content */}
          {!isMobileServicesOpen ? (
            // Main Menu
            <div className="flex flex-col h-[calc(100vh-88px)]">
              <div className="flex-1 px-6 py-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      if (item.hasSubmenu) {
                        setIsMobileServicesOpen(true);
                      } else {
                        closeMobileMenu();
                      }
                    }}
                    className="w-full flex items-center justify-between py-4 text-lg font-medium hover:text-white/80 transition border-b border-white/5"
                  >
                    {item.name}
                    {item.hasSubmenu && <ChevronRight size={20} />}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Services Submenu
            <div className="flex flex-col h-[calc(100vh-88px)] overflow-y-auto">
              {/* Back Button */}
              <button
                onClick={() => setIsMobileServicesOpen(false)}
                className="px-6 py-4 flex items-center gap-2 text-white hover:text-white/80 transition border-b border-white/10"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>

              {/* Services Header */}
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold">Services</h2>
              </div>

              {/* Services List */}
              <div className="px-6 pb-6 space-y-6">
                {services.map((service, index) => (
                  <div key={index} className="flex gap-4 cursor-pointer group">
                    <div className="mt-1 text-white/90 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{service.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}