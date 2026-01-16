import { useState } from "react";
// import { ArrowUpRight } from "lucide-react";
import hovercardimg1 from "../assets/HomeIcons/hovercardimg1.png";
import hovercardimg2 from "../assets/HomeIcons/hovercardimg2.png";
import hovercardimg3 from "../assets/HomeIcons/hovercardimg3.png";
import hovercardimg4 from "../assets/HomeIcons/hovercardimg4.svg";
import hovercardimg5 from "../assets/HomeIcons/hovercardimg5.svg";
import hovercardimg6 from "../assets/HomeIcons/hovercardimg6.svg";
import hovercardimg7 from "../assets/HomeIcons/hovercardimg7.svg";
import OpenIcon from "../assets/HomeIcons/openLinkIcon.svg";

const projects = [
  {
    id: 1,
    title: "FlopHero",
    subtitle: "Poker Analytics Platform",
    description: "UX and product design for an AI driven poker analytics platform that helps players identify leaks, improve decisions, and scale performance with confidence.",
    color: "bg-gradient-to-tr from-[#FFCC00] to-[#FFCC00]",
    logo: hovercardimg1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual project video
    link: "https://flophero.com/en"
  },
  {
    id: 2,
    title: "Neartail",
    subtitle: "Online Order & Form Platform",
    description: "Design and product support for a food-business order ecosystem that turns simple forms into online menus, order flows and payment experiences with clarity and ease.",
    color: "bg-gradient-to-tr from-[#5D33FB] to-[#B161FC]",
    logo: hovercardimg2,
    video: "https://www.w3schools.com/html/movie.mp4",
    link: "https://neartail.com/"
  },
  {
    id: 3,
    title: "GameNation",
    subtitle: "Buy, Sell, Play",
    description: "Product and UX design for an e-commerce hub where gamers can discover affordable consoles and games, sell old gear for cash or credit, and complete orders with clarity and speed.",
    color: "bg-gradient-to-tr from-[#455F47] via-[#388E40] to-[#21EF36]",
    logo: hovercardimg3,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "https://gamenation.in/"
  },
    {
    id: 4,
    title: "Miniture",
    subtitle: "Parenting App",
    description: "UX and product design for a play-based learning app that supports holistic child development.",
    color: "bg-gradient-to-tr from-[#FFFFFF] to-[#FFFFFF]",
    logo: hovercardimg4,
    video: "https://www.w3schools.com/html/movie.mp4",
    link: "https://play.google.com/store/apps/details?id=com.miniverse.minions_android&hl=en_IN"
  },
  {
    id: 5,
    title: "RouteYourTravel",
    subtitle: "Smart Corporate Travel & Experiences",
    description: "Product and UX design for a travel management platform that simplifies business travel, workcations and curated getaways with tailored recommendations and smooth booking flows.",
    color: "bg-gradient-to-tr from-[#8D2525] to-[#F33F3F]",
    logo: hovercardimg5,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "https://www.routeyourtravel.com/"
  },
    {
    id: 6,
    title: "BuddyHQ",
    subtitle: "AI Sales & Outreach Assistant",
    description: "Design and experience work for an AI-driven outreach tool that auto-generates tailored email openers and follow-ups that increase engagement and response rates.",
    color: "bg-gradient-to-tr from-[#682345] to-[#CE4589] ",
    logo: hovercardimg6,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "https://buddyhq.ai/"
  },
    {
    id: 7,
    title: "Vittae",
    subtitle: "Financial Wellness Platform",
    description: "Design and experience work for a platform that empowers individuals to visualize, optimize and grow their financial health through tailored plans and expert advisory support.",
    color: "bg-gradient-to-tr from-[#FFFFFF] to-[#FFFFFF]",
    logo: hovercardimg7,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    link: "https://vittae.money/"
  }
];

export default function EvidenceOfImpact() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="max-w-20xl mx-auto pr-6 pb-24 pt-14 overflow-x-scroll pl-[200px]">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-white">Evidence Of Impact</h2>
        {/* <button className="bg-[#1A1B1E] border border-zinc-800 px-6 py-2 rounded-full text-sm text-gray-300 flex items-center gap-2 hover:bg-zinc-800 transition">
          Explore Resources <ArrowUpRight size={16} />
        </button> */}
      </div>

      <div className="flex gap-4 h-[350px] min-w-max">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setActiveId(project.id)}
            className={`relative rounded-[40px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex border border-zinc-800/50 min-w-[200px] ${
              activeId === project.id ? "w-[800px]" : "w-[250px]"
            }`}
          >
            {/* --- Left Side: Video/Logo Side --- */}
            <div className={`relative h-full transition-all duration-700 ${
              activeId === project.id ? "w-[45%]" : "w-full"
            } ${project.color} flex items-center justify-center`}>
              
              {/* Only play video when active */}
              {activeId === project.id && (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              )}

              {/* Logo Overlay - Centers when collapsed, stays visible when expanded */}
              <div className="relative z-10 w-24 h-24">
                <img src={project.logo} alt={project.title} className={`${
              activeId === project.id ? "hidden" : "block"
            }`} />
              </div>
              
              {/* Yellow highlight border for active card matching your 2nd image */}
              {activeId === project.id && (
                 <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#FFD600] z-20" />
              )}
            </div>

            {/* --- Right Side: Text Content --- */}
            <div className={`h-full bg-black flex flex-col justify-center px-12 transition-all duration-700 ${
              activeId === project.id ? "w-[55%] opacity-100" : "w-0 opacity-0 overflow-hidden hidden"
            }`}>
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{project.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-6 max-w-sm">
                {project.description}
              </p>
              <button 
                className="flex items-center gap-2 text-white font-medium hover:underline" 
                onClick={() => window.open(project.link, '_blank')}
              >
                Learn More <img src={OpenIcon} alt="Open link icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}