"use client";

import { AddVehicleDialog } from "@/components/AddVehicleDialog";
import { EditVehicleDialog } from "@/components/EditVehicleDialog";
import { Button } from "@/components/ui/button";
import { Vehicle } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Vehicle>[] = [
  {
    header: "Vehicle",
    cell: ({ row }) => {
      const vehicle = row.original;
      return (
        <div className="flex justify-start items-center">
          <p>{vehicle.year + " " + vehicle.model + " " + vehicle.make}</p>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => {
      return (
        <div className="flex justify-end">
          <AddVehicleDialog />
        </div>
      );
    },
    cell: ({ row }) => {
      const vehicle = row.original;
      return (
        <div className="flex space-x-2 justify-end">
          <EditVehicleDialog vehicle={vehicle} />
          <Button variant="destructive">Delete</Button>
        </div>
      );
    },
  },
];
