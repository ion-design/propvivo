"use client";
// Generated with Ion on 2/28/2024, 10:56:26 AM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3038:20257
import { CaretUpDown, CaretLeft, Funnel } from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo, useState } from "react";
import Button from "@/components/ion/Button";
import Tag from "@/components/ion/Tag";
import Badge from "@/components/ion/Badge";
import SideNavigation from "@/components/ion/SideNavigation";
import PropVivoTopBar from "@/components/ion/PropVivoTopBar";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Sheet from "@/components/Sheet";
import { TagChevron } from "@phosphor-icons/react";
import SheetContentForm from "@/components/ion/SheetContentForm";

function PropvivoIon() {
   function travisScottAssociationClickHandler(
      e: MouseEvent<HTMLButtonElement>
   ) {
      alert("travisScottAssociationClickHandler fired");
   }
   function _1212022ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("_1212022ClickHandler fired");
   }
   function _1012022ClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("_1012022ClickHandler fired");
   }
   function globalCoaUsNwPropertyClickHandler(
      e: MouseEvent<HTMLButtonElement>
   ) {
      alert("globalCoaUsNwPropertyClickHandler fired");
   }
   function filterClickHandler(e: MouseEvent<HTMLButtonElement>) {
      alert("filterClickHandler fired");
   }
   const columns = useMemo(
      () =>
         [
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Legal Entities</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "legalEntities",
               cell: ({ row: { original: cellData } }) => (
                  <Button
                     emphasis="low"
                     color="primary"
                     size="sm"
                     onClick={travisScottAssociationClickHandler}
                  >
                     Travis Scott Association
                  </Button>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Code</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "code",
               cell: ({ row: { original: cellData } }) => <>TSA</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>COA</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "coa",
               cell: ({ row: { original: cellData } }) => (
                  <>TSA COA US-NW-Property</>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Mapped On</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "mappedOn",
               cell: ({ row: { original: cellData } }) => (
                  <Tag
                     type="stroke"
                     color="simple"
                     onClick={_1212022ClickHandler}
                  >
                     12/1/2022
                  </Tag>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Mapped By</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "mappedBy",
               cell: ({ row: { original: cellData } }) => <>Nancy Adams</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Service Start Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "serviceStartDate",
               cell: ({ row: { original: cellData } }) => (
                  <Tag
                     type="stroke"
                     color="simple"
                     onClick={_1012022ClickHandler}
                  >
                     10/1/2022
                  </Tag>
               ),
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Service End Date</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "serviceEndDate",
               cell: ({ row: { original: cellData } }) => <>-</>,
            },
            {
               header: ({ column: column }) => (
                  <button
                     className="flex flex-row items-center gap-x-3 text-sm font-normal"
                     onClick={() =>
                        column.toggleSorting(column.getIsSorted() === "asc")
                     }
                  >
                     <h4>Legal Entity Status</h4>
                     <CaretUpDown
                        size={16}
                        className="stroke-sub-foreground"
                     ></CaretUpDown>
                  </button>
               ),
               accessorKey: "legalEntityStatus",
               cell: ({ row: { original: cellData } }) => (
                  <Badge emphasis="medium" color="green" size="md">
                     Active
                  </Badge>
               ),
            },
         ] as ColumnDef<unknown>[],
      []
   );
   return (
      <div className="w-screen h-screen flex">
         <SideNavigation />
         <div className="bg-background h-full flex-1 flex-col flex">
            <PropVivoTopBar className="w-full" />

            <div className="w-full flex-1 flex-col flex gap-5 px-10 py-5">
               <div className="w-full flex justify-between items-center">
                  <Button
                     iconLeading={<CaretLeft size={16} weight={"bold"} />}
                     size="md"
                     color="secondary"
                     onClick={globalCoaUsNwPropertyClickHandler}
                     emphasis="link"
                     className="no-underline"
                  >
                     Global COA US-NW-Property
                  </Button>
                  <Button
                     iconLeading={<Funnel size={16} weight={"bold"} />}
                     emphasis="medium"
                     color="secondary"
                     size="sm"
                     onClick={filterClickHandler}
                  >
                     Filter
                  </Button>
               </div>
               <Table
                  columns={columns}
                  data={Array(8).fill({
                     legalEntities: "",
                     code: "",
                     coa: "",
                     mappedOn: "",
                     mappedBy: "",
                     serviceStartDate: "",
                     serviceEndDate: "",
                     legalEntityStatus: "",
                  })}
                  className="w-full"
               />
               <div className="w-full flex justify-center items-start py-3">
                  <Pagination />
               </div>
            </div>
         </div>
      </div>
   );
}
export default PropvivoIon;
