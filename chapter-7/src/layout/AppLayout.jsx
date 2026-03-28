import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
