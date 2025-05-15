import Subheader from "@/components/Subheader/Subheader";

export default async function dashboardLayout({ children }) {
  return (
    <>
      <Subheader />
      {children}
    </>
  );
}
