"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteRoutes = [
  {
    label: "Calculation tools",
    subRoutes: [
      {
        href: "/calculation-tools/compound-interest-calculator",
        label: "Compound Interest Calculator",
      },
      {
        href: "/calculation-tools/cost-of-living-calculator",
        label: "Cost of Living Calculator",
      },
      {
        href: "/calculation-tools/car-insurance-calculator",
        label: "Car Insurance Calculator",
      },
    ],
  },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-5 text-[14px]">
        {siteRoutes.map((siteRoute) => {
          return (
            <li key={siteRoute.label} className="relative group">
              <span className="text-zinc-400 transition">
                {siteRoute.label}
              </span>
              <ul className="absolute top-full right-0 bg-white p-2 shadow-md hidden group-hover:block">
                {siteRoute.subRoutes.map((subRoute) => (
                  <li key={subRoute.href}>
                    <Link
                      href={subRoute.href}
                      className={`text-zinc-400 transition ${
                        pathname === subRoute.href ? "text-zinc-900" : ""
                      }`}
                    >
                      {subRoute.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


