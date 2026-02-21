import ContactFooter from "../components/ContactFooter";
import OpenIcon from "../assets/HomeIcons/openLinkIcon.svg";
import EvidenceOfImpactCarousel from "../components/EvidenceProjectCarousel";
import saas from "../assets/resourceImages/saas-concept-collage.jpg";
import automation from "../assets/resourceImages/artificial-intelligence-tech-venture-employee-requests-help-from-manager.jpg";
import person from "../assets/resourceImages/person-using-ai-tool-job.jpg"
import executive from "../assets/resourceImages/executive-manager-analyzing-graphs-report-working-after-hours-investment-plan-business-office-young-corporate-advisor-planning-company-growth-development-increase-profit.jpg"
import woman from "../assets/resourceImages/woman-writing-design-process.jpg"
import ui from "../assets/resourceImages/ui-designer-brainstorming-about-mobile-app-interface-wireframe-design-with-customer-breif-color-code-office.jpg"
import cloud from "../assets/resourceImages/cloud-computing-power-enhance-cloud-strategy-business-faas.jpg"
import young_asian from "../assets/resourceImages/young-asian-male-doctor-holding-hands-with-senior-patient-woman-offering-hope-kindness-modern-clinic-office.jpg"
import four from "../assets/resourceImages/four-people-are-sitting-around-table-with-light-bulb-that-says-alien.jpg"
import young_people from "../assets/resourceImages/young-people-working-with-documents.jpg"
import focus from "../assets/resourceImages/focus-laptop-running-ai-cognitive-computing-tech-used-by-it-staff-members.jpg"
import joyous from "../assets/resourceImages/joyous-speaker-promoting-artificial-intelligence-business-solutions.jpg"
import programming from "../assets/resourceImages/programming-background-with-person-working-with-codes-computer.jpg"
import ai from "../assets/resourceImages/ai-data-analysis-team.jpg"

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
      <div className="pb-12 md:pb-24 flex flex-col gap-12 md:gap-36 items-center w-full">
        {/* Featured Projects Section */}
        <div className="relative w-full rounded-[32px] pt-[72px] flex flex-col items-center gap-12">
          <div className="w-full pt-[72px] max-w-[800px] flex flex-col items-center gap-3 text-center px-6 md:px-0">
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
              <a href="https://medium.com/@marketing_16484/saas-is-no-longer-human-only-8a41b3f312ab" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={saas} alt="SaaS concept collage" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">SaaS Is No Longer Human-Only</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">A structural shift is unfolding inside modern software — quietly.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/from-automation-to-collaboration-d8c0982afd7e" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={automation} alt="Automation and AI on laptop" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">From Automation to Collaboration</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Automation had its era. It streamlined factories, optimized spreadsheets, and quietly removed repetitive labor from modern work. It delivered efficiency, predictability, and cost savings. For a long time, that was enough.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/ai-is-not-a-feature-its-a-teammate-62706232d162" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={person} alt="AI as teammate metaphor" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">AI Is Not a Feature. It’s a Teammate.</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">A familiar pattern is spreading across modern software.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/the-end-of-manual-first-saas-thinking-1f564982c92e" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={executive} alt="Ending manual processes" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The End of “Manual First” SaaS Thinking</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For decades, software began in silence.</div>
                </div>
              </a>

              <a href="https://medium.com/@marketing_16484/the-loop-designing-human-in-the-loop-3115e470cc1c" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={woman} alt="Human in the loop conceptual UI" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The Loop: Designing Human-in-the-Loop</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Something uncomfortable is happening inside modern software.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/velocity-why-ai-native-companies-win-4c0c2a0d72ff" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={joyous} alt="Joyous speaker" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Velocity: Why AI-Native Companies Win</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There was a time when scale was the moat.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/designing-trust-explainability-as-a-ux-problem-b9ac8b729071" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={ui} alt="UI designer brainstorming" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Designing Trust: Explainability as a UX</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">If a system produces the right answer but cannot explain it, adoption stalls.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/the-rise-of-intent-aware-saas-2fd113d85a26" target="_blank" rel="noopener noreferrer"className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={cloud} alt="Cloud strategy conceptual" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The Rise of Intent-Aware SaaS</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, software behaved like a passive assistant.</div>
                </div>
              </a> 
              <a href="https://medium.com/@marketing_16484/ui-as-infrastructure-why-chat-interfaces-are-not-enough-70f013053078" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={young_asian} alt="AI chat interface metaphor" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">UI as Infrastructure: Why Chat Interfaces</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There is a pattern in every technology wave.</div>
                </div>
              </a>
              <a href="https://medium.com/@marketing_16484/what-changes-in-product-teams-when-ai-enters-the-room-bbf961412e07" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={four} alt="AI impact on product teams" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">What Changes in Product Teams When AI</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, product teams scaled in predictable ways.</div>
                </div>
              </a>

                <a href="https://medium.com/@marketing_16484/the-new-stack-humans-ai-and-systems-38293c2dc1bb" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={focus} alt="Focus concept collage" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">The New Stack: Humans, AI, and Systems</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For years, the contract was simple.</div>
                </div>
              </a>

              <a href="https://medium.com/@marketing_16484/saas-ux-in-the-age-of-agents-1d420bb0c1dc" target="_blank" rel="noopener noreferrer" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={young_people} alt="UX design for agents" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">SaaS UX in the Age of Agents</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">Today we are entering an era where software systems act independently—where agents negotiate schedules, monitor metrics, generate reports, resolve tickets, and optimize campaigns without continuous supervision.</div>
                </div>
              </a>
            {/*

              <a href="#" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={programming} alt="Programming background" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">Fluency Is the New Code</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">For the last twenty years, the advice was simple:</div>
                </div>
              </a>
              <a href="#" className="group w-full bg-zinc-800 rounded-[36px] flex flex-col justify-start items-start overflow-hidden transition-all duration-400">
                <div className="relative w-full h-56 overflow-hidden">
                  <img className="w-full h-full object-cover animate-ken-burns" src={ai} alt="AI analysis team" />
                </div>
                <div className="flex-1 self-stretch p-6 flex flex-col justify-start items-start gap-3 relative z-10 transition-colors duration-400 card-content-overlay">
                  <div className="self-stretch flex justify-start items-start gap-4">
                    <div className="flex-1 text-gray-100 text-2xl font-bold font-['Sora'] leading-9 line-clamp-1">AI as a Force Multiplier for Startups</div>
                    <div className="flex-shrink-0 w-5 h-5 md:w-4 md:h-4 mt-2 flex items-center justify-center opacity-70 card-icon-overlay transition-all duration-400">
                      <img src={OpenIcon} alt="Arrow" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="self-stretch text-gray-300 text-base font-normal font-['Inter'] leading-6 line-clamp-2">There’s a belief that the company with the biggest team eventually wins.</div>
                </div>
              </a>
                 */}
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