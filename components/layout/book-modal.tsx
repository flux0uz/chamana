"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useTranslations } from "next-intl";

export function BookModal({ trigger }: { trigger: React.ReactNode }) {
  const t = useTranslations("BookModal");

  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{t("title")}</DialogTitle>
          </DialogHeader>
          <ForkWidget />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{t("title")}</DrawerTitle>
        </DrawerHeader>
        <ForkWidget className="px-4" />
      </DrawerContent>
    </Drawer>
  );
}

function ForkWidget({ className }: React.ComponentProps<"div">) {
  return (
    <div className={cn("", className)}>
      <iframe
        title="TheFork booking widget"
        src="https://widget.thefork.com/f6da9069-3b78-427f-8e33-0206d2c25f88"
        allow="payment *"
        style={{
          width: "100%",
          minHeight: "300px",
          border: "none",
          overflow: "scroll",
        }}
      />
    </div>
  );
}
