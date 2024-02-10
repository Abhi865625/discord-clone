import { ModeToggle } from "@/components/moder-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </div>
  );
}
