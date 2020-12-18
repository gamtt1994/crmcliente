import { useRouter } from "next/router";
import { Link } from "react-scroll";
const Header = () => {
  const router = useRouter();

  const login = () => {
    router.push("/login");
  };

  const presionarclick = () => {
    menu.classList.toggle("hidden");
  };

  const inicio = () => {
    router.push("/");
  };

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap  p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl text-green-500 tracking-tight flex flex-wrap">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            Transporte Pegasus
          </span>
        </div>
        <div className="block lg:hidden">
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
        <div
          id="menu"
          className="w-full block flex-grow  lg:flex lg:items-center lg:w-auto hidden"
        >
          <div className="text-sm lg:flex-grow justify-evenly">
            <Link
              onClick={() => inicio()}
              to="inicio"
              smooth={true}
              duration={1000}
              href=""
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4"
            >
              Inicio
            </Link>
            <Link
              to="quienes"
              onClick={() => inicio()}
              smooth={true}
              duration={1000}
              href=""
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4"
            >
              Quienes Somos
            </Link>
            <Link
              to="servicios"
              smooth={true}
              duration={1000}
              href=""
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4"
            >
              Servicios
            </Link>
            <Link
              to="quienes"
              smooth={true}
              duration={1000}
              href=""
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4"
            >
              Galería
            </Link>
            <a
              href=""
              className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-green-500 mr-4"
            >
              Servicios
            </a>
          </div>
          <div>
            <Link
              to=""
              onClick={() => login()}
              href=""
              className=" bg-green-500 inline-block text-sm px-4 py-2 leading-none border
               rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
