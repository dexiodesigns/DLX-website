import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const ContactFooter: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
}) => {
  const navigate = useNavigate();
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
          height: 480px;
        }

        .hero-content-box {
          position: relative;
          padding: 200px;
          padding-top: 48px;
          padding-bottom: 8px;
        }

        @media (max-width: 768px) {
          .hero-container {
            height: 450px;
          }
          .hero-content-box {
            padding: 16px;
            padding-top: 32px;
            padding-bottom: 48px;
          }
        }

        .sunshine-effect {
          position: absolute;
          inset: 0;
          height: 480px;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        @media (max-width: 768px) {
          .sunshine-effect {
            height: 446px;
          }
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

        @media (max-width: 768px) {
          .sunshine-effect::before {
            width: 900px;
            height: 900px;
            bottom: -720px;
            filter: blur(60px);
          }
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

        @media (max-width: 768px) {
          .sunshine-effect::after {
            width: 260px;
            height: 140px;
            filter: blur(30px);
          }
        }

        .content-wrapper {
          position: relative;
          z-index: 10;
          padding: 72px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;

          #content-box-subtitle {
            line-height: 5rem;
          }
        }
          
        @media (max-width: 768px) {
          .content-wrapper {
            padding: 24px;
            display: flex;
            align-items: flex-start;
            text-align: left;
            gap: 16px;

            #content-box-subtitle {
              line-height: 2.5rem;
            }
          }
        }
      `}</style>

      <div className="hero-container">
        <div className="hero-content-box">
          <div
            className="content-wrapper"
            style={{
              borderRadius: '36px',
              borderTop: '2px solid #F06058',
              background:
                'linear-gradient(180deg, rgba(11, 12, 14, 0.50) 0%, rgba(11, 12, 14, 0.00) 100%)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <p className="text-base md:text-xl max-w-5xl leading-relaxed text-[#D5D7DD]">
              {title}
            </p>

            <div className="w-full flex flex-col md:flex-row  items-start gap-8">
              <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug md:text-left md:max-w-50 md:ml-20" id="content-box-subtitle">
                {subtitle}
              </h1>

              <button
                onClick={() => navigate('/contact')}
                className="group relative px-6 py-4 rounded-[16px] md:rounded-[24px] text-white font-semibold text-base md:text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center justify-center gap-3 md:ml-[100px] w-[180px]"
                style={{ background: 'rgb(172 78 72)' }}
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

      <Footer />
    </div>
  );
};

export default ContactFooter;
