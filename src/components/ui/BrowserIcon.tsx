import type { Browser } from "@/lib/useBrowser";

interface Props {
  browser: Browser;
  size?: number;
  className?: string;
}

export function BrowserIcon({ browser, size = 18, className }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    className,
    "aria-hidden": true,
  } as const;

  if (browser === "firefox") {
    return (
      <svg {...common}>
        <path d="M12 2.2c-1.1 1.9-1.4 3.7-.9 4.7-.9-.9-1.9-1.3-2.8-.9.3 1 .8 1.8 1.5 2.4C7.1 9 4.2 11 4.2 14c0 4.9 3.9 7.8 7.8 7.8s7.8-3 7.8-7.8c0-2-.5-3.7-1.5-5-.8-1.1-1.8-1.9-2.8-2.5.2-1.4-.5-2.9-1.2-3.6-.5-.6-1.4-1.3-2.3-2.7zM9.2 12.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2-2.2-1-2.2-2.2 1-2.2 2.2-2.2z" />
      </svg>
    );
  }

  if (browser === "edge") {
    return (
      <svg {...common}>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c3.5 0 6.6-1.8 8.4-4.5H17c-1.3 1.5-3.1 2.5-5 2.5-3.9 0-7-3.1-7-7h17c0-5.5-4.5-10-10-10zm-6.7 8C6 6.5 8.7 4 12 4s6 2.5 6.7 6H5.3z" />
      </svg>
    );
  }

  // chrome (default)
  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" stroke="none" />
      <line x1="12" y1="8.5" x2="21.5" y2="8.5" />
      <line x1="8.8" y1="13.75" x2="4" y2="22" />
      <line x1="15.2" y1="13.75" x2="20" y2="22" />
    </svg>
  );
}
