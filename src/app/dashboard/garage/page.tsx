import { DataTable } from "@/components/DataTable";
import { auth } from "@/lib/auth";
import VehicleRepository from "@/repositories/VehicleRepository";
import { redirect } from "next/navigation";
import React from "react";
import { columns } from "./columns";

const GaragePage = async () => {
  const vehicleRepository = new VehicleRepository();
  const session = await auth();

  if (!session?.user) redirect("/");

  const vehicles = await vehicleRepository.getAllByUserId(
    session?.user?.id as string
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-center sm:text-left px-4 sm:px-6 lg:px-8">
        Garage
      </h1>
      <div className="px-4 sm:px-6 lg:px-8">
        <DataTable className="w-full" columns={columns} data={vehicles} />
      </div>
    </div>
  );
};

export default GaragePage;
