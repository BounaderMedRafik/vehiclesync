import AnnualTotalCard from "@/components/AnnualTotalCard";
import { CostByCategoryChart } from "@/components/CostByCategoryChart";
import ExpenseByVehicle from "@/components/ExpenseByVehicle";
import { auth } from "@/lib/auth";
import { VehicleExpenseData } from "@/models/VehicleExpenseData";
import MaintenanceRecordRepository from "@/repositories/MaintenanceRecordRepository";
import { randomUUID } from "crypto";
import React from "react";
import { redirect } from "next/navigation";

const DashboardHome = async () => {
  const maintenanceRecordRepository = new MaintenanceRecordRepository();
  const session = await auth();
  //TODO: fetch this from a repository
  const vehicleData: VehicleExpenseData[] = [
    {
      vehicleId: randomUUID(),
      vehicleName: "2023 Ford Car",
      vehicleTotal: 452,
    },
    {
      vehicleId: randomUUID(),
      vehicleName: "2023 Ford Car",
      vehicleTotal: 452,
    },
    {
      vehicleId: randomUUID(),
      vehicleName: "2023 Ford Car",
      vehicleTotal: 452,
    },
  ];

  if (!session?.user) {
    redirect("/");
  }

  const ytdTotal = await maintenanceRecordRepository.getYTDTotalForAllByUser(
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
