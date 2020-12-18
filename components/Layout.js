import React, { Fragment } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import Header from "./header";
import { useRouter } from "next/router";
import Menu from "./interfas/header/Header";
import Footer from "./interfas/footer/Footer";
const LayoutContent = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Transporte Pegaso</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU="
          crossOrigin="anonymous"
        />
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>

      {router.pathname === "/login" ||
      router.pathname === "/nuevacuenta" ||
      router.pathname === "/" ? (
        <Fragment>
          <div className="min-h-screen flex flex-col ">
            <Menu />
            <div className="flex flex-1 flex-wrap shadow-md justify-center bg-gradient-to-r ">
              {children}
            </div>
            <Footer />
          </div>
        </Fragment>
      ) : (
        <div className="bg-gray-200 min-h-screen">
          <div className="sm:flex min-h-screen">
            <Sidebar />

            <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
              <Header />
              {children}
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutContent;
