import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import logo from "../../assets/logo.png";

function Footer() {
  return (
    <section className="bg-[#071326] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex rounded-md bg-white px-3 py-2">
              <img
              src={logo}
            alt="logo"
                className="h-8 w-auto object-contain"
              />
            </div>

            <p className="mt-4 text-[8px] font-bold uppercase tracking-wide text-white">
              Integrated Online Learning Academy
            </p>

            <p className="mt-2 max-w-xs text-[9px] leading-4 text-[#94A3B8]">
              Providing faith-friendly, practical, industry-relevant and
              flexible digital learning programs designed to prepare learners
              for school, work and digital opportunities.
            </p>

            <p className="mt-3 text-[8px] font-medium text-[#079BC2]">
              Learn Anywhere, Anytime • Faith • Skills • Opportunity • Global
              Impact
            </p>
          </div>

          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-white">
              Academic Tracks
            </h3>

            <ul className="mt-4 space-y-2 text-[9px] text-[#94A3B8]">
              <li>Technology & Digital Skills</li>
              <li>Language & Literacy</li>
              <li>Islamic Learning</li>
              <li>Christian Learning</li>
              <li>STEM & Logical Reasoning</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-white">
              Target Learners
            </h3>

            <ul className="mt-4 space-y-2 text-[9px] text-[#94A3B8]">
              <li>Children (Ages 5 - 12)</li>
              <li>Teenagers (Ages 13 - 17)</li>
              <li>Adults & Professionals</li>
              <li>Online-Only Future</li>
              <li>Homeschooling Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wide text-white">
              Get In Touch
            </h3>

            <div className="mt-4 space-y-3">
              <a
                href="tel:+2348124526982"
                className="flex items-start gap-2 text-[9px] text-[#94A3B8] transition hover:text-white"
              >
                <Phone size={13} className="shrink-0 text-[#079BC2]" />
                <span>
                  08124526982
                  <br />
                  08141570784
                </span>
              </a>

              <a
                href="mailto:learn@iola.com"
                className="flex items-center gap-2 text-[9px] text-[#94A3B8] transition hover:text-white"
              >
                <Mail size={13} className="shrink-0 text-[#079BC2]" />
                <span>learn@iola.com</span>
              </a>

              <div className="flex items-start gap-2 text-[9px] text-[#94A3B8]">
                <MapPin size={13} className="shrink-0 text-[#079BC2]" />
                <span>Online Learning Academy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-[8px] text-[#64748B] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © 2026 IOLA Integrated Online Learning Academy. All rights
              reserved.
            </p>

            <div className="flex gap-5">
              <a href="#privacy" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#terms" className="hover:text-white">
                Terms of Service
              </a>

              <a href="#student-portal" className="hover:text-white">
                Student Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;