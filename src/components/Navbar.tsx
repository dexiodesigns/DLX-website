import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp, ChevronRight, ArrowLeft, Menu, X } from "lucide-react";
import { Logo } from "./../assets/Logo";

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === "#") return false;
    return location.pathname === href || location.pathname.startsWith(href + "/");
  };

  // Check if services is active (any service page)
  const isServicesActive = location.pathname.startsWith("/services");

  // Handle scroll to show/hide navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isServicesOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);


  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const handleServiceClick = (slug: string) => {
    setIsServicesOpen(false);
    closeMobileMenu();
    navigate(`/services/${slug}`);
  };

  const services = [
    { 
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13.0385C8.66667 13.0385 10.0833 12.4532 11.25 11.2828C12.4167 10.1124 13 8.69125 13 7.01925C13 5.34725 12.4167 3.926 11.25 2.7555C10.0833 1.58517 8.66667 1 7 1C5.33333 1 3.91667 1.58517 2.75 2.7555C1.58333 3.926 1 5.34725 1 7.01925C1 8.69125 1.58333 10.1124 2.75 11.2828C3.91667 12.4532 5.33333 13.0385 7 13.0385ZM6.99925 9.59625C6.85742 9.59625 6.73875 9.54833 6.64325 9.4525C6.54775 9.35667 6.5 9.23792 6.5 9.09625V4.1345C6.5 3.99283 6.548 3.87408 6.644 3.77825C6.74 3.68242 6.85892 3.6345 7.00075 3.6345C7.14258 3.6345 7.26125 3.68242 7.35675 3.77825C7.45225 3.87408 7.5 3.99283 7.5 4.1345V9.09625C7.5 9.23792 7.452 9.35667 7.356 9.4525C7.26 9.54833 7.14108 9.59625 6.99925 9.59625ZM3.65325 9.59625C3.51142 9.59625 3.39267 9.54833 3.297 9.4525C3.2015 9.35667 3.15375 9.23792 3.15375 9.09625V6.0385C3.15375 5.89683 3.20175 5.77808 3.29775 5.68225C3.39375 5.58642 3.51267 5.5385 3.6545 5.5385C3.79633 5.5385 3.915 5.58642 4.0105 5.68225C4.106 5.77808 4.15375 5.89683 4.15375 6.0385V9.09625C4.15375 9.23792 4.10583 9.35667 4.01 9.4525C3.914 9.54833 3.79508 9.59625 3.65325 9.59625ZM10.3455 9.59625C10.2037 9.59625 10.085 9.54833 9.9895 9.4525C9.894 9.35667 9.84625 9.23792 9.84625 9.09625V7C9.84625 6.85833 9.89417 6.73958 9.99 6.64375C10.086 6.54792 10.2049 6.5 10.3468 6.5C10.4886 6.5 10.6073 6.54792 10.703 6.64375C10.7985 6.73958 10.8462 6.85833 10.8462 7V9.09625C10.8462 9.23792 10.7983 9.35667 10.7023 9.4525C10.6063 9.54833 10.4873 9.59625 10.3455 9.59625ZM7 14C5.04583 14 3.39058 13.3222 2.03425 11.9665C0.678083 10.6108 0 8.95633 0 7.003C0 5.04967 0.677833 3.39417 2.0335 2.0365C3.38917 0.678834 5.04367 0 6.997 0C8.95033 0 10.6058 0.678083 11.9635 2.03425C13.3212 3.39058 14 5.04583 14 7C14 7.87817 13.8477 8.70925 13.5433 9.49325C13.2388 10.2773 12.8198 10.9724 12.2865 11.5787L17.6655 16.9578C17.759 17.0471 17.8057 17.1607 17.8057 17.2987C17.8057 17.4368 17.759 17.5557 17.6655 17.6558C17.5718 17.7558 17.4538 17.8026 17.3115 17.7962C17.1692 17.7897 17.0513 17.7397 16.9578 17.6462L11.598 12.2865C10.9788 12.8198 10.2773 13.2388 9.49325 13.5433C8.70925 13.8477 7.87817 14 7 14Z" fill="#F1F2F4"/></svg>, 
      title: "UX Audit",
      slug: "ux-audit",
      desc: "Identify Usability Gaps, Friction Points, And Conversion Blockers Across Your Product." 
    },
    { 
      icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.05775 9.80775C7.81925 9.80775 8.46792 9.53975 9.00375 9.00375C9.53975 8.46792 9.80775 7.81925 9.80775 7.05775C9.80775 6.29625 9.53975 5.6475 9.00375 5.1115C8.46792 4.57567 7.81925 4.30775 7.05775 4.30775C6.29625 4.30775 5.6475 4.57567 5.1115 5.1115C4.57567 5.6475 4.30775 6.29625 4.30775 7.05775C4.30775 7.81925 4.57567 8.46792 5.1115 9.00375C5.6475 9.53975 6.29625 9.80775 7.05775 9.80775ZM7.05775 10.8077C6.01542 10.8077 5.12983 10.4433 4.401 9.7145C3.67217 8.98567 3.30775 8.10008 3.30775 7.05775C3.30775 6.01542 3.67217 5.12983 4.401 4.401C5.12983 3.67217 6.01542 3.30775 7.05775 3.30775C8.10008 3.30775 8.98567 3.67217 9.7145 4.401C10.4433 5.12983 10.8077 6.01542 10.8077 7.05775C10.8077 7.47958 10.7408 7.88117 10.6068 8.2625C10.4728 8.64383 10.2782 9.00117 10.023 9.3345L12.4538 11.7463C12.5513 11.8436 12.6023 11.9583 12.6068 12.0905C12.6113 12.2225 12.5583 12.3436 12.448 12.4537C12.3378 12.5602 12.2199 12.6144 12.0943 12.6163C11.9686 12.6182 11.8507 12.5641 11.7405 12.4537L9.3345 10.0288C9.00117 10.2839 8.64383 10.4775 8.2625 10.6095C7.88117 10.7417 7.47958 10.8077 7.05775 10.8077ZM1.6155 16C1.15517 16 0.770833 15.8458 0.4625 15.5375C0.154167 15.2292 0 14.8448 0 14.3845V11.5C0 11.3577 0.0477499 11.2388 0.14325 11.1433C0.23875 11.0478 0.357667 11 0.5 11C0.642333 11 0.76125 11.0478 0.85675 11.1433C0.95225 11.2388 1 11.3577 1 11.5V14.3845C1 14.5385 1.06408 14.6796 1.19225 14.8077C1.32042 14.9359 1.4615 15 1.6155 15H4.5C4.64233 15 4.76125 15.0477 4.85675 15.1432C4.95225 15.2387 5 15.3577 5 15.5C5 15.6423 4.95225 15.7613 4.85675 15.8568C4.76125 15.9523 4.64233 16 4.5 16H1.6155ZM14.3845 16H11.5C11.3577 16 11.2387 15.9523 11.1432 15.8568C11.0477 15.7613 11 15.6423 11 15.5C11 15.3577 11.0477 15.2387 11.1432 15.1432C11.2387 15.0477 11.3577 15 11.5 15H14.3845C14.5385 15 14.6796 14.9359 14.8077 14.8077C14.9359 14.6796 15 14.5385 15 14.3845V11.5C15 11.3577 15.0477 11.2388 15.1432 11.1433C15.2387 11.0478 15.3577 11 15.5 11C15.6423 11 15.7613 11.0478 15.8568 11.1433C15.9523 11.2388 16 11.3577 16 11.5V14.3845C16 14.8448 15.8458 15.2292 15.5375 15.5375C15.2292 15.8458 14.8448 16 14.3845 16ZM0 4.5V1.6155C0 1.15517 0.154167 0.770833 0.4625 0.4625C0.770833 0.154167 1.15517 0 1.6155 0H4.5C4.64233 0 4.76125 0.0477495 4.85675 0.14325C4.95225 0.23875 5 0.357667 5 0.5C5 0.642333 4.95225 0.76125 4.85675 0.85675C4.76125 0.95225 4.64233 1 4.5 1H1.6155C1.4615 1 1.32042 1.06408 1.19225 1.19225C1.06408 1.32042 1 1.4615 1 1.6155V4.5C1 4.64233 0.95225 4.76125 0.85675 4.85675C0.76125 4.95225 0.642333 5 0.5 5C0.357667 5 0.23875 4.95225 0.14325 4.85675C0.0477499 4.76125 0 4.64233 0 4.5ZM15 4.5V1.6155C15 1.4615 14.9359 1.32042 14.8077 1.19225C14.6796 1.06408 14.5385 1 14.3845 1H11.5C11.3577 1 11.2387 0.95225 11.1432 0.85675C11.0477 0.76125 11 0.642333 11 0.5C11 0.357667 11.0477 0.23875 11.1432 0.14325C11.2387 0.0477495 11.3577 0 11.5 0H14.3845C14.8448 0 15.2292 0.154167 15.5375 0.4625C15.8458 0.770833 16 1.15517 16 1.6155V4.5C16 4.64233 15.9523 4.76125 15.8568 4.85675C15.7613 4.95225 15.6423 5 15.5 5C15.3577 5 15.2387 4.95225 15.1432 4.85675C15.0477 4.76125 15 4.64233 15 4.5Z" fill="#F1F2F4"/></svg>, 
      title: "UX Research",
      slug: "ux-research",
      desc: "Understand Real User Needs And Behaviors Through Validated Research." 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.3845 8.55775V4.80775C4.3845 4.58342 4.46308 4.39275 4.62025 4.23575C4.77725 4.07858 4.96792 4 5.19225 4C5.41658 4 5.60725 4.07858 5.76425 4.23575C5.92142 4.39275 6 4.58342 6 4.80775V8.55775C6 8.78208 5.92142 8.97275 5.76425 9.12975C5.60725 9.28692 5.41658 9.3655 5.19225 9.3655C4.96792 9.3655 4.77725 9.28692 4.62025 9.12975C4.46308 8.97275 4.3845 8.78208 4.3845 8.55775ZM8.73075 9.852V0.80775C8.73075 0.583417 8.80925 0.39275 8.96625 0.23575C9.12325 0.0785832 9.314 0 9.5385 0C9.76283 0 9.9535 0.0785832 10.1105 0.23575C10.2675 0.39275 10.346 0.583417 10.346 0.80775V9.852C10.346 10.1212 10.2633 10.3231 10.098 10.4578C9.9325 10.5924 9.74692 10.6597 9.54125 10.6597C9.33558 10.6597 9.14909 10.5924 8.98175 10.4578C8.81442 10.3231 8.73075 10.1212 8.73075 9.852ZM0 11.9943V8.80775C0 8.58342 0.0785 8.39275 0.2355 8.23575C0.3925 8.07858 0.58325 8 0.80775 8C1.03208 8 1.22275 8.07858 1.37975 8.23575C1.53675 8.39275 1.61525 8.58342 1.61525 8.80775V11.9943C1.61525 12.2636 1.53258 12.4655 1.36725 12.6C1.20175 12.7347 1.01617 12.802 0.8105 12.802C0.604667 12.802 0.418167 12.7347 0.251 12.6C0.0836669 12.4655 0 12.2636 0 11.9943ZM1.08525 17.8577C0.86175 17.8577 0.707334 17.7562 0.622 17.553C0.536833 17.3498 0.575667 17.1668 0.7385 17.004L4.646 13.0962C4.791 12.9514 4.9695 12.8707 5.1815 12.854C5.39367 12.8373 5.58183 12.9014 5.746 13.0462L8.73075 15.6115L15.4845 8.85775H13.6923C13.5506 8.85775 13.4318 8.80975 13.336 8.71375C13.2402 8.61775 13.1923 8.49883 13.1923 8.357C13.1923 8.21517 13.2402 8.0965 13.336 8.001C13.4318 7.9055 13.5506 7.85775 13.6923 7.85775H16.3845C16.6133 7.85775 16.8052 7.93517 16.96 8.09C17.1148 8.24483 17.1923 8.43667 17.1923 8.6655V11.3577C17.1923 11.4994 17.1443 11.6182 17.0483 11.714C16.9523 11.8098 16.8333 11.8577 16.6915 11.8577C16.5497 11.8577 16.431 11.8098 16.3355 11.714C16.24 11.6182 16.1923 11.4994 16.1923 11.3577V9.5655L9.2885 16.4693C9.1435 16.6141 8.965 16.6948 8.753 16.7115C8.54083 16.7282 8.35267 16.6641 8.1885 16.5193L5.20375 13.954L1.446 17.7115C1.40317 17.7522 1.3495 17.7867 1.285 17.815C1.2205 17.8435 1.15392 17.8577 1.08525 17.8577Z" fill="#F1F2F4"/></svg>, 
      title: "Data-Driven UX",
      slug: "data-driven-ux",
      desc: "Turn Product Data Into Better Experiences And UX Decisions." 
    },    
    { 
      icon: <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.80775 16C1.57558 16 1.38292 15.9234 1.22975 15.7703C1.07658 15.6171 1 15.4244 1 15.1923V14.1712C1 13.9557 1.04358 13.7464 1.13075 13.5433C1.21792 13.3401 1.33392 13.1661 1.47875 13.0212L14.2135 0.29225C14.3237 0.182083 14.4397 0.105833 14.5615 0.0634995C14.6833 0.0211661 14.8052 0 14.927 0C15.0527 0 15.1786 0.0211661 15.3048 0.0634995C15.4311 0.105833 15.541 0.182083 15.6345 0.29225L16.7078 1.3655C16.8179 1.459 16.8942 1.56892 16.9365 1.69525C16.9788 1.82142 17 1.94733 17 2.073C17 2.19483 16.9788 2.31667 16.9365 2.4385C16.8942 2.56033 16.8179 2.67633 16.7078 2.7865L3.97875 15.5212C3.83392 15.6661 3.65992 15.7821 3.45675 15.8693C3.25358 15.9564 3.04425 16 2.82875 16H1.80775ZM2 15H3.073L13.6288 4.45L13.102 3.898L12.55 3.37125L2 13.927V15ZM13.102 3.898L12.55 3.37125L13.6288 4.45L13.102 3.898ZM10.2693 16C11.3744 16 12.4007 15.7365 13.348 15.2095C14.2955 14.6827 14.7693 13.9462 14.7693 13C14.7693 12.4923 14.6103 12.0298 14.2923 11.6125C13.9744 11.1952 13.5155 10.8391 12.9155 10.5442C12.7975 10.4801 12.6725 10.4673 12.5405 10.5058C12.4083 10.5443 12.3083 10.6186 12.2405 10.7288C12.1725 10.8391 12.1578 10.9632 12.1962 11.101C12.2346 11.2388 12.3127 11.3398 12.4307 11.4038C12.8564 11.6128 13.1859 11.8532 13.4193 12.125C13.6526 12.3968 13.7693 12.6885 13.7693 13C13.7693 13.5628 13.4234 14.0368 12.7318 14.422C12.0401 14.8073 11.2193 15 10.2693 15C10.1269 15 10.008 15.0477 9.9125 15.1432C9.817 15.2387 9.76925 15.3577 9.76925 15.5C9.76925 15.6423 9.817 15.7613 9.9125 15.8568C10.008 15.9523 10.1269 16 10.2693 16ZM6 2.5C6 2.84867 5.81567 3.16375 5.447 3.44525C5.0785 3.72658 4.35 4.10892 3.2615 4.59225C2.018 5.13708 1.1635 5.61817 0.698 6.0355C0.232667 6.45283 0 6.941 0 7.5C0 7.89483 0.112833 8.2365 0.3385 8.525C0.564167 8.8135 0.835333 9.05708 1.152 9.25575C1.266 9.33658 1.38583 9.36125 1.5115 9.32975C1.63717 9.29842 1.74042 9.22567 1.82125 9.1115C1.90192 8.9975 1.9275 8.87442 1.898 8.74225C1.8685 8.61025 1.79675 8.50383 1.68275 8.423C1.45058 8.27567 1.27875 8.12508 1.16725 7.97125C1.05575 7.81742 1 7.66033 1 7.5C1 7.1975 1.18525 6.90133 1.55575 6.6115C1.92625 6.32183 2.62692 5.95583 3.65775 5.5135C4.97058 4.957 5.85583 4.45567 6.3135 4.0095C6.77117 3.5635 7 3.06033 7 2.5C7 1.77567 6.675 1.17792 6.025 0.706751C5.375 0.235584 4.53333 0 3.5 0C2.87817 0 2.2875 0.114083 1.728 0.34225C1.16833 0.570417 0.762167 0.850583 0.5095 1.18275C0.416 1.29675 0.376333 1.41983 0.3905 1.552C0.4045 1.684 0.468583 1.79483 0.58275 1.8845C0.69675 1.96533 0.816583 1.99867 0.94225 1.9845C1.06792 1.9705 1.17758 1.91667 1.27125 1.823C1.54292 1.55133 1.86533 1.34625 2.2385 1.20775C2.6115 1.06925 3.032 1 3.5 1C4.28583 1 4.899 1.14808 5.3395 1.44425C5.77983 1.74042 6 2.09233 6 2.5Z" fill="#F1F2F4"/></svg>, 
      title: "UX Design",
      slug: "ux-design",
      desc: "Design Intuitive, Scalable Product Experiences That Balance User Needs With Business Goals." 
    },
    { 
      icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.9115 8.71514L9.89625 11.9729C9.78975 12.1407 9.63175 12.2125 9.42225 12.1881C9.21258 12.1638 9.08533 12.0491 9.0405 11.8439L8.2635 8.67864L0.9 16.0614C0.8065 16.1549 0.69275 16.2058 0.55875 16.2141C0.42475 16.2225 0.302583 16.1716 0.19225 16.0614C0.0859163 15.9549 0.0327499 15.8369 0.0327499 15.7074C0.0327499 15.5779 0.0859163 15.46 0.19225 15.3536L7.575 7.96514L4.429 7.18814C4.22383 7.14331 4.10583 7.01931 4.075 6.81614C4.04433 6.61297 4.11292 6.45814 4.28075 6.35164L7.5385 4.34214L7.25775 0.517142C7.23725 0.311975 7.31608 0.160058 7.49425 0.061391C7.67242 -0.0374423 7.84167 -0.0169417 8.002 0.122892L10.9347 2.59389L14.479 1.14589C14.6673 1.06389 14.8365 1.09789 14.9865 1.24789C15.1365 1.39789 15.1705 1.56714 15.0885 1.75564L13.6597 5.29964L16.1308 8.22664C16.2706 8.38698 16.2943 8.55939 16.202 8.74389C16.1097 8.92856 15.9609 9.01064 15.7557 8.99014L11.9115 8.71514ZM0.13075 2.22664C0.0435832 2.13948 0 2.04206 0 1.93439C0 1.82673 0.0435832 1.72931 0.13075 1.64214L0.83475 0.938141C0.921917 0.850975 1.01933 0.807392 1.127 0.807392C1.23467 0.807392 1.33208 0.850975 1.41925 0.938141L2.123 1.64214C2.21033 1.72931 2.254 1.82673 2.254 1.93439C2.254 2.04206 2.21033 2.13948 2.123 2.22664L1.41925 2.93064C1.33208 3.01781 1.23467 3.06139 1.127 3.06139C1.01933 3.06139 0.921917 3.01781 0.83475 2.93064L0.13075 2.22664ZM9.7135 10.3594L11.375 7.67289L14.527 7.90564L12.4885 5.47664L13.6712 2.55739L10.752 3.74014L8.323 1.70739L8.55575 4.85364L5.8885 6.52089L8.94625 7.28239L9.7135 10.3594ZM14.027 16.1229L13.323 15.4189C13.2358 15.3317 13.1923 15.2343 13.1923 15.1266C13.1923 15.019 13.2358 14.9216 13.323 14.8344L14.027 14.1306C14.1142 14.0433 14.2116 13.9996 14.3192 13.9996C14.4269 13.9996 14.5243 14.0433 14.6115 14.1306L15.3155 14.8344C15.4027 14.9216 15.4462 15.019 15.4462 15.1266C15.4462 15.2343 15.4027 15.3317 15.3155 15.4189L14.6115 16.1229C14.5243 16.2101 14.4269 16.2536 14.3192 16.2536C14.2116 16.2536 14.1142 16.2101 14.027 16.1229Z" fill="#F1F2F4"/></svg>, 
      title: "Next-Gen Experience Design",
      slug: "next-gen-ux",
      desc: "Design Intelligent, Immersive, And Future-Ready Experiences For Emerging Technologies." 
    },
    { 
      icon: <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.153629 9.64625C0.0434624 9.53592 -0.00745429 9.417 0.000879043 9.2895C0.00921238 9.162 0.0601291 9.05142 0.153629 8.95775L4.96713 4.0885C5.27363 3.76933 5.65246 3.60975 6.10363 3.60975C6.55496 3.60975 6.94021 3.76933 7.25938 4.0885L9.68063 6.5155C9.79596 6.63083 9.93696 6.6885 10.1036 6.6885C10.2703 6.6885 10.4178 6.63083 10.5461 6.5155L16.1306 1H13.2999C13.1575 1 13.0386 0.952251 12.9431 0.856751C12.8476 0.761251 12.7999 0.642333 12.7999 0.5C12.7999 0.357667 12.8476 0.238751 12.9431 0.143251C13.0386 0.047751 13.1575 0 13.2999 0H16.9921C17.2243 0 17.417 0.076667 17.5701 0.23C17.7233 0.383167 17.7999 0.57575 17.7999 0.80775V4.5C17.7999 4.64233 17.7521 4.76125 17.6566 4.85675C17.5611 4.95225 17.4422 5 17.2999 5C17.1575 5 17.0386 4.9555 16.9431 4.8665C16.8476 4.77733 16.7999 4.66158 16.7999 4.51925V1.70775L11.2404 7.2675C10.9339 7.57383 10.555 7.727 10.1036 7.727C9.65246 7.727 9.27363 7.57383 8.96713 7.2675L6.54613 4.84625C6.43063 4.73092 6.28313 4.67325 6.10363 4.67325C5.92413 4.67325 5.77671 4.73092 5.66138 4.84625L0.861379 9.64625C0.755046 9.75258 0.637129 9.80575 0.507629 9.80575C0.378129 9.80575 0.260129 9.75258 0.153629 9.64625Z" fill="#F1F2F4"/></svg>, 
      title: "Growth-Focused Marketing Design",
      slug: "marketing-design",
      desc: "High-impact creatives crafted to drive attention, engagement, and conversions." 
    },
    { 
      icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.9385 11.9808L11.775 9.5095C11.9698 9.38767 12.0673 9.2185 12.0673 9.002C12.0673 8.78533 11.9698 8.61483 11.775 8.4905L7.9385 6.01925C7.73983 5.87825 7.53375 5.86608 7.32025 5.98275C7.10675 6.09958 7 6.28158 7 6.52875V11.4713C7 11.7184 7.10675 11.9004 7.32025 12.0173C7.53375 12.1339 7.73983 12.1217 7.9385 11.9808ZM9.00325 18C7.75875 18 6.58867 17.7638 5.493 17.2915C4.3975 16.8192 3.4445 16.1782 2.634 15.3685C1.8235 14.5588 1.18192 13.6067 0.70925 12.512C0.236417 11.4175 0 10.2479 0 9.00325C0 7.75875 0.236167 6.58867 0.7085 5.493C1.18083 4.3975 1.82183 3.4445 2.6315 2.634C3.44117 1.8235 4.39333 1.18192 5.488 0.70925C6.5825 0.236417 7.75208 0 8.99675 0C10.2413 0 11.4113 0.236167 12.507 0.708501C13.6025 1.18083 14.5555 1.82183 15.366 2.6315C16.1765 3.44117 16.8181 4.39333 17.2908 5.488C17.7636 6.5825 18 7.75208 18 8.99675C18 10.2413 17.7638 11.4113 17.2915 12.507C16.8192 13.6025 16.1782 14.5555 15.3685 15.366C14.5588 16.1765 13.6067 16.8181 12.512 17.2908C11.4175 17.7636 10.2479 18 9.00325 18ZM9 17C11.2333 17 13.125 16.225 14.675 14.675C16.225 13.125 17 11.2333 17 9C17 6.76667 16.225 4.875 14.675 3.325C13.125 1.775 11.2333 1 9 1C6.76667 1 4.875 1.775 3.325 3.325C1.775 4.875 1 6.76667 1 9C1 11.2333 1.775 13.125 3.325 14.675C4.875 16.225 6.76667 17 9 17Z" fill="#F1F2F4"/></svg>, 
      title: "Motion Graphics",
      slug: "motion-graphics",
      desc: "Explain Products And Stories Through Motion. Clear, Engaging, And Conversion-Oriented." 
    },
  ];

  const navItems = [
    { name: "Services", hasSubmenu: true, href: "#" },
    // { name: "Products", hasSubmenu: false, href: "/products" },
    // { name: "Academy", hasSubmenu: false, href: "/academy" },
    // { name: "Resources", hasSubmenu: false, href: "/resources" },
    { name: "Company", hasSubmenu: false, href: "/company" },
    { name: "Contact", hasSubmenu: false, href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#0E0F11]/84 md:bg-[#0B0C0E]/85 backdrop-blur-md text-white font-['Inter']">
        <div className="px-5 py-4 md:px-[200px] md:py-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Logo width="100" height="35" />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 items-center text-sm font-medium">
                <li className="relative text-[16px] font-[400]">
                  <button 
                    ref={buttonRef}
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`cursor-pointer transition flex items-center gap-1 outline-none ${
                      isServicesActive ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    <span className="relative">
                      Services
                      {isServicesActive && (
                        <div 
                          className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#6366f1]"
                          style={{ width: '40px', height: '4px', borderRadius: '4px' }}
                        />
                      )}
                    </span>
                    {isServicesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </li>
                {navItems.slice(1).map((item) => (
                  <li key={item.name} className="relative text-[16px] font-[400]">
                    <Link
                      to={item.href}
                      className={`cursor-pointer transition ${
                        isActive(item.href) ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {isActive(item.href) && (
                      <div 
                        className="absolute left-1/2 -translate-x-1/2 -bottom-3 bg-[#6366f1]"
                        style={{ width: '40px', height: '4px', borderRadius: '4px' }}
                      />
                    )}
                  </li>
                ))}
            </ul>
          </div>
          <button 
            className="md:hidden py-[12px] px-[16px] md:p-2 hover:bg-white/10 rounded-lg transition"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>
      {isServicesOpen && (
        <div 
          ref={dropdownRef}
          className="hidden md:flex fixed top-[76px] left-0 w-full z-40 bg-[#22252A]/80 backdrop-blur-md text-white font-['Inter'] border-t border-white/10 justify-center py-6"
          style={{ 
            height: '466px',
          }}
        >
          <div 
            className="px-6 md:px-[200px] py-6 h-full w-full grid grid-cols-3 gap-x-12 gap-y-12 overflow-y-auto"
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                onClick={() => handleServiceClick(service.slug)}
                className="flex gap-4 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer group"
              >
                <div className="mt-1 text-white/90 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1" style={{ fontFamily: 'Sora, sans-serif', fontSize: '16px', fontWeight: 600, color: '#F1F2F4' }}>{service.title}</h3>
                  <p style={{ overflow: 'hidden', color: '#D5D7DD', textOverflow: 'ellipsis', fontFamily: 'Inter', fontSize: '12px', fontStyle: 'normal', fontWeight: 400, lineHeight: '18px' }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#0B0C0E] text-white font-['Inter']">
          <div className="px-6 py-6 flex justify-between items-center border-b border-white/10">
            <Logo width="100" height="35" />
            <button 
              onClick={closeMobileMenu}
              className="p-2 hover:bg-white/10 rounded-lg transition"
            >
              <X size={24} />
            </button>
          </div>

          {!isMobileServicesOpen ? (
            <div className="flex flex-col h-[calc(100vh-88px)]">
              <div className="flex-1 px-6 py-4">
                {navItems.map((item, index) => (
                  item.hasSubmenu ? (
                    <button
                      key={index}
                      onClick={() => setIsMobileServicesOpen(true)}
                      className="w-full flex items-center justify-between py-[12px] text-lg font-medium hover:text-white/80 transition border-b border-white/5"
                    >
                      {item.name}
                      <ChevronRight size={20} />
                    </button>
                  ) : (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={closeMobileMenu}
                      className="w-full flex items-center justify-between py-[12px] text-lg font-medium hover:text-white/80 transition border-b border-white/5"
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col h-[calc(100vh-88px)]">
              <button
                onClick={() => setIsMobileServicesOpen(false)}
                className="px-6 py-4 flex items-center gap-2 text-white hover:text-white/80 transition border-b border-white/10 flex-shrink-0"
              >
                <ArrowLeft size={20} />
                <span>Back</span>
              </button>
              <div className="px-6 py-4 flex-shrink-0">
                <h2 className="text-xl font-semibold">Services</h2>
              </div>
              <div className="px-6 pb-6 space-y-6 overflow-y-auto flex-1">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    onClick={() => handleServiceClick(service.slug)}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <div className="mt-1 text-white/90 group-hover:text-white transition-colors flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{service.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}