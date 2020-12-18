import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  const presionarclick = () => {
    menu.classList.toggle("hidden");
  };

  return (
    <aside className="bg-gray-800 sm:w-1/3 xl:w-1/5 sm:min-h-screen p-5">
      <div className="flex justify-between">
        <p className="text-white text-xl font-black">Transporte Pegasus</p>

        <div className="block lg:hidden ">
          <button
            id="boton"
            onClick={() => presionarclick()}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white "
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div id="menu">
        <nav className="mt-5 list-none">
          <li className={router.pathname === "/" ? "bg-blue-800 p-2" : "p-2"}>
            <Link href="/clientes">
              <a className="text-white block">Clientes</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/pedidos" ? "bg-blue-800 p-2" : "p-2"
            }
          >
            <Link href="/pedidos">
              <a className="text-white block">Pedidos</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/productos" ? "bg-blue-800 p-2" : "p-2"
            }
          >
            <Link href="/productos">
              <a className="text-white block">Productos</a>
            </Link>
          </li>
        </nav>

        <div className="sm:mt-10">
          <p className="text-white text-2xl font-black">Otras Opciones</p>
        </div>
        <nav className="mt-5 list-none">
          <li
            className={
              router.pathname === "/mejoresvendedores"
                ? "bg-blue-800 p-2"
                : "p-2"
            }
          >
            <Link href="/mejoresvendedores">
              <a className="text-white block">Mejores Vendedores</a>
            </Link>
          </li>
          <li
            className={
              router.pathname === "/mejoresclientes" ? "bg-blue-800 p-2" : "p-2"
            }
          >
            <Link href="/mejoresclientes">
              <a className="text-white block">Mejores Clientes</a>
            </Link>
          </li>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
