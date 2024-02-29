"use client";
// Generated with Ion on 2/28/2024, 7:09:38 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3163:13533
import { WarningCircle } from "@phosphor-icons/react/dist/ssr";
import Badge from "@/components/ion/Badge";
import { useState } from "react";
import Modal from "@/components/ion/Modal";

type CannotDeleteModalProps = {
    children?: React.ReactNode;
};

function CannotDeleteModal({ children }: CannotDeleteModalProps) {
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
              iconLeading={<WarningCircle size={12} weight={"bold"} />}
              emphasis="medium"
              color="red"
              size="md"
            >
              Error
            </Badge>
            <div className="text-xl font-semibold text-foreground w-[440px]">
              Cannot Delete
            </div>
          </div>
          <div className="text-base text-foreground w-[440px]">
            This item cannot be deleted since it is mapped with other elements
            in the system.
          </div>
        </div>
      </Modal>
  );
}
export default CannotDeleteModal;
