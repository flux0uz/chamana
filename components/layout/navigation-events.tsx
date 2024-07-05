"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gtmPageView } from "@/lib/gtm";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    gtmPageView({ page_title: pathname });
  }, [pathname, searchParams]);

  return null;
}
