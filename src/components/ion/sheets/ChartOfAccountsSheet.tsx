"use client";
// Generated with Ion on 2/28/2024, 7:20:41 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3133:18752
import { MouseEvent } from "react";
import Button from "@/components/ion/Button";
import Divider from "@/components/ion/Divider";
import Label from "@/components/ion/Label";

function ChartOfAccountsSheet() {
  function editClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("editClickHandler fired");
  }
  return (
    <div className="w-full flex-col flex gap-6">
        <div className="w-full flex-col flex gap-1 font-semibold">
            <div className="text-sm text-foreground">Chart of Accounts</div>
            <div className="text-xs text-sub-foreground">
            Global COA US-NW-Property
            </div>
        </div>
        <Divider />
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>Main Account</Label>
        </div>
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>Is Parent</Label>
            <div className="text-xs font-semibold text-sub-foreground w-[426px]">
            Yes
            </div>
        </div>
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>GL Code</Label>
            <div className="text-xs font-semibold text-sub-foreground w-[426px]">
            11102
            </div>
        </div>
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>Header</Label>
            <div className="text-xs font-semibold text-sub-foreground w-[426px]">
            Current Asset
            </div>
        </div>
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>Sub-Header Start Range</Label>
            <div className="text-xs font-semibold text-sub-foreground w-[426px]">
            100001
            </div>
        </div>
        <div className="w-full flex-col flex gap-1">
            <Label required={true}>Sub-Header End Range</Label>
            <div className="text-xs font-semibold text-sub-foreground w-[426px]">
            119999
            </div>
        </div>
    </div>
  );
}
export default ChartOfAccountsSheet;
