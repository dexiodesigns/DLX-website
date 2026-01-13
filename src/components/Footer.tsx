import React from "react";
import { Logo } from "../assets/Logo";
import { Linkedin, Youtube, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
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

  return (
    <footer className="bg-[#0B0C0E] border-t border-white/10 text-white font-['Inter']">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        <div className="flex justify-between items-start" style={{ gap: '72px' }}>
          <div className="flex gap-[72px]" style={{ width: '715px' }}>
            <div className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
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
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
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

      <div className="border-t border-white/5 py-6">
        <p className="text-center text-sm text-zinc-500">
          Copyright © 2025 Dexio LabX Private Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

