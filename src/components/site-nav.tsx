"use client";

import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex justify-between items-center p-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
