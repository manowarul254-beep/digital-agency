import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";
import logo from "../../assets/solid.png";
import { defaultServices } from "../section/services/ServicesList";

const ChevronDown = () => (
  <svg
    className="h-3.5 w-3.5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const SignInIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4" />
    <path d="M4 12h10M10 8l4 4-4 4" />
  </svg>
);

const UserIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

const links = [
  { label: "About", to: "/about" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const linkClass =
  "text-slate-700 transition hover:text-indigo-500 dark:text-slate-200";

export default function ServiceNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-950">
      <Container className="flex h-[76px] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Silicon" className=" dark:invert" />
          </Link>
          <ul className="hidden items-center gap-8 md:flex">
            <li
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1.5 ${linkClass}`}
              >
                Services
                <ChevronDown />
              </Link>

              {open && (
                <div className="absolute left-0 top-full z-20 pt-3">
                  <ul className="w-64 rounded-lg bg-white p-2 shadow-[0_8px_30px_rgba(60,70,140,0.15)] dark:bg-gray-900">
                    {defaultServices.map((s) => (
                      <li key={s.id}>
                        <Link
                          to={`/services/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-indigo-50 hover:text-indigo-500 dark:text-slate-200 dark:hover:bg-gray-800"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className={linkClass}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-3 text-slate-700 dark:text-slate-200 sm:flex">
            <span>Light</span>
            <ThemeToggle />
            <span>Dark</span>
          </div>

          <Link
            to="/signin"
            className="hidden items-center gap-2 rounded-md border border-indigo-300 px-5 py-2.5 text-sm font-medium text-indigo-500 transition hover:bg-indigo-50 sm:flex"
          >
            <SignInIcon />
            Sign in
          </Link>

          <Link
            to="/signup"
            className="flex items-center gap-2 rounded-md bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-600"
          >
            <UserIcon />
            Sign up
          </Link>
        </div>
      </Container>
    </header>
  );
}
