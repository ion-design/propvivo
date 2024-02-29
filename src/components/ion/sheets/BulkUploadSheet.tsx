"use client";
// Generated with Ion on 2/28/2024, 7:29:35 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3157:36663
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight, Bluetooth } from "lucide-react";
import { useState } from "react";
import Input from "@/components/ion/Input";
import Divider from "@/components/ion/Divider";
import Select from "@/components/ion/Select";
import clsx from "clsx";
type BulkUploadModalContentProps = {
  className?: string;
};

function BulkUploadSheet({
  className = "",
}: BulkUploadModalContentProps) {
    const [lineItems, setLineItems] = useState("");
    
    
  return (
    <div className={clsx("w-[342px] flex-col flex gap-6 h-fit", className)}>
      <div className="w-full flex-col flex gap-6">
        <Select
          placeholder="Select Chart of Accounts"
          options={[
            {
              description: "first",
              iconLeading: <Globe size={16} weight={"regular"} />,
              label: "Item 1",
              value: "Item 1",
            },
            {
              description: "second",
              iconLeading: <ArrowRight size={16} />,
              label: "Item 2",
              value: "Item 2",
            },
            {
              description: "third",
              iconLeading: <Bluetooth size={16} />,
              label: "Item 3",
              suffix: "@third",
              value: "Item 3",
            },
          ]}
          required={true}
          label="Chart of Accounts"
          className="w-full"
        />
        <Input
          placeholder="0 Files Selected"
          required={true}
          label="Line Items"
          value={lineItems}
          onChange={(e) => setLineItems(e.target.value)}
          className="w-full"
        />
      </div>
      <Divider />
      <div className="w-full flex-col flex gap-2">
        <div className="text-sm font-semibold text-black">Instructions</div>
        <div className="w-full flex-col flex gap-1 text-xs text-sub-foreground">
          <div className="w-[342px]">Select “Chart of Account”</div>
          <div className="w-[342px]">
            Enter your data into our Excel template
          </div>
          <div className="w-[342px]">
            Once Finished, select or upload the file to “Line Items”
          </div>
          <div className="w-[342px]">Click “Submit” button</div>
        </div>
      </div>
    </div>
  );
}
export default BulkUploadSheet;
