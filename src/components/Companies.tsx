import { useState } from "react";

// --- 1. Imports ---
import Algo from "../assets/companies/Algo.svg";
import AlgoHover from "../assets/companies/AlgoHover.svg";
import Beaconer from "../assets/companies/Beaconer.svg";
import BeaconerHover from "../assets/companies/BeaconerHover.svg";
import Bubble from "../assets/companies/Bubble.svg";
import BubbleHover from "../assets/companies/BubbleHover.svg";
import Buddy from "../assets/companies/Buddy.svg";
import BuddyHover from "../assets/companies/BuddyHover.svg";
import Dforth from "../assets/companies/Dforth.svg";
import DforthHover from "../assets/companies/DforthHover.svg";
import FlopHero from "../assets/companies/FlopHero.svg";
import FlopHeroHover from "../assets/companies/FlopHeroHover.svg";
import GameNation from "../assets/companies/GameNation.svg";
import GameNationHover from "../assets/companies/GameNationHover.png";
import Hirifi from "../assets/companies/Hirifi.svg";
import HirifiHover from "../assets/companies/HirifiHover.png";
import Kritivan from "../assets/companies/Kritivan.svg";
import KritivanHover from "../assets/companies/KritivanHover.svg";
import Miniature from "../assets/companies/Miniature.svg";
import MiniatureHover from "../assets/companies/MiniatureHover.svg";
import MotorQ from "../assets/companies/MotorQ.svg";
import MotorQHover from "../assets/companies/MotorQHover.svg";
import NearTail from "../assets/companies/NearTail.svg";
import NearTailHover from "../assets/companies/NearTailHover.svg";
import Route from "../assets/companies/Route.svg";
import RouteHover from "../assets/companies/RouteHover.svg";
import Treasure from "../assets/companies/Treasure.svg";
import TreasureHover from "../assets/companies/TreasureHover.svg";
import Vittae from "../assets/companies/Vittae.svg";
import VittaeHover from "../assets/companies/ViitaeHover.png";
import Wealthified from "../assets/companies/Wealthified.svg";
import WealthifiedHover from "../assets/companies/WealthifiedHover.svg";

// --- 2. Sub-component for individual hover logic (Desktop) ---
const LogoItem = ({
  defaultImg,
  hoverImg,
  alt,
  useGrayscaleFilter = false,
}: {
  defaultImg: string;
  hoverImg: string;
  alt: string;
  useGrayscaleFilter?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // For logos with mismatched image sizes (like GameNation), use CSS grayscale filter instead of image swap
  if (useGrayscaleFilter) {
    return (
      <div
        className="flex-shrink-0 min-w-[160px] h-16 flex items-center justify-center cursor-pointer relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={defaultImg}
            alt={alt}
            className={`h-8 w-auto object-contain transition-all duration-300 ${isHovered ? "opacity-100 grayscale-0" : "opacity-40 grayscale"}`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex-shrink-0 min-w-[160px] h-16 flex items-center justify-center cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Container to maintain size and handle the swap */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* DEFAULT IMAGE: Hidden on hover */}
        <img
          src={hoverImg}
          alt={alt}
          className={`h-8 w-auto object-contain transition-opacity duration-300 ${isHovered ? "opacity-0" : "opacity-40"}`}
        />

        {/* HOVER IMAGE: Absolute positioned to sit exactly on top, shown on hover */}
        <img
          src={defaultImg}
          alt={`${alt} hover`}
          className={`absolute h-8 w-auto object-contain transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};

// --- 3. Mobile Logo Item (Tap to reveal colored version) ---
const MobileLogoItem = ({
  defaultImg,
  hoverImg,
  alt,
  scale = 1,
}: {
  defaultImg: string;
  hoverImg: string;
  alt: string;
  scale?: number;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className="flex items-center justify-center cursor-pointer px-2 py-2"
      onClick={() => setIsActive(!isActive)}
    >
      <div
        className="relative h-6 flex items-center justify-center"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Grayscale version (default state) */}
        <img
          src={hoverImg}
          alt={alt}
          className={`h-6 w-auto object-contain transition-opacity duration-300 ${isActive ? "opacity-0" : "opacity-100"}`}
        />

        {/* Colored version (appears on tap) */}
        <img
          src={defaultImg}
          alt={`${alt} colored`}
          className={`absolute h-6 w-auto object-contain transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
        />
      </div>
    </div>
  );
};

// --- 4. Main Marquee Component ---
export default function LogoMarquee() {
  // Desktop marquee order (original)
  const desktopLogos = [
    { id: "vittae", defaultImg: Vittae, hoverImg: VittaeHover },
    { id: "hirifi", defaultImg: Hirifi, hoverImg: HirifiHover },
    { id: "algo", defaultImg: Algo, hoverImg: AlgoHover },
    { id: "beaconer", defaultImg: Beaconer, hoverImg: BeaconerHover },
    { id: "bubble", defaultImg: Bubble, hoverImg: BubbleHover },
    { id: "buddy", defaultImg: Buddy, hoverImg: BuddyHover },
    { id: "dforth", defaultImg: Dforth, hoverImg: DforthHover },
    { id: "flophero", defaultImg: FlopHero, hoverImg: FlopHeroHover },
    {
      id: "gamenation",
      defaultImg: GameNation,
      hoverImg: GameNationHover,
      useGrayscaleFilter: true,
    },
    { id: "kritivan", defaultImg: Kritivan, hoverImg: KritivanHover },
    { id: "miniature", defaultImg: Miniature, hoverImg: MiniatureHover },
    { id: "motorq", defaultImg: MotorQ, hoverImg: MotorQHover },
    { id: "neartail", defaultImg: NearTail, hoverImg: NearTailHover },
    { id: "route", defaultImg: Route, hoverImg: RouteHover },
    { id: "treasure", defaultImg: Treasure, hoverImg: TreasureHover },
    { id: "wealthified", defaultImg: Wealthified, hoverImg: WealthifiedHover },
  ];

  // Mobile logos with individual scale values for flexibility
  const mobileLogos = [
    { id: "kritivan", defaultImg: Kritivan, hoverImg: KritivanHover, scale: 1 },
    { id: "beaconer", defaultImg: Beaconer, hoverImg: BeaconerHover, scale: 1 },
    { id: "bubble", defaultImg: Bubble, hoverImg: BubbleHover, scale: 1 },
    { id: "flophero", defaultImg: FlopHero, hoverImg: FlopHeroHover, scale: 1 },
    { id: "vittae", defaultImg: Vittae, hoverImg: VittaeHover, scale: 2.1 },
    {
      id: "miniature",
      defaultImg: Miniature,
      hoverImg: MiniatureHover,
      scale: 0.9,
    },
    { id: "motorq", defaultImg: MotorQ, hoverImg: MotorQHover, scale: 1 },
    {
      id: "neartail",
      defaultImg: NearTail,
      hoverImg: NearTailHover,
      scale: 1.1,
    },
    { id: "dforth", defaultImg: Dforth, hoverImg: DforthHover, scale: 1.2 },
    { id: "route", defaultImg: Route, hoverImg: RouteHover, scale: 1.75 },
    {
      id: "treasure",
      defaultImg: Treasure,
      hoverImg: TreasureHover,
      scale: 1.35,
    },
    { id: "buddy", defaultImg: Buddy, hoverImg: BuddyHover, scale: 1.25 },
    {
      id: "gamenation",
      defaultImg: GameNation,
      hoverImg: GameNationHover,
      scale: 1.9,
    },
    {
      id: "wealthified",
      defaultImg: Wealthified,
      hoverImg: WealthifiedHover,
      scale: 1.3,
    },
    { id: "hirifi", defaultImg: Hirifi, hoverImg: HirifiHover, scale: 2 },
    { id: "algo", defaultImg: Algo, hoverImg: AlgoHover, scale: 1 },
  ];

  const allDesktopLogos = [...desktopLogos, ...desktopLogos];

  return (
    <>
      {/* Desktop: Animated Marquee */}
      <div className="hidden md:block overflow-hidden">
        <div className="flex gap-x-12 animate-[marquee_60s_linear_infinite] items-center whitespace-nowrap">
          {allDesktopLogos.map((logo, index) => (
            <LogoItem
              key={`${logo.id}-${index}`}
              defaultImg={logo.defaultImg}
              hoverImg={logo.hoverImg}
              alt={logo.id}
              useGrayscaleFilter={
                "useGrayscaleFilter" in logo && logo.useGrayscaleFilter
              }
            />
          ))}
        </div>
      </div>

      {/* Mobile: Word Cloud Layout */}
      <div className="md:hidden flex flex-wrap justify-center items-center gap-x-4 gap-y-3 max-w-[300px] mx-auto pb-24">
        {mobileLogos.map((logo) => (
          <MobileLogoItem
            key={logo.id}
            defaultImg={logo.defaultImg}
            hoverImg={logo.hoverImg}
            alt={logo.id}
            scale={logo.scale}
          />
        ))}
      </div>
    </>
  );
}
