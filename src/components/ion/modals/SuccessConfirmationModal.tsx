"use client";
// Generated with Ion on 2/28/2024, 7:08:29 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3163:13533
import { Check } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import { useState } from "react";
import Modal from "@/components/ion/Modal";

type SuccessConfirmationModalProps = {
    children?: React.ReactNode;
};

function SuccessConfirmationModal({ children }: SuccessConfirmationModalProps) {
  const [openModal, setOpenModal] = useState(false);
  return (
      <Modal
        showClose={true}
        open={openModal}
        onOpenChange={setOpenModal}
        trigger={
          children
        }
      >
        <div className="w-full flex-col flex gap-4 px-10 py-8 h-fit">
          <div className="w-full flex-col flex gap-2">
            <Badge
              iconLeading={<Check size={12} weight={"bold"} />}
              emphasis="medium"
              color="green"
              size="md"
            >
              Success
            </Badge>
            <div className="text-xl font-semibold text-foreground w-[440px]">
              Successfully Updated
            </div>
          </div>
          <div className="text-base text-foreground w-[440px]">
            GL Line item has been updated successfully. All changes are now
            reflected in your offerings.
          </div>
        </div>
      </Modal>
  );
}
export default SuccessConfirmationModal;
