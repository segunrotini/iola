import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="/" className="flex items-center">
          <img
            
            src={logo}
            alt="Logo"
            className="h-12 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#about"
            className="text-sm font-medium text-[#263746] transition hover:text-[#008DB2]"
          >
            About Us
          </a>

          <a
            href="#programs"
            className="text-sm font-medium text-[#263746] transition hover:text-[#008DB2]"
          >
            Our Programs
          </a>

          <a
            href="#faith-tracks"
            className="text-sm font-medium text-[#263746] transition hover:text-[#008DB2]"
          >
            Faith Tracks
          </a>

          <a
            href="#why-iola"
            className="text-sm font-medium text-[#263746] transition hover:text-[#008DB2]"
          >
            Why IOLA?
          </a>

          <a
            href="#admissions"
            className="text-sm font-medium text-[#263746] transition hover:text-[#008DB2]"
          >
            Admissions
          </a>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#inquire"
            className="rounded-lg bg-[#F4F8FA] px-4 py-2 text-sm font-semibold text-[#164A6B] transition hover:bg-[#E8F1F5]"
          >
            Inquire
          </a>

          <a
            href="#enroll"
            className="rounded-lg bg-[#079BC2] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0789AB]"
          >
            Enroll Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-[#003B5C] lg:hidden"
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#263746] hover:bg-[#F4F8FA]"
            >
              About Us
            </a>

            <a
              href="#programs"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#263746] hover:bg-[#F4F8FA]"
            >
              Our Programs
            </a>

            <a
              href="#faith-tracks"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#263746] hover:bg-[#F4F8FA]"
            >
              Faith Tracks
            </a>

            <a
              href="#why-iola"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#263746] hover:bg-[#F4F8FA]"
            >
              Why IOLA?
            </a>

            <a
              href="#admissions"
              onClick={() => setIsOpen(false)}
              className="rounded-lg px-3 py-3 text-sm font-medium text-[#263746] hover:bg-[#F4F8FA]"
            >
              Admissions
            </a>

            <div className="mt-2 flex gap-3 border-t border-gray-100 pt-4">
              <a
                href="#inquire"
                className="flex-1 rounded-lg bg-[#F4F8FA] px-4 py-2.5 text-center text-sm font-semibold text-[#164A6B]"
              >
                Inquire
              </a>

              <a
                href="#enroll"
                className="flex-1 rounded-lg bg-[#079BC2] px-4 py-2.5 text-center text-sm font-semibold text-white"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;