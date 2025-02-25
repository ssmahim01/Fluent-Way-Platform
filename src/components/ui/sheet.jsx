"use client";
import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";

const Sheet = Dialog.Root;
const SheetTrigger = Dialog.Trigger;

const SheetContent = React.forwardRef(({ className, ...props }, ref) => (
  <Dialog.Portal>
    <Dialog.Overlay className="fixed inset-0" />
    <Dialog.Content
      ref={ref}
      className={`z-20 fixed inset-y-0 left-0 bg-neutral-200 md:w-96 w-64 shadow-lg border-r border-neutral-200 ${className}`}
      {...props}
    />
  </Dialog.Portal>
));

export { Sheet, SheetTrigger, SheetContent };
