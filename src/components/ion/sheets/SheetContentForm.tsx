"use client";
// Generated with Ion on 2/28/2024, 12:09:04 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3040:22426
import Divider from "@/components/ion/Divider";
import { Globe } from "@phosphor-icons/react/dist/ssr";
import { ArrowRight, Bluetooth } from "@phosphor-icons/react";
import Label from "@/components/ion/Label";
import { RadioGroupItem as Radio, RadioGroup } from "@/components/ion/Radio";
import { useState } from "react";
import Input from "@/components/ion/Input";
import Select from "@/components/ion/Select";

function SheetContentForm() {
   const [glCode, setGlCode] = useState("");
   const [subHeaderStartRange, setSubHeaderStartRange] = useState("");
   const [subHeaderEndRange, setSubHeaderEndRange] = useState("");
   return (
      <div className="w-full h-full flex-col flex gap-6 ">
         <div className="w-full flex-col flex gap-1 font-semibold">
            <div className="text-sm text-foreground">Chart of Accounts</div>
            <div className="text-xs text-sub-foreground">
               Global COA US-NW-Property
            </div>
         </div>
         <Divider />
         <Select
            placeholder="Select Main Account"
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
            label="Main Account"
            className="w-full"
         />
         <div className="w-full flex-col flex gap-1">
            <Label required={true}>Is Parent</Label>
            <RadioGroup orientation="horizontal">
               <div className="flex items-start gap-2">
                  <Radio label="Yes" value="Yes" />
                  <Radio label="No" value="No" />
               </div>
            </RadioGroup>
         </div>
         <Input
            placeholder="Enter GL Code"
            required={true}
            label="GL Code"
            showHintIcon={true}
            hint="Header Range must be between 1000-5000"
            value={glCode}
            onChange={(e) => setGlCode(e.target.value)}
            className="w-full"
         />
         <Select
            placeholder="Select Header"
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
            label="Header"
            className="w-full"
         />
         <Input
            placeholder="Enter GL Code"
            required={true}
            label="Sub-Header Start Range"
            value={subHeaderStartRange}
            onChange={(e) => setSubHeaderStartRange(e.target.value)}
            className="w-full"
         />
         <Input
            placeholder="Enter GL Code"
            required={true}
            label="Sub-Header End Range"
            value={subHeaderEndRange}
            onChange={(e) => setSubHeaderEndRange(e.target.value)}
            className="w-full"
         />
      </div>
   );
}
export default SheetContentForm;
