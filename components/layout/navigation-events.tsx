"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { gtmPageView } from "@/lib/gtm";

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (typeof window !== undefined) {
      gtmPageView({ page_title: window.document.title });
    }
  }, [pathname, searchParams]);

  return null;
}
