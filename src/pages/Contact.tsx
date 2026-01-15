import React, { useState } from "react";
import { ArrowRight, ChevronDown, Check } from "lucide-react";
import Footer from "../components/Footer";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <main className="bg-[#0B0C0E] text-white min-h-screen font-['Inter']">
      {/* Hero Section */}
      <section 
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '144px',
        }}
      >
        <div 
          className="flex flex-col items-center text-center"
          style={{
            width: '1280px',
            maxWidth: '100%',
            minHeight: '408px',
            gap: '12px',
            paddingTop: '144px',
            paddingBottom: '144px',
          }}
        >
          {/* Main Heading */}
          <h1 
            style={{
              width: '717px',
              maxWidth: '800px',
              height: '60px',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              fontSize: '48px',
              lineHeight: '60px',
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            Let's Solve the{' '}
            <span 
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(225deg, #F4DC7C -0.1%, #F06058 39.94%, #4044E8 100%)',
              }}
            >
              Right Problem
            </span>
          </h1>
          
          {/* Subtitle */}
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '28px',
              letterSpacing: '0%',
              textAlign: 'center',
              color: '#D5D7DD',
              maxWidth: '800px',
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
            paddingTop: '80px',
            paddingBottom: '80px',
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
      <section 
        className="flex items-center justify-center px-6"
        style={{
          width: '100%',
          paddingTop: '144px',
          paddingBottom: '144px',
          backdropFilter: 'blur(40px)',
          WebkitBackdropFilter: 'blur(40px)',
        }}
      >
        <div 
          className="flex flex-col items-center"
          style={{
            width: '1280px',
            maxWidth: '100%',
          }}
        >
          {/* Section Heading */}
          <h2 
            className="text-center mb-16"
            style={{
              width: '324px',
              height: '44px',
              fontFamily: 'Sora, sans-serif',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '44px',
              letterSpacing: '0%',
              color: '#F1F2F4',
            }}
          >
            Reach Us Directly
          </h2>

          {/* Three Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {/* NEW BUSINESS Card */}
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#131517',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Icon */}
              <div 
                className="mb-8 flex items-center justify-center"
                style={{ width: '80px', height: '80px' }}
              >
                <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 38.6792L38.2242 44.91C38.7625 45.3117 39.3117 45.3256 39.8717 44.9517C40.4317 44.5778 40.6156 44.0661 40.4233 43.4167L37.3075 33.115L45.2942 27.4775C45.8803 27.0436 46.0664 26.5053 45.8525 25.8625C45.6386 25.2192 45.1878 24.8975 44.5 24.8975H34.6925L31.3267 14.0767C31.0944 13.4272 30.6528 13.1025 30.0017 13.1025C29.3511 13.1025 28.9083 13.4272 28.6733 14.0767L25.3075 24.8975H15.5C14.8122 24.8975 14.3614 25.2192 14.1475 25.8625C13.9336 26.5053 14.1197 27.0436 14.7058 27.4775L22.6925 33.115L19.5767 43.4167C19.3844 44.0661 19.5683 44.5778 20.1283 44.9517C20.6883 45.3256 21.2375 45.3117 21.7758 44.91L30 38.6792ZM30.0108 60C25.8625 60 21.9622 59.2128 18.31 57.6383C14.6583 56.0639 11.4817 53.9272 8.78 51.2283C6.07833 48.5294 3.93972 45.3556 2.36417 41.7067C0.788055 38.0583 0 34.1597 0 30.0108C0 25.8625 0.787222 21.9622 2.36167 18.31C3.93611 14.6583 6.07278 11.4817 8.77167 8.78C11.4706 6.07833 14.6444 3.93972 18.2933 2.36417C21.9417 0.788055 25.8403 0 29.9892 0C34.1375 0 38.0378 0.787224 41.69 2.36167C45.3417 3.93611 48.5183 6.07278 51.22 8.77167C53.9217 11.4706 56.0603 14.6444 57.6358 18.2933C59.2119 21.9417 60 25.8403 60 29.9892C60 34.1375 59.2128 38.0378 57.6383 41.69C56.0639 45.3417 53.9272 48.5183 51.2283 51.22C48.5294 53.9217 45.3556 56.0603 41.7067 57.6358C38.0583 59.2119 34.1597 60 30.0108 60ZM30 56.6667C37.3889 56.6667 43.6806 54.0694 48.875 48.875C54.0694 43.6806 56.6667 37.3889 56.6667 30C56.6667 22.6111 54.0694 16.3194 48.875 11.125C43.6806 5.93056 37.3889 3.33333 30 3.33333C22.6111 3.33333 16.3194 5.93056 11.125 11.125C5.93056 16.3194 3.33333 22.6111 3.33333 30C3.33333 37.3889 5.93056 43.6806 11.125 48.875C16.3194 54.0694 22.6111 56.6667 30 56.6667Z" fill="#4044E8"/>
                  <path d="M30 38.6792L38.2242 44.91C38.7625 45.3117 39.3117 45.3256 39.8717 44.9517C40.4317 44.5778 40.6156 44.0661 40.4233 43.4167L37.3075 33.115L45.2942 27.4775C45.8803 27.0436 46.0664 26.5053 45.8525 25.8625C45.6386 25.2192 45.1878 24.8975 44.5 24.8975H34.6925L31.3267 14.0767C31.0944 13.4272 30.6528 13.1025 30.0017 13.1025C29.3511 13.1025 28.9083 13.4272 28.6733 14.0767L25.3075 24.8975H15.5C14.8122 24.8975 14.3614 25.2192 14.1475 25.8625C13.9336 26.5053 14.1197 27.0436 14.7058 27.4775L22.6925 33.115L19.5767 43.4167C19.3844 44.0661 19.5683 44.5778 20.1283 44.9517C20.6883 45.3256 21.2375 45.3117 21.7758 44.91L30 38.6792ZM30.0108 60C25.8625 60 21.9622 59.2128 18.31 57.6383C14.6583 56.0639 11.4817 53.9272 8.78 51.2283C6.07833 48.5294 3.93972 45.3556 2.36417 41.7067C0.788055 38.0583 0 34.1597 0 30.0108C0 25.8625 0.787222 21.9622 2.36167 18.31C3.93611 14.6583 6.07278 11.4817 8.77167 8.78C11.4706 6.07833 14.6444 3.93972 18.2933 2.36417C21.9417 0.788055 25.8403 0 29.9892 0C34.1375 0 38.0378 0.787224 41.69 2.36167C45.3417 3.93611 48.5183 6.07278 51.22 8.77167C53.9217 11.4706 56.0603 14.6444 57.6358 18.2933C59.2119 21.9417 60 25.8403 60 29.9892C60 34.1375 59.2128 38.0378 57.6383 41.69C56.0639 45.3417 53.9272 48.5183 51.2283 51.22C48.5294 53.9217 45.3556 56.0603 41.7067 57.6358C38.0583 59.2119 34.1597 60 30.0108 60ZM30 56.6667C37.3889 56.6667 43.6806 54.0694 48.875 48.875C54.0694 43.6806 56.6667 37.3889 56.6667 30C56.6667 22.6111 54.0694 16.3194 48.875 11.125C43.6806 5.93056 37.3889 3.33333 30 3.33333C22.6111 3.33333 16.3194 5.93056 11.125 11.125C5.93056 16.3194 3.33333 22.6111 3.33333 30C3.33333 37.3889 5.93056 43.6806 11.125 48.875C16.3194 54.0694 22.6111 56.6667 30 56.6667Z" fill="white" fillOpacity="0.3"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                  color: '#F1F2F4',
                }}
              >
                NEW BUSINESS
              </h3>
              
              {/* Subtitle */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: '#D5D7DD',
                }}
              >
                Partnerships, Strategy, Consulting
              </p>
              
              {/* Email */}
              <a 
                href="mailto:hello@dexiolabx.com"
                className="hover:opacity-80 transition"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#F1F2F4',
                }}
              >
                hello@dexiolabx.com
              </a>
            </div>

            {/* CLIENT SUPPORT Card */}
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#131517',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Icon */}
              <div 
                className="mb-8 flex items-center justify-center"
                style={{ width: '80px', height: '80px' }}
              >
                <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.8975 53.3333C30.4231 53.3333 30.0267 53.1742 29.7083 52.8558C29.39 52.5375 29.2308 52.1411 29.2308 51.6667C29.2308 51.1922 29.39 50.7958 29.7083 50.4775C30.0267 50.1592 30.4231 50 30.8975 50H51.2817C51.8372 50 52.3181 49.8292 52.7242 49.4875C53.1303 49.1453 53.3333 48.6964 53.3333 48.1408V25.1792C53.3333 18.9358 51.0375 13.7211 46.4458 9.535C41.8536 5.34944 36.3717 3.25667 30 3.25667C23.6283 3.25667 18.1464 5.34944 13.5542 9.535C8.9625 13.7211 6.66667 18.9358 6.66667 25.1792V42.4358C6.66667 42.9103 6.5075 43.3067 6.18917 43.625C5.87083 43.9433 5.47444 44.1025 5 44.1025C3.63667 44.1025 2.4625 43.6419 1.4775 42.7208C0.4925 41.8003 0 40.6583 0 39.295V33.0125C0 32.0169 0.323611 31.1336 0.970833 30.3625C1.61861 29.5908 2.40611 28.9636 3.33333 28.4808L3.39083 24.385C3.49361 20.9061 4.28111 17.6839 5.75333 14.7183C7.22555 11.7522 9.16361 9.17083 11.5675 6.97417C13.9714 4.7775 16.7642 3.06611 19.9458 1.84C23.1275 0.613335 26.4789 0 30 0C33.5211 0 36.8694 0.613335 40.045 1.84C43.22 3.06611 46.0128 4.77445 48.4233 6.965C50.8333 9.155 52.7714 11.7328 54.2375 14.6983C55.7031 17.6644 56.4936 20.8867 56.6092 24.365L56.6667 28.3783C57.5511 28.7928 58.3278 29.3506 58.9967 30.0517C59.6656 30.7522 60 31.5939 60 32.5767V39.795C60 40.7778 59.6656 41.6197 58.9967 42.3208C58.3278 43.0214 57.5511 43.5789 56.6667 43.9933V48.1408C56.6667 49.5897 56.1422 50.8172 55.0933 51.8233C54.0439 52.83 52.7733 53.3333 51.2817 53.3333H30.8975ZM21.2817 31.795C20.5939 31.795 19.9947 31.5611 19.4842 31.0933C18.9736 30.625 18.7183 30.0469 18.7183 29.3592C18.7183 28.6708 18.9736 28.0822 19.4842 27.5933C19.9947 27.1039 20.5939 26.8592 21.2817 26.8592C21.97 26.8592 22.5694 27.1039 23.08 27.5933C23.5906 28.0822 23.8458 28.6708 23.8458 29.3592C23.8458 30.0469 23.5906 30.625 23.08 31.0933C22.5694 31.5611 21.97 31.795 21.2817 31.795ZM38.7183 31.795C38.03 31.795 37.4306 31.5611 36.92 31.0933C36.4094 30.625 36.1542 30.0469 36.1542 29.3592C36.1542 28.6708 36.4094 28.0822 36.92 27.5933C37.4306 27.1039 38.03 26.8592 38.7183 26.8592C39.4061 26.8592 40.0053 27.1039 40.5158 27.5933C41.0264 28.0822 41.2817 28.6708 41.2817 29.3592C41.2817 30.0469 41.0264 30.625 40.5158 31.0933C40.0053 31.5611 39.4061 31.795 38.7183 31.795ZM12.3908 26.5C12.0875 21.5083 13.6944 17.2542 17.2117 13.7375C20.7289 10.2203 25.0472 8.46167 30.1667 8.46167C34.47 8.46167 38.2831 9.75333 41.6058 12.3367C44.9286 14.92 46.9575 18.3142 47.6925 22.5192C43.2781 22.4636 39.1808 21.3375 35.4008 19.1408C31.6208 16.9442 28.72 13.8886 26.6983 9.97417C25.895 13.8203 24.2231 17.1911 21.6825 20.0867C19.1419 22.9817 16.0447 25.1194 12.3908 26.5Z" fill="#F06058"/>
                  <path d="M30.8975 53.3333C30.4231 53.3333 30.0267 53.1742 29.7083 52.8558C29.39 52.5375 29.2308 52.1411 29.2308 51.6667C29.2308 51.1922 29.39 50.7958 29.7083 50.4775C30.0267 50.1592 30.4231 50 30.8975 50H51.2817C51.8372 50 52.3181 49.8292 52.7242 49.4875C53.1303 49.1453 53.3333 48.6964 53.3333 48.1408V25.1792C53.3333 18.9358 51.0375 13.7211 46.4458 9.535C41.8536 5.34944 36.3717 3.25667 30 3.25667C23.6283 3.25667 18.1464 5.34944 13.5542 9.535C8.9625 13.7211 6.66667 18.9358 6.66667 25.1792V42.4358C6.66667 42.9103 6.5075 43.3067 6.18917 43.625C5.87083 43.9433 5.47444 44.1025 5 44.1025C3.63667 44.1025 2.4625 43.6419 1.4775 42.7208C0.4925 41.8003 0 40.6583 0 39.295V33.0125C0 32.0169 0.323611 31.1336 0.970833 30.3625C1.61861 29.5908 2.40611 28.9636 3.33333 28.4808L3.39083 24.385C3.49361 20.9061 4.28111 17.6839 5.75333 14.7183C7.22555 11.7522 9.16361 9.17083 11.5675 6.97417C13.9714 4.7775 16.7642 3.06611 19.9458 1.84C23.1275 0.613335 26.4789 0 30 0C33.5211 0 36.8694 0.613335 40.045 1.84C43.22 3.06611 46.0128 4.77445 48.4233 6.965C50.8333 9.155 52.7714 11.7328 54.2375 14.6983C55.7031 17.6644 56.4936 20.8867 56.6092 24.365L56.6667 28.3783C57.5511 28.7928 58.3278 29.3506 58.9967 30.0517C59.6656 30.7522 60 31.5939 60 32.5767V39.795C60 40.7778 59.6656 41.6197 58.9967 42.3208C58.3278 43.0214 57.5511 43.5789 56.6667 43.9933V48.1408C56.6667 49.5897 56.1422 50.8172 55.0933 51.8233C54.0439 52.83 52.7733 53.3333 51.2817 53.3333H30.8975ZM21.2817 31.795C20.5939 31.795 19.9947 31.5611 19.4842 31.0933C18.9736 30.625 18.7183 30.0469 18.7183 29.3592C18.7183 28.6708 18.9736 28.0822 19.4842 27.5933C19.9947 27.1039 20.5939 26.8592 21.2817 26.8592C21.97 26.8592 22.5694 27.1039 23.08 27.5933C23.5906 28.0822 23.8458 28.6708 23.8458 29.3592C23.8458 30.0469 23.5906 30.625 23.08 31.0933C22.5694 31.5611 21.97 31.795 21.2817 31.795ZM38.7183 31.795C38.03 31.795 37.4306 31.5611 36.92 31.0933C36.4094 30.625 36.1542 30.0469 36.1542 29.3592C36.1542 28.6708 36.4094 28.0822 36.92 27.5933C37.4306 27.1039 38.03 26.8592 38.7183 26.8592C39.4061 26.8592 40.0053 27.1039 40.5158 27.5933C41.0264 28.0822 41.2817 28.6708 41.2817 29.3592C41.2817 30.0469 41.0264 30.625 40.5158 31.0933C40.0053 31.5611 39.4061 31.795 38.7183 31.795ZM12.3908 26.5C12.0875 21.5083 13.6944 17.2542 17.2117 13.7375C20.7289 10.2203 25.0472 8.46167 30.1667 8.46167C34.47 8.46167 38.2831 9.75333 41.6058 12.3367C44.9286 14.92 46.9575 18.3142 47.6925 22.5192C43.2781 22.4636 39.1808 21.3375 35.4008 19.1408C31.6208 16.9442 28.72 13.8886 26.6983 9.97417C25.895 13.8203 24.2231 17.1911 21.6825 20.0867C19.1419 22.9817 16.0447 25.1194 12.3908 26.5Z" fill="white" fillOpacity="0.15"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                  color: '#F1F2F4',
                }}
              >
                CLIENT SUPPORT
              </h3>
              
              {/* Subtitle */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: '#D5D7DD',
                }}
              >
                Existing Projects, Platform Help
              </p>
              
              {/* Email */}
              <a 
                href="mailto:support@dexiolabx.com"
                className="hover:opacity-80 transition"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#F1F2F4',
                }}
              >
                support@dexiolabx.com
              </a>
            </div>

            {/* CAREERS Card */}
            <div 
              className="rounded-2xl p-8"
              style={{
                backgroundColor: '#131517',
                border: '1px solid rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Icon */}
              <div 
                className="mb-8 flex items-center justify-center"
                style={{ width: '80px', height: '80px' }}
              >
                <svg width="60" height="54" viewBox="0 0 60 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.385 53.3333C3.85055 53.3333 2.56944 52.8194 1.54167 51.7917C0.513889 50.7639 0 49.4828 0 47.9483V15.385C0 13.8506 0.513889 12.5694 1.54167 11.5417C2.56944 10.5139 3.85055 10 5.385 10H20V5.38417C20 3.85028 20.5139 2.56944 21.5417 1.54167C22.5694 0.513889 23.8506 0 25.385 0H34.615C36.1494 0 37.4306 0.513889 38.4583 1.54167C39.4861 2.56944 40 3.85028 40 5.38417V10H54.615C56.1494 10 57.4306 10.5139 58.4583 11.5417C59.4861 12.5694 60 13.8506 60 15.385V47.9483C60 49.4828 59.4861 50.7639 58.4583 51.7917C57.4306 52.8194 56.1494 53.3333 54.615 53.3333H5.385ZM23.3333 10H36.6667V5.38417C36.6667 4.87139 36.4531 4.40139 36.0258 3.97417C35.5986 3.54694 35.1283 3.33333 34.615 3.33333H25.385C24.8717 3.33333 24.4014 3.54694 23.9742 3.97417C23.5469 4.40139 23.3333 4.87139 23.3333 5.38417V10ZM56.6667 35H36.6667V37.3075C36.6667 38.0814 36.4114 38.7236 35.9008 39.2342C35.3903 39.7447 34.7481 40 33.9742 40H26.0258C25.2519 40 24.6097 39.7447 24.0992 39.2342C23.5886 38.7236 23.3333 38.0814 23.3333 37.3075V35H3.33333V47.9483C3.33333 48.4617 3.54694 48.9319 3.97417 49.3592C4.40139 49.7864 4.87167 50 5.385 50H54.615C55.1283 50 55.5986 49.7864 56.0258 49.3592C56.4531 48.9319 56.6667 48.4617 56.6667 47.9483V35ZM26.6667 36.6667H33.3333V30H26.6667V36.6667ZM3.33333 31.6667H23.3333V29.3592C23.3333 28.5853 23.5886 27.9431 24.0992 27.4325C24.6097 26.9219 25.2519 26.6667 26.0258 26.6667H33.9742C34.7481 26.6667 35.3903 26.9219 35.9008 27.4325C36.4114 27.9431 36.6667 28.5853 36.6667 29.3592V31.6667H56.6667V15.385C56.6667 14.8717 56.4531 14.4014 56.0258 13.9742C55.5986 13.5469 55.1283 13.3333 54.615 13.3333H5.385C4.87167 13.3333 4.40139 13.5469 3.97417 13.9742C3.54694 14.4014 3.33333 14.8717 3.33333 15.385V31.6667Z" fill="#40C8E8"/>
                  <path d="M5.385 53.3333C3.85055 53.3333 2.56944 52.8194 1.54167 51.7917C0.513889 50.7639 0 49.4828 0 47.9483V15.385C0 13.8506 0.513889 12.5694 1.54167 11.5417C2.56944 10.5139 3.85055 10 5.385 10H20V5.38417C20 3.85028 20.5139 2.56944 21.5417 1.54167C22.5694 0.513889 23.8506 0 25.385 0H34.615C36.1494 0 37.4306 0.513889 38.4583 1.54167C39.4861 2.56944 40 3.85028 40 5.38417V10H54.615C56.1494 10 57.4306 10.5139 58.4583 11.5417C59.4861 12.5694 60 13.8506 60 15.385V47.9483C60 49.4828 59.4861 50.7639 58.4583 51.7917C57.4306 52.8194 56.1494 53.3333 54.615 53.3333H5.385ZM23.3333 10H36.6667V5.38417C36.6667 4.87139 36.4531 4.40139 36.0258 3.97417C35.5986 3.54694 35.1283 3.33333 34.615 3.33333H25.385C24.8717 3.33333 24.4014 3.54694 23.9742 3.97417C23.5469 4.40139 23.3333 4.87139 23.3333 5.38417V10ZM56.6667 35H36.6667V37.3075C36.6667 38.0814 36.4114 38.7236 35.9008 39.2342C35.3903 39.7447 34.7481 40 33.9742 40H26.0258C25.2519 40 24.6097 39.7447 24.0992 39.2342C23.5886 38.7236 23.3333 38.0814 23.3333 37.3075V35H3.33333V47.9483C3.33333 48.4617 3.54694 48.9319 3.97417 49.3592C4.40139 49.7864 4.87167 50 5.385 50H54.615C55.1283 50 55.5986 49.7864 56.0258 49.3592C56.4531 48.9319 56.6667 48.4617 56.6667 47.9483V35ZM26.6667 36.6667H33.3333V30H26.6667V36.6667ZM3.33333 31.6667H23.3333V29.3592C23.3333 28.5853 23.5886 27.9431 24.0992 27.4325C24.6097 26.9219 25.2519 26.6667 26.0258 26.6667H33.9742C34.7481 26.6667 35.3903 26.9219 35.9008 27.4325C36.4114 27.9431 36.6667 28.5853 36.6667 29.3592V31.6667H56.6667V15.385C56.6667 14.8717 56.4531 14.4014 56.0258 13.9742C55.5986 13.5469 55.1283 13.3333 54.615 13.3333H5.385C4.87167 13.3333 4.40139 13.5469 3.97417 13.9742C3.54694 14.4014 3.33333 14.8717 3.33333 15.385V31.6667Z" fill="white" fillOpacity="0.15"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 
                className="mb-2"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  letterSpacing: '0%',
                  textTransform: 'uppercase',
                  color: '#F1F2F4',
                }}
              >
                CAREERS
              </h3>
              
              {/* Subtitle */}
              <p 
                className="mb-6"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                We reach out when the right role opens
              </p>
              
              {/* Email */}
              <a 
                href="mailto:careers@dexiolabx.com"
                className="hover:opacity-80 transition"
                style={{
                  fontFamily: 'Sora, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '30px',
                  letterSpacing: '0%',
                  color: '#F1F2F4',
                }}
              >
                careers@dexiolabx.com
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}

