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
import SheetContentForm from "./sheets/SheetContentForm";
import UpdateDetailsConfirmationModal from "./modals/UpdateDetailsConfirmationModal";
import SuccessConfirmationModal from "./modals/SuccessConfirmationModal";
import CannotDeleteModal from "./modals/CannotDeleteModal";
import ChartOfAccountsSheet from "./sheets/ChartOfAccountsSheet";
import BulkUploadSheet from "./sheets/BulkUploadSheet";
import UploadingSheet from "./sheets/UploadingSheet";
type PropVivoTopBarProps = {
   className?: string;
};

function PropVivoTopBar({ className = "" }: PropVivoTopBarProps) {
   const [inputValue, setInputValue] = useState("");
   const [chartSheetOpen, setChartSheetOpen] = useState(false);
   const [editSheetOpen, setEditSheetOpen] = useState(false);
   const [bulkUploadSheetOpen, setBulkUploadSheetOpen] = useState(false);
   const [uploadingSheetOpen, setUploadingSheetOpen] = useState(false);

   function createNewClickHandler(e: MouseEvent<HTMLButtonElement>) {
      setChartSheetOpen(true);
   }
   function editClickHandler(e: MouseEvent<HTMLButtonElement>) {
      setChartSheetOpen(false);
      setEditSheetOpen(true);
   }
   function submitClickHandler(e: MouseEvent<HTMLButtonElement>) {
      setBulkUploadSheetOpen(false);
      setUploadingSheetOpen(true);
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
               onOpenChange={setEditSheetOpen}
               open={editSheetOpen}
               title="Edit Chart of Acounts Header/ Sub-Header"
               footer={<Button>Save</Button>}
            >
               <SheetContentForm />
            </Sheet>
            <Sheet
               onOpenChange={setChartSheetOpen}
               open={chartSheetOpen}
               title="Chart of Accounts Header/ Sub-Header"
               footer={<Button onClick={editClickHandler} className="w-full">Edit</Button>}
            >
               <ChartOfAccountsSheet />
            </Sheet>
            <Sheet
               onOpenChange={setBulkUploadSheetOpen}
               open={bulkUploadSheetOpen}
               title="Bulk Upload Chart of Accounts Line Items"
               footer={
                  <div className="w-full flex gap-2">
                     <Button color="secondary" emphasis="medium" className="w-full">Cancel</Button>
                     <Button className="w-full" onClick={submitClickHandler}>Submit</Button>
                  </div>
               }
            >
               <BulkUploadSheet />
            </Sheet>
            <Sheet
               onOpenChange={setUploadingSheetOpen}
               open={uploadingSheetOpen}
               title="Bulk Upload Chart of Accounts Line Items"
               footer={<Button className="w-full" color="secondary" emphasis="medium">Cancel</Button>}
            >
               <UploadingSheet />
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
            <UpdateDetailsConfirmationModal>
               <Button
                  emphasis="low"
                  color="secondary"
                  size="sm"
               >
                  Payment
               </Button>
            </UpdateDetailsConfirmationModal>
            <SuccessConfirmationModal>
               <Button
                  emphasis="low"
                  color="secondary"
                  size="sm"
               >
                  Approvals
               </Button>
            </SuccessConfirmationModal>
            <CannotDeleteModal>
               <Button
                  iconLeading={<Calendar size={16} weight={"bold"} />}
                  emphasis="low"
                  color="secondary"
                  size="sm"
               />
            </CannotDeleteModal>
            <Button
               iconLeading={<ChatCenteredDots size={16} weight={"bold"} />}
               emphasis="low"
               color="secondary"
               size="sm"
               onClick={() => setBulkUploadSheetOpen(true)}
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
