import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import hovercardimg1 from "../HomeIcons/hovercardimg1.png";
import hovercardimg2 from "../HomeIcons/hovercardimg2.png";
import hovercardimg3 from "../HomeIcons/hovercardimg3.png";

const projects = [
  {
    id: 1,
    title: "FlopHero",
    subtitle: "Gaming Analytics Platform Design",
    description: "UX/UI design for a poker analytics platform enabling clearer decisions through data.",
    color: "bg-gradient-to-tr from-[#FFCC00] to-[#FFCC00]",
    logo: hovercardimg1,
    video: "https://www.w3schools.com/html/mov_bbb.mp4", // Replace with actual project video
  },
  {
    id: 2,
    title: "Infinity AI",
    subtitle: "AI Model Training Suite",
    description: "Building the world's most intuitive interface for complex machine learning datasets.",
    color: "bg-gradient-to-tr from-[#5D33FB] to-[#B161FC]",
    logo: hovercardimg2,
    video: "https://www.w3schools.com/html/movie.mp4",
  },
  {
    id: 3,
    title: "GreenX",
    subtitle: "Sustainable Energy Dashboard",
    description: "Visualizing real-time carbon footprints for global enterprise supply chains.",
    color: "bg-gradient-to-tr from-[#455F47] via-[#388E40] to-[#21EF36]",
    logo: hovercardimg3,
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
  }
];

export default function EvidenceOfImpact() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-4xl font-bold text-white">Evidence Of Impact</h2>
        <button className="bg-[#1A1B1E] border border-zinc-800 px-6 py-2 rounded-full text-sm text-gray-300 flex items-center gap-2 hover:bg-zinc-800 transition">
          Explore Resources <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="flex gap-4 h-[350px] w-[1400px]">
        {projects.map((project) => (
          <div
            key={project.id}
            onMouseEnter={() => setActiveId(project.id)}
            className={`relative rounded-[40px] overflow-hidden transition-all duration-700 ease-in-out cursor-pointer flex border border-zinc-800/50 ${
              activeId === project.id ? "flex-[3]" : "flex-1"
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
              <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{project.subtitle}</p>
              <p className="text-gray-300 leading-relaxed mb-10 max-w-sm">
                {project.description}
              </p>
              <button className="flex items-center gap-2 text-white font-medium hover:underline">
                Learn More <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}