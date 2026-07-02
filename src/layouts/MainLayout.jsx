import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
// import Hero from "../components/Hero/Hero";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        {/* <Hero /> */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default MainLayout;
