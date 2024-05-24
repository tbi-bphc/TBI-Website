import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="mx-auto flex md:items-center md:justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Hamburger Menu - Only on Mobile */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex justify-center items-center space-x-4">
            <NavLink title="Home" link="/home"/>
            <NavLink title="About Us" link='/about' />
            <NavLink title="Incubatees" link="/incubatees"/>
            <NavLink title="Events Gallery" link='/events'/>
            {/* Programmes Dropdown - Desktop */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsProgrammesOpen(!isProgrammesOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border text-white border-gray-300  px-4 py-2 text-sm font-medium hover:bg-gray-700 focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Programmes
                <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </button>
              {isProgrammesOpen && (
                <div
                  className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-gray-800 text-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      Incubation
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      SEEP
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm hover:bg-gray-700 hover:text-gray-50"
                      role="menuitem"
                    >
                      SOLVE
                    </a>
                  </div>
                </div>
              )}
            </div>
            {/* <NavLink title="Partners" /> */}
            <NavLink title="Contact Us" link="/contact"/>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink title="Home" link="/home"/>
            <NavLink title="About Us" link="/about"/>
            <NavLink title="Incubatees" link="/incubatees"/>
            <NavLink title="Events Gallery" link="/events"/>
            {/* Programmes Dropdown - Mobile */}
            <div className="relative inline-block text-left">
              <button
                onClick={() => setIsProgrammesOpen(!isProgrammesOpen)}
                type="button"
                className="inline-flex justify-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              >
                Programmes
                <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </button>
              {isProgrammesOpen && (
                <div
                  className=" origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Incubation
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      SEEP
                    </a>
                    <a
                      href="#"
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
            <NavLink title="Contact Us" link="/contact"/>
          </div>
        </div>
      )}
    </nav>
  );
}

interface NavLinkProps {
  title: string;
  link:string;
}

function NavLink({ title, link }: NavLinkProps) {
  return (
    <a
      href={link}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
    >
      {title}
    </a>
  );
}

export default Navbar;
