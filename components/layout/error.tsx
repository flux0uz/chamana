import * as React from "react";
import { useTranslations } from "next-intl";

import { EmptyPlaceholder } from "@/components/layout/empty-placeholder";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("ErrorCard");

  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container flex min-h-[calc(100dvh-80px)] items-center justify-center py-20">
      <EmptyPlaceholder className="w-1/2 bg-background/50">
        <EmptyPlaceholder.Icon
          name="warning"
          wrapperClassName="h-14 w-14 md:h-16 md:w-16"
          className="size-5 md:size-6"
        />
        <EmptyPlaceholder.Title className="mt-4">
          {t("title")}
        </EmptyPlaceholder.Title>
        <EmptyPlaceholder.Description>{t("text")}</EmptyPlaceholder.Description>
        <Button className="font-semibold uppercase" onClick={() => reset()}>
          {t("cta")}
        </Button>
      </EmptyPlaceholder>
    </div>
  );
}
