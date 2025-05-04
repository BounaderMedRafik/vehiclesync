import LandingPageInfoBlock from "@/components/LandingPageInfoBlock";
import LandingPageLoginBlock from "@/components/LandingPageLoginBlock";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  if (session?.user) {
    return redirect("/dashboard");
  }

  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-[url('/landing_page_bg.jpg')] bg-cover bg-no-repeat bg-center">
      <div className="flex min-w-3xl items-center justify-center flex1 h-96">
        <LandingPageInfoBlock />
        <LandingPageLoginBlock />
      </div>
    </div>
  );
}
