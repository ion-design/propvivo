"use client";
// Generated with Ion on 2/28/2024, 7:04:55 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3163:13533
import { MouseEvent, useState } from "react";
import Button from "@/components/ion/Button";
import { Warning } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import Modal from "@/components/ion/Modal";

function PropvivoModalContainer() {
  function cancelClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("cancelClickHandler fired");
  }
  function updateClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("updateClickHandler fired");
  }
  const [openModal, setOpenModal] = useState(false);
  return (
      <Modal
        showClose={true}
        open={openModal}
        onOpenChange={setOpenModal}
        footer={
          <div className="w-full flex justify-end items-center gap-2 p-5 border-t border-soft-stroke h-fit">
            <Button
              emphasis="medium"
              color="secondary"
              size="md"
              onClick={cancelClickHandler}
            >
              Cancel
            </Button>
            <Button
              emphasis="high"
              color="primary"
              size="md"
              onClick={updateClickHandler}
            >
              Update
            </Button>
          </div>
        }
        trigger={
          <button>Open Modal (Swap with component to open the modal)</button>
        }
      >
        <div className="w-full flex-col flex gap-4 px-10 py-8 h-fit">
          <div className="w-full flex-col flex gap-2">
            <Badge
              iconLeading={<Warning size={12} weight={"bold"} />}
              emphasis="medium"
              color="yellow"
              size="md"
            >
              Update Field
            </Badge>
            <div className="text-xl font-semibold text-foreground w-[440px]">
              Updated Details
            </div>
          </div>
          <div className="text-base text-foreground w-[440px]">
            Are you sure you want to update your details? All changes will be
            immediately reflected in your offerings.
          </div>
        </div>
      </Modal>
  );
}
export default PropvivoModalContainer;
