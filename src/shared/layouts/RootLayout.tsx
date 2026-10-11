import { Footer } from "./Footer";
import { Header } from "./Header";
import { Outlet, ScrollRestoration } from "react-router";

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <ScrollRestoration />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
