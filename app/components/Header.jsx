"use client";

import { useEffect, useState } from "react";
import LoginModal from "@/components/LoginModal";
import { listenToAuth, logoutUser } from "@/lib/auth";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileAssist, setMobileAssist] = useState(false);

  /* scroll effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* auth */
  useEffect(() => {
    return listenToAuth(setUser);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <div
            onClick={() => (window.location.href = "/")}
            className={`font-bold text-xl cursor-pointer ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Matrubhumi
          </div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            {/* OTHER ASSISTANCE – PURE CSS HOVER */}
            <div className="relative group">
              <span
                className={`cursor-pointer ${
                  scrolled ? "text-gray-700" : "text-white"
                } hover:text-green-600`}
              >
                Other Assistance
              </span>

              <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                <div className="bg-white rounded-xl shadow-xl w-56 overflow-hidden">
                  <NavItem label="Home Loan" link="/assistance/home-loan" />
                  <NavItem label="Furniture" link="/assistance/furniture" />
                  <NavItem
                    label="Website Development"
                    link="/assistance/website-development"
                  />
                </div>
              </div>
            </div>

            <NavLink label="Agents Corner" link="/agents-corner" scrolled={scrolled} />
            <NavLink
              label="Developers Corner"
              link="/developers-corner"
              scrolled={scrolled}
            />
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* SELL */}
            <button
              onClick={() => {
                if (!user) setLoginOpen(true);
                else window.location.href = "/sell-property";
              }}
              className={`hidden sm:block px-4 py-2 rounded-full text-sm transition ${
                scrolled
                  ? "bg-gray-100 text-gray-800"
                  : "bg-white/20 text-white"
              }`}
            >
              Sell Property
            </button>

            {/* AUTH */}
            {!user ? (
              <button
                onClick={() => setLoginOpen(true)}
                className="px-4 py-2 rounded-full bg-green-600 text-white text-sm font-semibold"
              >
                Sign In
              </button>
            ) : (
              <div className="relative">
                <img
                  src={user.photoURL}
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="w-10 h-10 rounded-full cursor-pointer border"
                />

                {profileOpen && (
                  <div className="absolute right-0 mt-3 bg-white shadow-xl rounded-xl p-3 w-48">
                    <p className="font-medium">{user.displayName}</p>
                    <p className="text-sm text-gray-500 truncate">
                      {user.email}
                    </p>

                    <hr className="my-2" />

                    <button
                      onClick={() => (window.location.href = "/dashboard")}
                      className="block w-full text-left py-2 hover:text-green-600"
                    >
                      My Dashboard
                    </button>

                    <button
                      onClick={logoutUser}
                      className="block w-full text-left py-2 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className={`md:hidden text-2xl ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {mobileMenu && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
            <button
              onClick={() => setMobileAssist(!mobileAssist)}
              className="w-full text-left font-medium text-gray-800"
            >
              Other Assistance
            </button>

            {mobileAssist && (
              <div className="ml-4 space-y-2">
                <MobileItem label="Home Loan" link="/assistance/home-loan" />
                <MobileItem label="Furniture" link="/assistance/furniture" />
                <MobileItem
                  label="Website Development"
                  link="/assistance/website-development"
                />
              </div>
            )}

            <MobileItem label="Agents Corner" link="/agents-corner" />
            <MobileItem label="Developers Corner" link="/developers-corner" />
          </div>
        )}
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}

/* HELPERS */

function NavLink({ label, link, scrolled }) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className={`hover:text-green-600 transition ${
        scrolled ? "text-gray-700" : "text-white"
      }`}
    >
      {label}
    </button>
  );
}

function NavItem({ label, link }) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="block w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100"
    >
      {label}
    </button>
  );
}

function MobileItem({ label, link }) {
  return (
    <button
      onClick={() => (window.location.href = link)}
      className="block w-full text-left text-gray-700"
    >
      {label}
    </button>
  );
}