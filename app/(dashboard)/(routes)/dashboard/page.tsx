import { UserButton } from "@clerk/nextjs";

const DashboardPage = () => {
  return (
    <>
    <p>Dashboard Page (Protected)</p>
    <UserButton afterSignOutUrl="/" />
    </>
  )
}
export default DashboardPage;
