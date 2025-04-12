import { User } from "lucide-react";

export function DashboardTopBar() {
  return (
    <div>
      <div className="flex items-center justify-end p-4 bg-foreground text-white">
        <div className="flex items-center space-x-4">
          <User className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
