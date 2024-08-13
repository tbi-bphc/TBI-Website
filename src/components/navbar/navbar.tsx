import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className=" bg-nord4 w-full shadow-md sticky top-0 z-10 h-20 ">
      <div className="mx-auto flex md:items-center md:justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Hamburger Menu - Only on Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-4 my-auto">
            <div className="float-left">
            <NavImageLink image="/tbislogoblue 3.png" link="/home" size={{ height: 24, width: 16}}/>
            </div>
          <NavLink title="About Us" link="/about" />
            <NavLink title="Programs" link="/programmes" />
            {/* <NavLink title="Events" link="/events" />
            <NavLink title="Mentors" link="/mentors" /> */}
            <NavLink title="Infrastructure" link="/infrastructure" />
            {/* Programmes Dropdown - Desktop */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md text-nord0 px-4 py-2 text-sm font-medium hover:text-nord10 focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Portfolio
                <ChevronDown
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
              {isPortfolioOpen && (
                <div
                  className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-nord6 text-nord0 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/incubatees"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Incubatees
                    </a>
                    <a
                      href="/pre-incubatees"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Pre-Incubatees
                    </a>
                    <a
                      href="/virtual-incubatees"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Virtual Incubatees
                    </a>
                  </div>
                </div>
              )}
            </div>
            <NavLink title="Stakeholders" link="/stakeholders" />
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md text-nord0 px-4 py-2 text-sm font-medium hover:text-nord10 focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Resources
                <ChevronDown
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
              {isResourcesOpen && (
                <div
                  className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-nord6 text-nord0 ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/events"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Events and Incubatees
                    </a>
                    <a
                      href="announcements"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Announcements and Updates
                    </a>
                    <a
                      href="/news"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      News
                    </a>
                    <a
                      href="/blogs"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Blogs
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* <NavLink title="Partners" /> */}
            <NavLink title="Contact Us" link="/contact" />
            <div className="float-left">
                <NavImageLink image="/BITS_Pilani-Logo 4.png" link="/home" size={{height:12, width:10}}/>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
          {/* <NavLink title="Home" link="/home" /> */}
            <NavImageLink image="/tbislogoblue 3.png" link="/home" size={{ height: 24, width: 16}}/>
            <NavLink title="About Us" link="/about" />
            <NavLink title="Incubatees" link="/incubatees" />
            <NavLink title="Events" link="/events" />
            <NavLink title="Team" link="/team" />
            <NavLink title="Mentors" link="/mentors" />
            <NavLink title="Facilities" link="/facilities" />
            {/* Programmes Dropdown - Mobile */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Programmes
                <ChevronDown
                  className="-mr-1 ml-2 h-5 w-5"
                  aria-hidden="true"
                />
              </button>
              {isPortfolioOpen && (
                <div
                  className=" origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="/programmes/incubation/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Incubation
                    </a>
                    <a
                      href="/programmes/seep/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      SEEP
                    </a>
                    <a
                      href="/programmes/solve/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      SOLVE
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* <NavLink title="Partners" /> */}
            <NavLink title="Contact Us" link="/contact" />
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  title: string;
  link: string;
}

function NavLink({ title, link, }: NavLinkProps) {
  return (
    <a
      href={link}
      className=" text-nord0 hover:text-nord10 block px-3 py-2 rounded-md text-sm font-medium"
    >
      {title}
    </a>
  );
}

interface Size {
  height: number;
  width: number;
}

interface NavImageLinkProps {
  image: string;
  link: string;
  size: Size;
}

function NavImageLink({ image, link, size }: NavImageLinkProps) {
  return (
    <a
      href={link}
      className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
    >
      <img src={image} alt="" className={`w-${size.height} h-${size.width}`} />
    </a>
  );
}

export default Navbar;
