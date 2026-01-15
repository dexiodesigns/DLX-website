import React from 'react';
// import Footer from './Footer';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ContactFooter: React.FC<HeroSectionProps> = ({title, subtitle, buttonText}) => {
  return (
    <div>
      <style>{`
        @keyframes spinGradient {
          0% {
            transform: translateX(-50%) rotate(0deg);
          }
          100% {
            transform: translateX(-50%) rotate(360deg);
          }
        }
        
        .hero-container {
          position: relative;
          width: 100%;
          margin: 0 auto;
        }
        
        .hero-content-box {
            position: relative;
            padding: 200px;
            padding-top: 48px;
            padding-bottom: 68px;
        }
        
        .sunshine-effect {
            position: absolute;
            bottom: -50px;
            left: 0;
            right: 0;
            top: 0px;
            height: 412px;
            overflow: hidden;
            pointer-events: none;
            z-index: 1;
        }
        
        .sunshine-effect::before {
          content: '';
          position: absolute;
          bottom: -1160px;
          left: 50%;
          width: 1400px;
          height: 1400px;
          background: conic-gradient(
            from 0deg,
            rgba(244, 220, 124, 0.4) 0deg,
            rgba(240, 96, 88, 0.35) 90deg,
            rgba(64, 68, 232, 0.3) 180deg,
            rgba(240, 96, 88, 0.35) 270deg,
            rgba(244, 220, 124, 0.4) 360deg
          );
          border-radius: 50%;
          animation: spinGradient 8s linear infinite;
          filter: blur(80px);
          opacity: 0.9;
        }
        
        .sunshine-effect::after {
          content: '';
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 400px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(
            ellipse at center,
            rgba(244, 220, 124, 0.5) 0%,
            rgba(240, 96, 88, 0.3) 40%,
            transparent 70%
          );
          filter: blur(40px);
        }
        
        .content-wrapper {
          position: relative;
          z-index: 10;
        }
      `}</style>
      
      <div className="hero-container">
        <div className="hero-content-box">
          <div
            className="content-wrapper"
            style={{
              display: 'flex',
              padding: '72px',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '24px',
              borderRadius: '36px',
              borderTop: '2px solid #F4DC7C',
              background: 'linear-gradient(180deg, rgba(11, 12, 14, 0.50) 0%, rgba(11, 12, 14, 0.00) 100%)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p className="text-xl max-w-8xl leading-relaxed">
              {title}
            </p>

            <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8">
              <h1 className="text-white text-3xl font-bold leading-tight flex-1">
                {subtitle}
              </h1>

              <button
                className="group relative px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-3  leading-relaxed"
                style={{
                  background: 'rgb(172 78 72)',
                }}
              >
                {buttonText}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="sunshine-effect"></div>
        </div>
      </div>
      {/* <div className="w-full mt-32 py-16 px-8 rounded-lg" style={{backgroundColor: 'black'}}> */}
        {/* <Footer /> */}
        {/* </div> */}
    </div>
  );
};

export default ContactFooter;