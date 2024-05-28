import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home || Ashh Clinic",
  description: "Ashh clinic home page",
};
const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default CommonLayout;
