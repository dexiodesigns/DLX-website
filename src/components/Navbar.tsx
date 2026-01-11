import { SunMoon } from "lucide-react";
import { Logo } from "./../assets/logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 md:px-[200px] py-6 flex justify-between items-center bg-black/50 backdrop-blur-md text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Logo/>
      </div>
      <div>
        {/* Links */}
        <ul className="hidden md:flex gap-8 items-center">
            <li className="hover:text-white cursor-pointer transition">Services</li>
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Academy</li>
            <li className="hover:text-white cursor-pointer transition">Resources</li>
            <li className="hover:text-white cursor-pointer transition">Company</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
            <li>        {/* Theme Toggle Toggle */}
        <div className="bg-zinc-800 p-1 rounded-full flex items-center gap-2 border border-zinc-700">
            <div className="p-1 rounded-full bg-zinc-700"><SunMoon size={16} /></div>
        </div></li>
        </ul>
      </div>
    </nav>
  );
}