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
    <>
      <h1 className="text-center">Garage</h1>
      <div className="flex justify-center w-full">
        <DataTable className="md:min-w-3xl" columns={columns} data={vehicles} />
      </div>
    </>
  );
};

export default GaragePage;
