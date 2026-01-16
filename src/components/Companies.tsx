import { useState } from 'react';

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
import GameNationHover from "../assets/companies/GameNationHover.svg";
import Hirifi from "../assets/companies/Hirifi.svg";
import HirifiHover from "../assets/companies/HirifiHover.svg";
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
import VittaeHover from "../assets/companies/VittaeHover.svg";
import Wealthified from "../assets/companies/Wealthified.svg";
import WealthifiedHover from "../assets/companies/WealthifiedHover.svg";

// --- 2. Sub-component for individual hover logic (Desktop) ---
const LogoItem = ({ defaultImg, hoverImg, alt }: { defaultImg: string, hoverImg: string, alt: string }) => {
  const [isHovered, setIsHovered] = useState(false);

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
          className={`h-8 w-auto object-contain transition-opacity duration-300 ${
            isHovered ? 'opacity-0' : 'opacity-40'
          }`} 
        />

        {/* HOVER IMAGE: Absolute positioned to sit exactly on top, shown on hover */}
        <img 
          src={defaultImg} 
          alt={`${alt} hover`} 
          className={`absolute h-8 w-auto object-contain transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    </div>
  );
};

// --- 3. Mobile Logo Item (Tap to reveal colored version) ---
const MobileLogoItem = ({ defaultImg, hoverImg, alt }: { defaultImg: string, hoverImg: string, alt: string }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="flex items-center justify-center cursor-pointer"
      onClick={() => setIsActive(!isActive)}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Grayscale version (default state) */}
        <img 
          src={hoverImg} 
          alt={alt} 
          className={`h-8 w-auto object-contain transition-opacity duration-300 ${
            isActive ? 'opacity-0' : 'opacity-100'
          }`} 
        />

        {/* Colored version (appears on tap) */}
        <img 
          src={defaultImg} 
          alt={`${alt} colored`} 
          className={`absolute h-8 w-auto object-contain transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>
    </div>
  );
};

// --- 4. Main Marquee Component ---
export default function LogoMarquee() {
  // Desktop marquee order (original)
  const desktopLogos = [
    { id: 'vittae', defaultImg: Vittae, hoverImg: VittaeHover },
    { id: 'hirifi', defaultImg: Hirifi, hoverImg: HirifiHover },
    { id: 'algo', defaultImg: Algo, hoverImg: AlgoHover },
    { id: 'beaconer', defaultImg: Beaconer, hoverImg: BeaconerHover },
    { id: 'bubble', defaultImg: Bubble, hoverImg: BubbleHover },
    { id: 'buddy', defaultImg: Buddy, hoverImg: BuddyHover },
    { id: 'dforth', defaultImg: Dforth, hoverImg: DforthHover },
    { id: 'flophero', defaultImg: FlopHero, hoverImg: FlopHeroHover },
    { id: 'gamenation', defaultImg: GameNation, hoverImg: GameNationHover },
    { id: 'kritivan', defaultImg: Kritivan, hoverImg: KritivanHover },
    { id: 'miniature', defaultImg: Miniature, hoverImg: MiniatureHover },
    { id: 'motorq', defaultImg: MotorQ, hoverImg: MotorQHover },
    { id: 'neartail', defaultImg: NearTail, hoverImg: NearTailHover },
    { id: 'route', defaultImg: Route, hoverImg: RouteHover },
    { id: 'treasure', defaultImg: Treasure, hoverImg: TreasureHover },
    { id: 'wealthified', defaultImg: Wealthified, hoverImg: WealthifiedHover },
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
            />
          ))}
        </div>
      </div>

      {/* Mobile: Manual Row Layout */}
      <div className="md:hidden flex flex-col gap-2 pb-24">
        {/* Row 1: Kritivan, Beaconer, Bubble */}
        <div className="flex justify-between items-center gap-4 max-w-[80%] mx-auto">
          <MobileLogoItem defaultImg={Kritivan} hoverImg={KritivanHover} alt="kritivan" />
          <MobileLogoItem defaultImg={Beaconer} hoverImg={BeaconerHover} alt="beaconer" />
          <MobileLogoItem defaultImg={Bubble} hoverImg={BubbleHover} alt="bubble" />
        </div>

        {/* Row 2: FlopHero, Vittae, Miniature */}
        <div className="flex justify-between items-center gap-4 max-w-[95%] mx-auto">
          <MobileLogoItem defaultImg={FlopHero} hoverImg={FlopHeroHover} alt="flophero" />
          <MobileLogoItem defaultImg={Vittae} hoverImg={VittaeHover} alt="vittae" />
          <MobileLogoItem defaultImg={Miniature} hoverImg={MiniatureHover} alt="miniature" />
        </div>

        {/* Row 3: MotorQ, Neartail, Dforth */}
        <div className="flex justify-between items-center gap-4 max-w-[90%] mx-auto">
          <MobileLogoItem defaultImg={MotorQ} hoverImg={MotorQHover} alt="motorq" />
          <MobileLogoItem defaultImg={NearTail} hoverImg={NearTailHover} alt="neartail" />
          <MobileLogoItem defaultImg={Dforth} hoverImg={DforthHover} alt="dforth" />
        </div>

        {/* Row 4: Route, Treasure, Buddy */}
        <div className="flex justify-between items-center gap-4  max-w-[100%] mx-auto">
          <MobileLogoItem defaultImg={Route} hoverImg={RouteHover} alt="route" />
          <MobileLogoItem defaultImg={Treasure} hoverImg={TreasureHover} alt="treasure" />
          <MobileLogoItem defaultImg={Buddy} hoverImg={BuddyHover} alt="buddy" />
        </div>

        {/* Row 5: GameNation, Wealthified, Hirifi */}
        <div className="flex justify-between items-center gap-4  max-w-[50%] mx-auto mx-h-16">
          <MobileLogoItem defaultImg={GameNation} hoverImg={GameNationHover} alt="gamenation" />
          <MobileLogoItem defaultImg={Wealthified} hoverImg={WealthifiedHover} alt="wealthified" />
          <MobileLogoItem defaultImg={Hirifi} hoverImg={HirifiHover} alt="hirifi" />
        </div>
      </div>
    </>
  );
}