import * as React from "react";
import { Icon, LucideProps, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {}

export function EmptyPlaceholder({
  className,
  children,
  ...props
}: EmptyPlaceholderProps) {
  return (
    <div
      className={cn(
        "flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50",
        className,
      )}
      {...props}
    >
      <div className="mx-auto flex max-w-[420px] flex-col items-center justify-center text-center">
        {children}
      </div>
    </div>
  );
}

interface EmptyPlaceholderIconProps extends Partial<LucideProps> {
  wrapperClassName?: string;
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  className,
  wrapperClassName,
  ...props
}: EmptyPlaceholderIconProps) {
  return (
    <div
      className={cn(
        "flex size-20 items-center justify-center rounded-full bg-primary",
        wrapperClassName,
      )}
    >
      <TriangleAlert
        className={cn("size-10 stroke-white", className)}
        {...props}
      />
    </div>
  );
};

interface EmptyPlacholderTitleProps
  extends React.HTMLAttributes<HTMLHeadingElement> {}

EmptyPlaceholder.Title = function EmptyPlaceholderTitle({
  className,
  ...props
}: EmptyPlacholderTitleProps) {
  return (
    <h2 className={cn("mt-6 text-2xl font-semibold", className)} {...props} />
  );
};

interface EmptyPlacholderDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

EmptyPlaceholder.Description = function EmptyPlaceholderDescription({
  className,
  ...props
}: EmptyPlacholderDescriptionProps) {
  return (
    <p
      className={cn(
        "mb-8 mt-2 text-center text-lg font-normal leading-6 text-secondary",
        className,
      )}
      {...props}
    />
  );
};
