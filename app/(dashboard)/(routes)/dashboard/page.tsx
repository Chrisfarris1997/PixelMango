import { UserButton } from "@clerk/nextjs";


export default function DashboardPage() {
  return (
    <div>
   <div> Dashboard (protected)</div>
   <UserButton afterSignOutUrl="/"/>
   </div>
  )
}
