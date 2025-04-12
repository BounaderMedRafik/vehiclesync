import AnnualTotalCard from "@/components/AnnualTotalCard";
import { CostByCategoryChart } from "@/components/CostByCategoryChart";
import ExpenseByVehicle from "@/components/ExpenseByVehicle";
import { auth } from "@/lib/auth";
import { VehicleExpenseData } from "@/models/VehicleExpenseData";
import MaintenanceRecordRepository from "@/repositories/MaintenanceRecordRepository";
import React from "react";
import { redirect } from "next/navigation";
import { getVehicleExpenseData } from "@/services/VehicleService";
import VehicleRepository from "@/repositories/VehicleRepository";

const DashboardHome = async () => {
  const maintenanceRecordRepository = new MaintenanceRecordRepository();
  const vehicleRepository = new VehicleRepository();
  const session = await auth();

  if (!session?.user) redirect("/");
  //TODO: fetch this from a repository
  const vehicles = await vehicleRepository.getAllByUserId(
    session?.user?.id as string
  );

  const vehicleData: VehicleExpenseData[] = await getVehicleExpenseData(
    vehicles
  );

  const ytdTotal = await maintenanceRecordRepository.getYTDTotalByUser(
    session?.user?.id as string
  );

  return (
    <>
      <h1 className="text-center">Home</h1>
      <div className="size-full grid gap-8 grid-cols-1 md:grid-cols-2 grid-rows-3 p-12">
        <AnnualTotalCard className="col-span-1" ytdTotal={ytdTotal} />
        <CostByCategoryChart className="col-start-1 row-start-2 row-span-2" />
        <ExpenseByVehicle
          className="col-start-2 row-span-3"
          vehicleData={vehicleData}
        />
      </div>
    </>
  );
};

export default DashboardHome;
