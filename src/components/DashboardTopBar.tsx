import UserMenu from "./UserMenu";

export function DashboardTopBar() {
  return (
    <div>
      <div className="flex items-center justify-end p-4 bg-foreground text-white">
        <div className="flex items-center space-x-4">
          <UserMenu />
        </div>
      </div>
    </div>
  );
}
