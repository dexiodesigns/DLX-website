import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Menu, X, FileSearch, Search, BarChart2, PenTool, Wand2, TrendingUp, PlayCircle } from "lucide-react";
import { Logo } from "./../assets/Logo";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === "#") return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  // Check if services is active (any service page)
  const isServicesActive = location.pathname.startsWith("/services");

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

  const handleServiceClick = (slug: string) => {
    setIsServicesOpen(false);
    closeMobileMenu();
    navigate(`/services/${slug}`);
  };

  const services = [
    { 
      icon: <FileSearch className="w-6 h-6" />, 
      title: "UX Audit",
      slug: "ux-audit",
      desc: "Identify Usability Gaps, Friction Points, And Conversion Blockers Across Your Product." 
    },
    { 
      icon: <Search className="w-6 h-6" />, 
      title: "UX Research",
      slug: "ux-research",
      desc: "Understand Real User Needs And Behaviors Through Validated Research." 
    },
    { 
      icon: <BarChart2 className="w-6 h-6" />, 
      title: "Data-Driven UX",
      slug: "data-driven-ux",
      desc: "Turn Product Data Into Better Experiences And UX Decisions." 
    },
    { 
      icon: <PenTool className="w-6 h-6" />, 
      title: "UX Design",
      slug: "ux-design",
      desc: "Design Intuitive, Scalable Product Experiences That Balance User Needs With Business Goals." 
    },
    { 
      icon: <Wand2 className="w-6 h-6" />, 
      title: "Next-Gen Experience Design",
      slug: "next-gen-ux",
      desc: "Design Intelligent, Immersive, And Future-Ready Experiences For Emerging Technologies." 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Growth-Focused Marketing Design",
      slug: "marketing-design",
      desc: "High-impact creatives crafted to drive attention, engagement, and conversions." 
    },
    { 
      icon: <PlayCircle className="w-6 h-6" />, 
      title: "Motion Graphics",
      slug: "motion-graphics",
      desc: "Explain Products And Stories Through Motion. Clear, Engaging, And Conversion-Oriented." 
    },
  ];

  const navItems = [
    { name: "Services", hasSubmenu: true, href: "#" },
    // { name: "Products", hasSubmenu: false, href: "/products" },
    // { name: "Academy", hasSubmenu: false, href: "/academy" },
    // { name: "Resources", hasSubmenu: false, href: "/resources" },
    { name: "Company", hasSubmenu: false, href: "/company" },
    { name: "Contact", hasSubmenu: false, href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0E0F11]/84 md:bg-[#0B0C0E]/85 backdrop-blur-md text-white font-['Inter']">
        <div className="px-5 py-4 md:px-[200px] md:py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo width="100" height="35" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center text-sm font-medium">
                <li className="relative text-[16px] font-[400]">
                  <button 
                    ref={buttonRef}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`cursor-pointer transition flex items-center gap-1 outline-none ${
                      isServicesActive ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span className="relative">
                      Services
                      {isServicesActive && (
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#6366f1]"
                          style={{ width: '40px', height: '4px', borderRadius: '4px' }}
                        />
                      )}
                    </span>
                    {isServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </li>
                {navItems.slice(1).map((item) => (
                  <li key={item.name} className="relative text-[16px] font-[400]">
                    <Link
                      to={item.href}
                      className={`cursor-pointer transition ${
                        isActive(item.href) ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {isActive(item.href) && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#6366f1]"
                        style={{ width: '40px', height: '4px', borderRadius: '4px' }}
                      />
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <button 
            className="md:hidden py-[12px] px-[16px] md:p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {isServicesOpen && (
        <div 
          ref={dropdownRef}
          className="hidden md:flex fixed top-[76px] left-0 w-full z-40 bg-[#22252A]/30 backdrop-blur-md text-white font-['Inter'] border-t border-white/10 justify-center py-6"
          style={{ 
            height: '466px',
          }}
        >
          <div 
            className="px-6 md:px-[200px] py-6 h-full w-full grid grid-cols-3 gap-x-12 gap-y-12 overflow-y-auto"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                onClick={() => handleServiceClick(service.slug)}
                className="flex gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="mt-1 text-white/90 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#F1F2F4' }}>{service.title}</h3>
                  <p style={{ overflow: 'hidden', color: '#D5D7DD', textOverflow: 'ellipsis', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '18px' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B0C0E] text-white font-['Inter']">
          <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
            <Logo width="100" height="35" />
            <button 
              onClick={closeMobileMenu}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>

          {!isMobileServicesOpen ? (
            <div className="flex flex-col h-[calc(100vh-88px)]">
              <div className="flex-1 px-6 py-4">
                {navItems.map((item, index) => (
                  item.hasSubmenu ? (
                    <button
                      key={index}
                      onClick={() => setIsMobileServicesOpen(true)}
                      className="w-full flex items-center justify-between py-[12px] text-lg font-medium hover:text-white/80 transition border-b border-white/5"
                    >
                      {item.name}
                      <ChevronRight size={20} />
                    </button>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="w-full flex items-center justify-between py-[12px] text-lg font-medium hover:text-white/80 transition border-b border-white/5"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-[calc(100vh-88px)] overflow-y-auto">
              <button
                onClick={() => setIsMobileServicesOpen(false)}
                className="px-6 py-4 flex items-center gap-2 text-white hover:text-white/80 transition border-b border-white/10"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <div className="px-6 py-4">
                <h2 className="text-xl font-semibold">Services</h2>
              </div>
              <div className="px-6 pb-6 space-y-6">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleServiceClick(service.slug)}
                    className="flex gap-4 cursor-pointer group"
                  >
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