import { useState } from 'react';
import { Plus } from "../assets/HomeIcons/Plus";

export default function FAQSection() {
  const [activeFAQTab, setActiveFAQTab] = useState("Design Company");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic Data based on Tabs
  const faqData: Record<string, { question: string; answer: string }[]> = {
    "Design Company": [
      {
        question: "What is DexioLabX?",
        answer: "DexioLabX is a creative design studio focused on crafting user-centric digital experiences. We help businesses translate ideas into functional, visually refined, and scalable design solutions."
      },
      { question: "What industries do you work with?", 
        answer: "We work across multiple industries including technology, startups, SaaS, e-commerce, education, and service-based businesses." 
    },
      { question: "What makes DexioLabX different from other design studios?", 
        answer: "Our work is driven by clarity, research, and purpose. We focus on solving real user and business problems rather than creating design for aesthetics alone." 
    },
    {
        question: "Do you work with startups and enterprises?",
        answer: "Yes. We collaborate with early-stage startups, growing businesses, and established organizations.."
      },
      { question: "Do you offer redesign services?", 
        answer: "Yes. We improve existing products and brands through usability audits, visual refinement, and strategic redesigns." 
    }
    ],
    "Design Services": [
      { 
        question: "What design services do you provide?", 
        answer: "We offer UI/UX design, web and mobile app design, branding and identity design, design systems, usability audits, and product design support." 
      },
      { 
        question: "Do you provide end-to-end design solutions?", 
        answer: "Yes. We handle the complete design lifecycle from discovery and wireframes to final UI and handoff." 
      },
      { 
        question: "Can clients choose individual services?", 
        answer: "Yes. Our services are flexible and can be customized based on specific project requirements." 
      },
      { 
        question: "Do you work with development teams?", 
        answer: "Yes. We collaborate closely with developers to ensure smooth design implementation and consistency." 
      },
      { 
        question: "What deliverables will clients receive?", 
        answer: "Clients receive high-fidelity designs, editable source files, assets, and documentation required for development." 
      }
    ],
    "Design Process": [
      { 
        question: "How does your design process work?", 
        answer: "Our process includes discovery, research, ideation, wireframing, visual design, testing, and final delivery." 
      },
      { 
        question: "How do you understand user needs?", 
        answer: "We use user research, competitor analysis, and usability insights to guide design decisions." 
      },
      { 
        question: "How involved are clients during the process?", 
        answer: "Clients are involved at every major milestone through reviews and feedback sessions." 
      },
      { 
        question: "How long does a typical project take?", 
        answer: "Project timelines vary by scope, but most design projects take between 2 to 8 weeks." 
      },
      { 
        question: "Do you follow design standards and accessibility guidelines?", 
        answer: "Yes. We follow usability, accessibility, and scalable design best practices." 
      }
    ],
    "Design Academy": [
      { 
        question: "What is DexioLabX Design Academy?", 
        answer: "DexioLabX Design Academy is a learning initiative focused on practical UI/UX and product design education." 
      },
      { 
        question: "Who can join the Design Academy?", 
        answer: "Students, beginners, career switchers, and professionals looking to enhance their design skills can enroll." 
      },
      { 
        question: "Are the courses practical or theory-based?", 
        answer: "Our courses are practice-driven, focusing on real-world projects and industry workflows." 
      },
      { 
        question: "Do learners receive mentorship?", 
        answer: "Yes. Learners receive guidance, feedback, and reviews from experienced designers." 
      },
      { 
        question: "Do you provide certification or portfolio support?", 
        answer: "Yes. We assist learners in building portfolio-ready projects and provide completion certificates." 
      }
    ]
  };

  const currentFaqs = faqData[activeFAQTab] || [];

  return (
    <div className="mt-40">
      <h2 className="text-4xl font-bold text-white text-center mb-10">FAQs</h2>
      
      {/* FAQ Tabs Switcher */}
      <div className="flex justify-center mb-[24px] h-[64px]">
        <div className="p-2 rounded-[24px] flex items-center" style={{backgroundColor: 'rgb(26 27 30 / 66%)'}}>
          {["Design Company", "Design Services", "Design Process", "Design Academy"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveFAQTab(tab);
                setOpenFaq(0); // Opens the first item by default when switching tabs
              }}
              className={`px-8 py-2.5 rounded-[20px] transition-all duration-300 text-base font-medium leading-6 capitalize ${
                activeFAQTab === tab 
                  ? "bg-white text-black h-[100%] font-inter" 
                  : "text-white hover:text-white hover:bg-zinc-800/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion */}
      <div>
        {currentFaqs.map((faq, index) => (
          <div key={`${activeFAQTab}-${index}`} className="flex gap-4">
            {/* Retained your specific Plus Icon alignment logic */}
            <div className={`${openFaq === index ? "pt-4" : "pt-8"}`}>
              <Plus />
            </div>

            <div className="flex-1 border-b border-zinc-800">
              <button 
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full text-left group ${openFaq === index ? "py-4" : "py-8"}`}
              >
                <h3 className="text-[18px] md:text-xl font-bold transition leading-10 text-[#F1F2F4]">
                  {faq.question}
                </h3>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? "max-h-60 pb-8" : "max-h-0"}`}>
                <p 
                  style={{ 
                    color: '#D5D7DD', 
                    fontFamily: 'Inter', 
                    fontSize: '16px', 
                    fontWeight: '400', 
                    lineHeight: '24px' 
                  }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}