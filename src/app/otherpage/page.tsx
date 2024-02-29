"use client";
// Generated with Ion on 2/28/2024, 8:10:17 PM
// Figma Link: https://www.figma.com/file/Qohyu8a8oaVqtDvIRuY120?node-id=3157:37969
import Checkbox from "@/components/ion/Checkbox";
import {
  CaretUpDown,
  DotsThreeOutlineVertical,
  CaretLeft,
  Globe,
  Funnel,
} from "@phosphor-icons/react/dist/ssr";
import { MouseEvent, useMemo } from "react";
import Button from "@/components/ion/Button";
import Badge from "@/components/ion/Badge";
import SideNavigation from "@/components/ion/SideNavigation";
import PropVivoTopBar from "@/components/ion/PropVivoTopBar";
import { ArrowRight, Bluetooth } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import Table from "@/components/ion/Table";
import Pagination from "@/components/ion/Pagination";
import Select from "@/components/ion/Select";

function PropvivoIonPage2() {
  function globalCoaUsNwPropertyClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("globalCoaUsNwPropertyClickHandler fired");
  }
  function chartOfAccountsClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("chartOfAccountsClickHandler fired");
  }
  function filterClickHandler(e: MouseEvent<HTMLButtonElement>) {
    alert("filterClickHandler fired");
  }
  const columns = useMemo(
    () =>
      [
        {
          id: "_",
          header: ({ table: table }) => (
            <Checkbox
              checked={
                table.getIsAllPageRowsSelected() ||
                (table.getIsSomePageRowsSelected() && "indeterminate")
              }
              onCheckedChange={(value) => {
                if (table.getIsSomePageRowsSelected()) {
                  table.toggleAllPageRowsSelected(false);
                } else {
                  table.toggleAllPageRowsSelected(!!value);
                }
              }}
              aria-label="Select all"
            />
          ),
          cell: ({ row: row }) => (
            <Checkbox
              checked={row.getIsSelected()}
              onCheckedChange={(value) => row.toggleSelected(!!value)}
              aria-label="Select row"
            />
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
              <h4>Name</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "name",
          cell: ({ row: { original: cellData } }) => (
            <Button
              emphasis="low"
              color="primary"
              size="sm"
              onClick={globalCoaUsNwPropertyClickHandler}
            >
              Global COA US-NW_Property
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
              <h4>Legal Entity Type</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "legalEntityType",
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
              <h4>Country</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "country",
          cell: ({ row: { original: cellData } }) => <>USA</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Region</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "region",
          cell: ({ row: { original: cellData } }) => <>North East</>,
        },
        {
          header: ({ column: column }) => (
            <button
              className="flex flex-row items-center gap-x-3 text-sm font-normal"
              onClick={() =>
                column.toggleSorting(column.getIsSorted() === "asc")
              }
            >
              <h4>Mapped Legal Entities</h4>
              <CaretUpDown
                size={16}
                className="stroke-sub-foreground"
              ></CaretUpDown>
            </button>
          ),
          accessorKey: "mappedLegalEntities",
          cell: ({ row: { original: cellData } }) => <>58</>,
        },
        {
          header: "Status",
          cell: ({ row: { original: cellData } }) => (
            <Badge emphasis="medium" color="green" size="md">
              Active
            </Badge>
          ),
        },
        {
          header: "Action",
          cell: ({ row: { original: cellData } }) => (
            <DotsThreeOutlineVertical size={16} weight={"bold"} />
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
              onClick={chartOfAccountsClickHandler}
              emphasis="link"
              className="no-underline"
            >
              Chart of Accounts
            </Button>
            <div className="flex items-center gap-5">
              <Select
                placeholder="Legal Entity Type"
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
                className="w-[250px]"
              />
              <Button
                iconLeading={<Funnel size={16} weight={"bold"} />}
                emphasis="medium"
                color="secondary"
                size="md"
                onClick={filterClickHandler}
              >
                Filter
              </Button>
            </div>
          </div>
          <Table
            columns={columns}
            data={Array(8).fill({
              name: "",
              legalEntityType: "",
              country: "",
              region: "",
              mappedLegalEntities: "",
              status: "",
              action: "",
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
export default PropvivoIonPage2;
