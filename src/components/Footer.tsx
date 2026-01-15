import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../assets/Logo";
import { Linkedin, Youtube, Instagram, Facebook, MessageCircle, ChevronDown } from "lucide-react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>("services");

  const footerLinks = {
    services: [
      { name: "UX Audit", href: "/services/ux-audit" },
      { name: "UX Research", href: "/services/ux-research" },
      { name: "UX Design", href: "/services/ux-design" },
      { name: "Marketing Designs", href: "/services/marketing-designs" },
      { name: "Motion Graphics", href: "/services/motion-graphics" },
      { name: "Next-Gen Experience", href: "/services/next-gen-ux" },
    ],
    aiProducts: [
      { name: "Mr. RYT", href: "/products/mr-ryt" },
      { name: "Vaahi", href: "/products/vaahi" },
    ],
    quickLinks: [
      { name: "Academy", href: "/academy" },
      { name: "Resources", href: "/resources" },
      { name: "Company", href: "/company" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Terms and Conditions", href: "/terms-and-conditions" },
    ],
  };

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <MessageCircle size={18} />, href: "#", label: "WhatsApp" },
  ];

  const toggleSection = (section: string, isEnabled: boolean) => {
    if (!isEnabled) return;
    setOpenSection(openSection === section ? null : section);
  };

  // Mobile Accordion Item Component
  const MobileAccordion = ({ 
    title, 
    sectionKey, 
    links, 
    isEnabled = true 
  }: { 
    title: string; 
    sectionKey: string; 
    links: { name: string; href: string }[]; 
    isEnabled?: boolean;
  }) => {
    const isOpen = openSection === sectionKey && isEnabled;
    
    return (
      <div className="border-b border-white/5 last:border-b-0">
        <button
          onClick={() => toggleSection(sectionKey, isEnabled)}
          className={`w-full flex items-center justify-between py-4 ${
            isEnabled ? 'cursor-pointer' : 'cursor-not-allowed'
          }`}
          disabled={!isEnabled}
        >
          <span 
            className={`text-sm font-semibold uppercase tracking-wider ${
              isEnabled ? 'text-white' : 'text-zinc-500'
            }`}
          >
            {title}
          </span>
          <ChevronDown 
            size={20} 
            className={`transition-transform ${isOpen ? 'rotate-180' : ''} ${
              isEnabled ? 'text-zinc-400' : 'text-zinc-600'
            }`}
          />
        </button>
        
        {isOpen && isEnabled && (
          <ul className="flex flex-col gap-3 pb-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <footer className="bg-[#0B0C0E] border-t border-white/10 text-white font-['Inter'] relative">
      {/* Gradient overlay at the top of the footer */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(90deg, #F06058 0%, #A855F7 50%, #3B82F6 100%)',
          opacity: 0.5,
        }}
      />

      {/* Desktop Layout */}
      <div className="hidden md:block max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex justify-between items-start" style={{ gap: '72px' }}>
          <div className="flex gap-[72px]" style={{ width: '715px' }}>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                AI Products
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.aiProducts.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Legal
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-end gap-8">
            <Logo />
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden px-6 py-8">
        {/* Accordion Sections */}
        <div className="mb-8">
          <MobileAccordion 
            title="SERVICES" 
            sectionKey="services" 
            links={footerLinks.services}
            isEnabled={true}
          />
          <MobileAccordion 
            title="AI PRODUCTS" 
            sectionKey="aiProducts" 
            links={footerLinks.aiProducts}
            isEnabled={false}
          />
          <MobileAccordion 
            title="QUICK LINKS" 
            sectionKey="quickLinks" 
            links={footerLinks.quickLinks}
            isEnabled={false}
          />
          <MobileAccordion 
            title="LEGAL" 
            sectionKey="legal" 
            links={footerLinks.legal}
            isEnabled={false}
          />
        </div>

        {/* Social Icons and Logo */}
        <div className="flex items-end justify-between">
          <div className="flex flex-wrap gap-3" style={{ maxWidth: '180px' }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-all"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex-shrink-0">
            <Logo />
          </div>
        </div>
      </div>

      {/* Copyright - Both Desktop and Mobile */}
      <div className="border-t border-white/5 py-6 px-6">
        <p className="text-center text-sm text-zinc-500">
          Copyright © 2025 Dexio LabX Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
