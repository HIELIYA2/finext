import Image from "next/image";
import Link from "next/link";
import SiteNav from "./site-nav";
import logo from "../public/images/fincic-logo-full.png";

export default function Header() {
  return (
    <header className="flex justify-center items-center py-1 px-7 dark:border-gray-600 border-b sm:justify-between">
      <Link href="/">
        <Image
          src={logo}
          alt="Fincic logo"
          width={140}
          height={80}
          className="md:mx-auto"
        />
      </Link>
      <SiteNav />
    </header>
  );
}
