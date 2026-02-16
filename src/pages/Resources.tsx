import ContactFooter from "../components/ContactFooter";
import OpenIcon from "../assets/HomeIcons/openLinkIcon.svg";
import EvidenceOfImpactCarousel from "../components/EvidenceProjectCarousel";


export default function Resources() {
  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen selection:bg-purple-500/30 overflow-x-hidden">
      <style>{`
        @media (min-width: 768px) and (max-width: 1289px) {
          .articles-container {
            padding-left: 24px !important;
            padding-right: 24px !important;
            gap: 20px !important;
          }
          .articles-grid {
            gap: 20px !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .articles-grid > div {
            min-width: 0 !important;
          }
        }
      `}</style>
      <div className="pb-12 md:pb-36 flex flex-col gap-12 md:gap-36 items-center w-full">
        {/* Featured Projects Section */}
        <div className="relative w-full max-w-[1280px] mx-auto rounded-[32px] pt-[72px] flex flex-col items-center gap-12 px-4 md:px-0">
          <div className="w-full pt-[72px] max-w-[800px] flex flex-col items-center gap-3 text-center">
            <h2 className="text-gray-100 text-3xl md:text-4xl font-semibold font-['Inter'] leading-[36px] md:leading-[48px]">Featured Projects</h2>
            <p className="text-gray-300 text-base font-normal font-['Inter'] leading-6 text-center self-stretch">A selection of projects where we helped teams design clarity, scale workflows, and build for real-world adoption. Each project reflects our approach to systems thinking, UX, and AI-ready design.</p>
          </div>

          <EvidenceOfImpactCarousel />

        </div>

        {/* Articles Grid Section */}
        <div className="articles-container max-w-[1280px] mx-auto flex flex-col items-center gap-8 md:gap-12 px-4 md:px-0">
          <div className="w-full max-w-[800px] text-center">
            <h2 className="text-[#F1F2F4] text-[28px] md:text-[36px] font-semibold font-['Sora'] leading-[36px] md:leading-[44px]">Sharing insights on design, AI, and<br />product thinking.</h2>
          </div>
          <div className="self-stretch inline-flex flex-col justify-center items-center gap-12">
            <div className="articles-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-[1280px] mx-auto">
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/395x222" alt="SaaS" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">SaaS Is No Longer Human-Only</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">A structural shift is unfolding inside modern software — quietly.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="w-full h-56" src="https://placehold.co/395x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">From Automation to Collaboration</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Automation had its era. It streamlined factories, optimized spreadsheets, and quietly removed<br />repetitive labor from modern work. It delivered efficiency, predictability, and cost savings. For a<br />long time, that was enough.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">AI Is Not a Feature. It’s a Teammate.</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">A familiar pattern is spreading across modern software.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="w-full h-56" src="https://placehold.co/395x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The End of “Manual First” SaaS Thinking</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For decades, software began in silence.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The Loop: Designing Human-in-the-Loop</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Something uncomfortable is happening inside modern software.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Designing Trust: Explainability as a UX</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">If a system produces the right answer but cannot explain it, adoption stalls.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="w-full h-56" src="https://placehold.co/395x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The Rise of Intent-Aware SaaS</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, software behaved like a passive assistant.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">UI as Infrastructure: Why Chat Interfaces</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There is a pattern in every technology wave.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">What Changes in Product Teams When AI</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, product teams scaled in predictable ways.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="w-full h-56" src="https://placehold.co/395x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">SaaS UX in the Age of Agents</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Today we are entering an era where software systems act independently—where agents<br />negotiate schedules, monitor metrics, generate reports, resolve tickets, and optimize campaigns<br />without continuous supervision.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The New Stack: Humans, AI, and Systems</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, the contract was simple.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Velocity: Why AI-Native Companies Win</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There was a time when scale was the moat.</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Fluency Is the New Code</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For the last twenty years, the advice was simple:</div>
                </div>
              </div>
              <div className="w-full bg-zinc-800 rounded-[36px] inline-flex flex-col justify-start items-start overflow-hidden">
                <img className="self-stretch h-56" src="https://placehold.co/394x222" />
                <div className="self-stretch p-6 flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch inline-flex justify-start items-center gap-3">
                    <div className="flex-1 justify-start text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">AI as a Force Multiplier for Startups</div>
                    <a href="#" className="w-4 h-4 flex items-center justify-center hover:opacity-75 transition-opacity">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="self-stretch justify-start text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There’s a belief that the company with the biggest team eventually wins.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- Talk Section --- */}
   <ContactFooter
          title="Our experts work closely with teams to explore challenges together, exchange perspectives, and co-create better ways forward through shared learning."
          subtitle="Learning doesn’t stop at reading."
          buttonText="Work With Us"
        />
      {/* --- Footer --- */}
      {/* <Footer/> */}
    </main>
  );
}