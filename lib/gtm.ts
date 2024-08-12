export const gtmPageView = (props: { [key: string]: any }) => {
  return window.dataLayer?.push({
    event: "page_view",
    url: window.location.href,
    ...props,
  });
};

export const allConsentGranted = () => {
  return window.gtag("consent", "update", {
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
    analytics_storage: "granted",
  });
};
