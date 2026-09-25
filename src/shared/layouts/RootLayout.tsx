import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
