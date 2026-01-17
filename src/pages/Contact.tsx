import React, { useState } from "react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import ContactPageFooter2 from "../components/ContactPageFooter2";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    areaOfFocus: '',
    challenge: '',
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const areaOptions = [
    'Product Design',
    'UX Research',
    'Design Systems',
    'AI/ML Integration',
    'Mobile App Design',
    'Web Application',
    'Other',
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectOption = (option: string) => {
    setFormData(prev => ({ ...prev, areaOfFocus: option }));
    setIsDropdownOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Create email body with form data
      const emailBody = `
        New Contact Form Submission:

        Full Name: ${formData.fullName}
        Work Email: ${formData.workEmail}
        Company Name: ${formData.companyName}
        Area of Focus: ${formData.areaOfFocus}

        Challenge/Goal:
        ${formData.challenge}

        Submitted at: ${new Date().toLocaleString()}
      `.trim();

      // Create mailto link
      const mailtoLink = `mailto:Sales@dexiodesigns.com?subject=New Contact Form Submission from ${formData.fullName}&body=${encodeURIComponent(emailBody)}`;
      
      // Open default email client
      window.open(mailtoLink);
      
      // Reset form after submission
      setFormData({
        fullName: '',
        workEmail: '',
        companyName: '',
        areaOfFocus: '',
        challenge: '',
      });
      
    } catch (error) {
      console.error('Error preparing email:', error);
    }
  };

  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen font-['Inter']">
      {/* Hero Section */}
      <section 
        className="flex items-center justify-center mx-auto px-5 md:px-0"
        style={{
          maxWidth: '100%',
          marginTop: '90px',
          paddingTop: '144px',
          paddingBottom: '144px',
          opacity: 1,
        }}
      >
        <div 
          className="flex flex-col items-center text-center w-[335px] md:w-[1280px]"
          style={{
            gap: '12px',
          }}
        >
          {/* Main Heading */}
          <h1 
            className="w-[335px] md:w-[717px] h-auto md:h-[60px] text-[30px] md:text-[48px] leading-[125%] md:leading-[60px]"
            style={{
              maxWidth: '800px',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              letterSpacing: '0%',
              textAlign: 'center',
              opacity: 1,
            }}
          >
            Let's Solve the{' '}
            <span 
              className="bg-clip-text text-transparent block md:inline"
              style={{
                backgroundImage: 'linear-gradient(225deg, #F4DC7C -0.1%, #F06058 39.94%, #4044E8 100%)',
              }}
            >
              Right Problem
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            className="w-[335px] md:w-auto text-[14px] md:text-[18px] leading-[150%] md:leading-[28px]"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#D5D7DD',
              maxWidth: '800px',
              opacity: 1,
            }}
          >
            Great products start with the right questions. Tell us what you're working on, we'll respond with a clear, actionable recommendation within 24 hours.
          </p>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section 
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      >
        <div 
          className="flex flex-col lg:flex-row gap-12 lg:gap-24"
          style={{
            width: '1280px',
            maxWidth: '100%',
          }}
        >
          {/* Left Side - Contact Form */}
          <div className="flex-1" style={{ maxWidth: '720px' }}>
            <h2 
              className="mb-10"
              style={{
                fontFamily: 'Sora, sans-serif',
                fontWeight: 600,
                fontSize: '32px',
                lineHeight: '40px',
                color: '#ffffff',
              }}
            >
              Get in touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    Full Name <span style={{ color: '#F06058' }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Smith"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition focus:ring-1 focus:ring-zinc-600"
                    style={{
                      backgroundColor: '#1A1D21',
                      border: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#ffffff',
                    }}
                  />
                </div>

                {/* Work Email */}
                <div>
                  <label 
                    className="block mb-2"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: 'rgba(255, 255, 255, 0.7)',
                    }}
                  >
                    Work Email <span style={{ color: '#F06058' }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="workEmail"
                    value={formData.workEmail}
                    onChange={handleInputChange}
                    placeholder="john.smith@company.com"
                    required
                    className="w-full px-4 py-3 rounded-lg outline-none transition focus:ring-1 focus:ring-zinc-600"
                    style={{
                      backgroundColor: '#1A1D21',
                      border: 'none',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '16px',
                      color: '#ffffff',
                    }}
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label 
                  className="block mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Company Name <span style={{ color: '#F06058' }}>*</span>
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Example: Lenovo, Freshworks, SuperOps, ..."
                  required
                  className="w-full px-4 py-3 rounded-lg outline-none transition focus:ring-1 focus:ring-zinc-600"
                  style={{
                    backgroundColor: '#1A1D21',
                    border: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: '#ffffff',
                  }}
                />
              </div>

              {/* What are you working on? */}
              <div className="relative">
                <label 
                  className="block mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  What are you working on? <span style={{ color: '#F06058' }}>*</span>
                </label>
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 rounded-lg outline-none transition flex items-center justify-between focus:ring-1 focus:ring-zinc-600"
                  style={{
                    backgroundColor: '#1A1D21',
                    border: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: formData.areaOfFocus ? '#ffffff' : 'rgba(255, 255, 255, 0.5)',
                  }}
                >
                  {formData.areaOfFocus || 'Select an area of focus'}
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    style={{ color: 'rgba(255, 255, 255, 0.5)' }}
                  />
                </button>
                
                {isDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-50"
                    style={{
                      backgroundColor: '#1A1D21',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {areaOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleSelectOption(option)}
                        className="w-full px-4 py-3 text-left hover:bg-zinc-800 transition"
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          color: '#ffffff',
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Describe your challenge or goal */}
              <div>
                <label 
                  className="block mb-2"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  Describe your challenge or goal <span style={{ color: '#F06058' }}>*</span>
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  placeholder="What's the problem you're trying to solve? What does success look like?"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg outline-none transition resize-none focus:ring-1 focus:ring-zinc-600"
                  style={{
                    backgroundColor: '#1A1D21',
                    border: 'none',
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '16px',
                    color: '#ffffff',
                  }}
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="flex items-center justify-center transition hover:opacity-90"
                  style={{
                    width: '204px',
                    height: '56px',
                    gap: '12px',
                    paddingLeft: '24px',
                    paddingRight: '24px',
                    borderRadius: '24px',
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), linear-gradient(0deg, #F06058, #F06058)',
                    color: '#ffffff',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '30px',
                    letterSpacing: '0%',
                  }}
                >
                  Send It Over
                  <ArrowRight size={20} />
                </button>
              </div>

              {/* Note */}
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  marginTop: '16px',
                }}
              >
                No generic calendar links. Just a direct response with a clear next step.
              </p>
            </form>
          </div>

          {/* Right Side - Info Cards */}
          <div className="flex flex-col gap-6" style={{ width: '480px', maxWidth: '100%' }}>
            {/* What to expect? Card */}
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#131517',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <h3 
                className="mb-8"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#ffffff',
                }}
              >
                What to expect?
              </h3>

              {/* Steps with connecting line */}
              <div className="relative">
                {/* Connecting Line */}
                <div 
                  className="absolute left-[18px] top-[36px]"
                  style={{
                    width: '2px',
                    height: 'calc(100% - 72px)',
                    background: 'linear-gradient(180deg, #22D3EE 0%, #22D3EE 100%)',
                    opacity: 0.3,
                  }}
                />

                {/* Step 1 */}
                <div className="flex gap-5 mb-8">
                  <div 
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#22D3EE',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#0B0C0E',
                    }}
                  >
                    1
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#ffffff',
                      }}
                    >
                      We Review
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      Your request lands with our product and design team—not a sales queue.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5 mb-8">
                  <div 
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#22D3EE',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#0B0C0E',
                    }}
                  >
                    2
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#ffffff',
                      }}
                    >
                      We Respond
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      Within 24 hours, you'll get a specific recommendation tailored to your situation.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div 
                    className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      backgroundColor: '#22D3EE',
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      color: '#0B0C0E',
                    }}
                  >
                    3
                  </div>
                  <div>
                    <h4 
                      className="mb-1"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#ffffff',
                      }}
                    >
                      We Decide Together
                    </h4>
                    <p 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'rgba(255, 255, 255, 0.6)',
                      }}
                    >
                      If there's a fit, we move forward. If not, we'll point you somewhere better.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* We're a Good Fit If You... Card */}
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#131517',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              <h3 
                className="mb-6"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#ffffff',
                }}
              >
                We're a Good Fit If You...
              </h3>

              <ul className="space-y-4">
                {[
                  'Care more about outcomes than outputs.',
                  'Are building for both humans and AI.',
                  'Want strategic thinking, not just execution.',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#F06058' }}
                    >
                      <Check size={14} color="#ffffff" strokeWidth={3} />
                    </div>
                    <span 
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#ffffff',
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Us Directly Section */}
     <ContactPageFooter2 />
    </main>
  );
}

