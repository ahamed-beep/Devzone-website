import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => setTheme(e.target.checked ? "dark" : "light");

  return (
    <div className="fixed bottom-10 left-4 z-50">
      <label className="swap swap-rotate cursor-pointer">
        <input type="checkbox" onChange={handleToggle} />
        {/* Sun icon */}
           {/* Sun Icon (for light mode) */}
    <svg
  className="swap-off w-10 h-10 text-yellow-400"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <circle cx="12" cy="12" r="5" /> {/* Sun core */}
  <g stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="1" x2="12" y2="4" />   {/* Top ray */}
    <line x1="12" y1="20" x2="12" y2="23" /> {/* Bottom ray */}
    <line x1="1" y1="12" x2="4" y2="12" />   {/* Left ray */}
    <line x1="20" y1="12" x2="23" y2="12" /> {/* Right ray */}
    <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />   {/* Top-left */}
    <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" /> {/* Bottom-right */}
    <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" /> {/* Bottom-left */}
    <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" /> {/* Top-right */}
  </g>
</svg>


        {/* Moon icon */}
        <svg
          className="swap-on h-10 w-10 fill-current text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      </label>
    </div>
  );
}
