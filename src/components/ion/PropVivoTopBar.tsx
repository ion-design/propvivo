"use client";
// Generated with Ion on 2/28/2024, 1:52:29 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3040:20368
import { useState, MouseEvent } from "react";
import {
   MagnifyingGlass,
   Calendar,
   ChatCenteredDots,
   Notification,
   Bell,
   CaretDown,
} from "@phosphor-icons/react/dist/ssr";
import Input from "@/components/ion/Input";
import Button from "@/components/ion/Button";
import Avatar from "@/components/ion/Avatar";
import clsx from "clsx";
import Sheet from "../Sheet";
import SheetContentForm from "./SheetContentForm";
type PropVivoTopBarProps = {
   className?: string;
};

function PropVivoTopBar({ className = "" }: PropVivoTopBarProps) {
   const [inputValue, setInputValue] = useState("");
   const [open, setOpen] = useState(false);

   function createNewClickHandler(e: MouseEvent<HTMLButtonElement>) {
      setOpen(true);
   }
   function paymentClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("paymentClickHandler fired");
   }
   function approvalsClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("approvalsClickHandler fired");
   }
   function buttonOnClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("buttonOnClickHandler fired");
   }
   return (
      <div
         className={clsx(
            "bg-weak w-full flex justify-between items-start px-10 py-3 h-fit",
            className
         )}
      >
         <div className="flex items-start gap-5">
            <Sheet
               onOpenChange={setOpen}
               open={open}
               title="Edit Chart of Acounts Header/ Sub-Header"
               footer={<Button>Save</Button>}
            >
               <SheetContentForm />
            </Sheet>
            <Input
               iconTrailing={<MagnifyingGlass size={16} weight={"regular"} />}
               placeholder="Search"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               className="w-[250px]"
            />
            <Button
               emphasis="high"
               color="primary"
               size="md"
               onClick={createNewClickHandler}
            >
               Create New
            </Button>
         </div>
         <div className="flex items-center gap-5">
            <Button
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={paymentClickHandler}
            >
               Payment
            </Button>
            <Button
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={approvalsClickHandler}
            >
               Approvals
            </Button>
            <Button
               iconLeading={<Calendar size={16} weight={"bold"} />}
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<ChatCenteredDots size={16} weight={"bold"} />}
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<Notification size={16} weight={"bold"} />}
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={buttonOnClickHandler}
            />
            <Button
               iconLeading={<Bell size={16} weight={"bold"} />}
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={buttonOnClickHandler}
            />
            <div className="flex items-center gap-1">
               <Avatar
                  size="sm"
                  src="https://i.ibb.co/jrmkxZZ/placeholder-Person.png"
               />
               <Button
                  iconLeading={<CaretDown size={16} weight={"bold"} />}
                  emphasis="low"
                  color="secondary"
                  size="sm"
                  onClick={buttonOnClickHandler}
               />
            </div>
         </div>
      </div>
   );
}
export default PropVivoTopBar;
