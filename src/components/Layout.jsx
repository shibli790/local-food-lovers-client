import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className=" bg-linear-to-br from-blue-100 to-purple-100  w-full ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
