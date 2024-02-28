import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { X } from "@phosphor-icons/react";
import React from "react";

import clsx from "clsx";
import Button from "./ion/Button";

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
   React.ElementRef<typeof SheetPrimitive.Overlay>,
   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
   <SheetPrimitive.Overlay
      className={clsx(
         "fixed inset-0 z-50 bg-black/60  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
         className
      )}
      {...props}
      ref={ref}
   />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
   "fixed z-50 gap-4 bg-background shadow-high transition ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-300",
   {
      variants: {
         side: {
            top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
            bottom:
               "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
            left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
            right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
         },
      },
      defaultVariants: {
         side: "right",
      },
   }
);

interface SheetContentProps
   extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
      VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
   React.ElementRef<typeof SheetPrimitive.Content>,
   SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
   <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
         ref={ref}
         className={clsx(sheetVariants({ side }), className)}
         {...props}
      >
         {children}
         <SheetPrimitive.Close className="absolute right-4 top-4">
            <Button
               iconLeading={<X className="h-4 w-4" />}
               color="secondary"
               emphasis="low"
               size="sm"
            />
            <span className="sr-only">Close</span>
         </SheetPrimitive.Close>
      </SheetPrimitive.Content>
   </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

type SheetHeaderProps = {
   icon?: React.ReactNode;
   title?: string;
   subtitle?: string;
   bordered?: boolean;
   className?: string;
};
const SheetHeader = ({
   className,
   icon,
   title,
   subtitle,
}: SheetHeaderProps) => (
   <div
      className={clsx(
         "flex gap-2 items-center justify-start bg-soft",
         className
      )}
   >
      {icon && <span>{icon}</span>}
      <div className={clsx("flex flex-col items-start justify-center")}>
         {title && <SheetTitle>{title}</SheetTitle>}
         {subtitle && <SheetDescription>{subtitle}</SheetDescription>}
      </div>
   </div>
);
SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
   className,
   ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
   <div
      className={clsx(
         "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
         className
      )}
      {...props}
   />
);
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
   React.ElementRef<typeof SheetPrimitive.Title>,
   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
   <SheetPrimitive.Title
      ref={ref}
      className={clsx("text-sm font-semibold text-foreground", className)}
      {...props}
   />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
   React.ElementRef<typeof SheetPrimitive.Description>,
   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
   <SheetPrimitive.Description
      ref={ref}
      className={clsx("text-sm text-sub-foreground", className)}
      {...props}
   />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

type SheetProps = {
   showClose?: boolean;
   trigger?: React.ReactNode;
   className?: string;
   // Header props
   title?: string;
   subtitle?: string;
   icon?: React.ReactNode;
   bordered?: boolean;
   // Footer props
   footer?: React.ReactNode;
};
const Sheet = React.forwardRef<
   React.ElementRef<typeof SheetPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof SheetPrimitive.Root> & SheetProps
>(
   (
      {
         showClose,
         trigger,
         className,
         title,
         subtitle,
         icon,
         bordered,
         footer,
         ...props
      },
      ref
   ) => (
      <SheetPrimitive.Root {...props}>
         {trigger && <SheetTrigger>{trigger}</SheetTrigger>}
         <SheetContent
            ref={ref}
            className={clsx(
               "max-w-lg flex flex-col sm:min-w-96 overflow-hidden overflow-y-auto",
               className
            )}
         >
            {showClose && (
               <SheetPrimitive.Close
                  asChild
                  className={clsx(
                     "text-base-foreground absolute right-4 top-4",
                     "disabled:pointer-events-none"
                  )}
               >
                  <Button
                     iconLeading={<X size={16} />}
                     emphasis="low"
                     color="secondary"
                  />
               </SheetPrimitive.Close>
            )}
            {(title || subtitle || icon) && (
               <SheetHeader
                  title={title}
                  subtitle={subtitle}
                  icon={icon}
                  bordered={bordered}
                  className="p-5"
               />
            )}
            <div className="px-5 flex-1 overflow-y-auto">{props.children}</div>
            {footer && <SheetFooter className="p-5">{footer}</SheetFooter>}
         </SheetContent>
      </SheetPrimitive.Root>
   )
);
Sheet.displayName = "Sheet";
export default Sheet;
export {
   SheetPrimitive,
   SheetPortal,
   SheetOverlay,
   SheetTrigger,
   SheetClose,
   SheetContent,
   SheetHeader,
   SheetFooter,
   SheetTitle,
   SheetDescription,
};
