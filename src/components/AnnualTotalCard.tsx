import React, { ComponentProps } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { cn } from "@/lib/utils";

const AnnualTotalCard = (props: ComponentProps<"div">) => {
  return (
    <Card className={cn(props.className, "")}>
      <CardHeader className="text-center text-2xl">
        YTD Total Expenses
      </CardHeader>
      <CardContent className="flex justify-center items-center h-full">
        <span className="text-5xl">
          $<span>678</span>
        </span>
      </CardContent>
    </Card>
  );
};

export default AnnualTotalCard;
