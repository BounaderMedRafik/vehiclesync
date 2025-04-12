import React, { ComponentProps } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";
import { VehicleExpenseData } from "@/models/VehicleExpenseData";
import { Separator } from "./ui/separator";

interface ExpenseByVehicleProps extends ComponentProps<"div"> {
  vehicleData: VehicleExpenseData[];
}

const ExpenseByVehicle = (props: ExpenseByVehicleProps) => {
  return (
    <Card className={cn(props.className, "")}>
      <CardHeader className="text-center text-2xl font-semibold">
        YTD Expense By Vehicle
      </CardHeader>
      <CardContent className="flex flex-col justify-start items-center h-full">
        {props.vehicleData.map((data) => {
          return (
            <div key={data.vehicleId} className="w-full">
              <div className="flex justify-between items-center w-full">
                <p>{data.vehicleName}</p>
                <p>${data.vehicleTotal}</p>
              </div>
              <Separator className="bg-accent" orientation="horizontal" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ExpenseByVehicle;
