"use client";

import * as React from "react";
import { useLocale } from "next-intl";

export function TableoIframe() {
  const locale = useLocale();

  return (
    <iframe
      title="Tableo booking widget"
      src={`https://app.tableo.com/widget/chamana-ibiza-spain/?bgColor=%23ffffff&textColor=%23000000&googleFont=Raleway&fontSize=14&cornerStyle=none&textAlignment=left&formControlBgColor=%23ffffff&formControlColor=%23000000&formControlBorderColor=%23444444&formControlBorderShadow=0&formControlBorderWidth=1&formControlBorderOpacity=0.3&buttonBgColor=%237e6d5f&buttonTextColor=%23ffffff&language=${locale}`}
      width="100%"
      height=" 100%"
      style={{ border: "none", minHeight: "700px" }}
    />
  );
}
