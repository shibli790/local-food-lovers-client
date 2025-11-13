import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className=" bg-[#f8f3f8]  w-full ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
