"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../common/LinkWithChannel";

const companyName = "PLAYA";

export const Logo = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return (
      <h1 className="flex items-center font-bold" aria-label="homepage">
        {companyName}
      </h1>
    );
  }
  return (
    <div className="flex items-center font-bold">
      <LinkWithChannel aria-label="homepage" href="/">
        {companyName}
      </LinkWithChannel>
    </div>
  );
};
