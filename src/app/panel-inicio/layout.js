import Tabs from "@/components/Tabs/Tabs";
import Subheader from "@/components/Subheader/Subheader";

export default async function dashboardLayout({ children }) {
  return (
    <>
      <Tabs />
      <Subheader />
      {children}
    </>
  );
}
