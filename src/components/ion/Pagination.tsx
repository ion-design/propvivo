"use client";
// ion/Pagination: Generated with Ion on 2/28/2024, 10:56:27 AM
import * as React from "react";

import {
  CaretDoubleLeft,
  CaretDoubleRight,
  CaretLeft,
  CaretRight,
  DotsThree,
} from "@phosphor-icons/react";
import clsx from "clsx";
import { cva } from "class-variance-authority";
import Select from "./Select";

const classNames = cva(
  [
    "flex",
    "items-center",
    "justify-center",
    "rounded-radius",
    "disabled:pointer-events-none",
    "transition-colors",
    "select-none",
  ],
  {
    variants: {
      color: {
        primary: "focus:primary-focus border hover:bg-primary-lightest",
        secondary: "focus:secondary-focus border hover:bg-secondary-lightest",
      },
      size: {
        sm: "h-7 w-7 text-sm",
        md: "h-8 w-8 text-sm",
        lg: "h-10 w-10 text-base",
      },
      isActive: {
        true: "",
        false: "",
      },
      bordered: {
        true: "",
        false: "",
      },
      disabled: {
        true: "bg-weak text-weak-foreground",
        false: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        isActive: true,
        className: ["text-primary", "border-primary-light"],
      },
      {
        color: "secondary",
        isActive: true,
        className: ["text-secondary", "border-secondary-light"],
      },
      {
        color: "primary",
        bordered: true,
        className: ["border-sub-stroke"],
      },
      {
        color: "secondary",
        bordered: true,
        className: ["border-secondary-light"],
      },
    ],
  }
);

const PaginationNavigation = ({
  className,
  ...props
}: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={clsx("flex justify-center", className)}
    {...props}
  />
);
PaginationNavigation.displayName = "PaginationNavigation";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={clsx("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={clsx("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

type PaginationLinkProps = {
  isActive?: boolean;
  disabled?: boolean;
} & Pick<PaginationProps, "size" | "color"> &
  React.ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size,
  color,
  disabled,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    className={clsx(
      classNames({ color, size: size, isActive: isActive, disabled }),
      {
        "h-7 text-xs": size === "sm",
        "h-8": size === "md",
        "h-10": size === "lg",
      },
      className
    )}
    aria-disabled={disabled}
    {...props}
  />
);
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  size,
  color,
  disabled = true,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  disabled?: boolean;
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    className="border-none"
    color={color}
    size={size}
    disabled={disabled}
    {...props}
  >
    <CaretLeft className="h-4 w-4" />
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  size,
  color,
  disabled,
  ...props
}: React.ComponentProps<typeof PaginationLink> & {
  disabled?: boolean;
}) => (
  <PaginationLink
    aria-label="Go to previous page"
    className="border-none"
    color={color}
    size={size}
    disabled={disabled}
    {...props}
  >
    <CaretRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

const PaginationEllipsis = ({
  className,
  color,
  type,
  ...props
}: React.ComponentProps<"span"> & {
  className?: string;
  color?: "primary" | "secondary";
  type: "previous" | "next";
}) => (
  <span
    aria-hidden
    className={clsx(
      "group flex h-7 w-7 items-center justify-center transition-colors",

      className
    )}
    {...props}
  >
    <DotsThree className="h-4 w-4 group-hover:hidden" />
    {type === "previous" ? (
      <CaretDoubleLeft
        className={clsx("hidden h-4 w-4 group-hover:block", {
          "hover:fill-primary": color === "primary",
          "hover:fill-secondary": color === "secondary",
        })}
      />
    ) : (
      <CaretDoubleRight
        className={clsx("hidden h-4 w-4 group-hover:block", {
          "hover:fill-primary": color === "primary",
          "hover:fill-secondary": color === "secondary",
        })}
      />
    )}

    <span className="sr-only">
      {type === "next" ? "More pages" : "Fewer pages"}
    </span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

type PaginationProps = React.ComponentProps<"nav"> & {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  defaultPage?: number;
  onPageChange?: (page: number) => any;
  totalPages?: number;
  defaultPageSize?: 10 | 20 | 50 | 100;
  onRowsPerPageChange?: (rows: 10 | 20 | 50 | 100) => any;
};

export default function Pagination({
  className,
  size = "md",
  color = "primary",
  defaultPage = 1,
  onPageChange,
  totalPages = 5,
  defaultPageSize,
  onRowsPerPageChange,
  ...props
}: PaginationProps) {
  const [currentPage, setCurrentPage] = React.useState(defaultPage);
  const isPreviousEllipsis = currentPage - 3 > 1;
  const isNextEllipsis = currentPage + 3 < totalPages;
  const showEllipsis = totalPages > 7;

  return (
    <div className={clsx("flex gap-2", className)}>
      <PaginationNavigation {...props} className="w-fit">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              size={size}
              color={color}
              type={"previous"}
              disabled={currentPage === 1}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              size={size}
              color={color}
              onClick={() => setCurrentPage(1)}
              isActive={currentPage === 1}
            >
              1
            </PaginationLink>
          </PaginationItem>
          {showEllipsis && isPreviousEllipsis && (
            <PaginationItem
              onClick={() => setCurrentPage(Math.max(1, currentPage - 5))}
            >
              <PaginationEllipsis color={color} type={"previous"} />
            </PaginationItem>
          )}
          {totalPages > 1 &&
            Array(totalPages > 7 ? 5 : totalPages - 2)
              .fill(null)
              .map((_, index) => {
                const isAtBeginning = currentPage - 3 <= 1;
                const isAtEnd = currentPage + 3 > totalPages;
                const page = !showEllipsis
                  ? index + 2
                  : isAtBeginning
                  ? index + 2
                  : isAtEnd
                  ? totalPages - Math.min(currentPage - 1, 5) + index
                  : currentPage - 2 + index;
                return (
                  <PaginationItem
                    onClick={() => setCurrentPage(page)}
                    key={`page-${page}`}
                  >
                    <PaginationLink
                      isActive={currentPage === page}
                      size={size}
                      color={color}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

          {showEllipsis && isNextEllipsis && (
            <PaginationItem
              onClick={() =>
                setCurrentPage(Math.min(totalPages, currentPage + 5))
              }
            >
              <PaginationEllipsis color={color} type={"next"} />
            </PaginationItem>
          )}

          <PaginationItem onClick={() => setCurrentPage(totalPages)}>
            <PaginationLink
              size={size}
              color={color}
              isActive={currentPage === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              size={size}
              color={color}
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </PaginationNavigation>
      {defaultPageSize && (
        <Select
          className={clsx("w-20 border-weak-stroke", {
            "w-16": size === "sm" || size === "md",
            "w-20": size === "lg",
          })}
          triggerClassName={clsx("border-weak-stroke py-0", {
            "h-7 px-2": size === "sm",
            "h-8 px-2": size === "md",
            "h-10 text-base": size === "lg",
          })}
          defaultValue={defaultPageSize.toString()}
          options={[
            {
              label: "10",
              value: "10",
            },
            {
              label: "20",
              value: "20",
            },
            {
              label: "50",
              value: "50",
            },
            {
              label: "100",
              value: "100",
            },
          ]}
          onValueChange={(value) => {
            onRowsPerPageChange?.(parseInt(value) as 10 | 20 | 50 | 100);
            setCurrentPage(1);
          }}
        />
      )}
    </div>
  );
}

export {
  PaginationNavigation,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
