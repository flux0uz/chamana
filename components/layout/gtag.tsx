import Script from "next/script";
import * as React from "react";

type Props = {};

export default function Gtag({}: Props) {
  return (
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'ad_storage': 'denied',
                    'ad_user_data': 'denied',
                    'ad_personalization': 'denied',
                    'analytics_storage': 'denied'
                });
                
                gtag('config', '${gaId}', {
                    page_path: window.location.pathname,
                });
                `,
      }}
    />
  );
}
