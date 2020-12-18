import React from "react";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <>
      <footer className="flex flex-wrap content-end justify-evenly shadow-md mt-5">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/8 text-gray-700 text-center  px-4 py-2 m-2  shadow-md mt-5 mb-5">
          <div>
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              Información:
            </h4>
            <p className="text-left text-base sm:text-lg md:text-lg lg:text-lg">
              Se podrán comunicar con nosotros:
            </p>

            <div className="contact-info">
              <div className="flex flex-wrap h-12">
                <svg
                  className="fill text-teal-500 inline-block h-6 w-12 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span className="flex-1  self-center text-left text-base sm:text-base md:text-base lg:text-base">
                  947230083
                </span>
              </div>
              <div className="flex flex-wrap h-12">
                <svg
                  className="fill text-teal-500 inline-block h-6 w-12 self-center"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  ></path>
                </svg>
                <span className="flex-1 self-center text-left text-sm sm:text-sm md:text-sm lg:text-sm">
                  información@transportepegaso.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/8 text-gray-700 text-center  px-4 py-2 m-2 shadow-md mt-5 mb-5">
          <div className="footer-thumb">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
              Ubicación:
            </h4>
            <img src="./img/servicios/mapa.png" />
          </div>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-2/8 text-gray-700 text-center  px-4 py-2 m-2  shadow-md mt-5 mb-5">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                Horario de apertura:
              </h4>
              <div className="flex flex-wrap text-justify ">
                <p className="font-bold w-full ">
                  Lunes - Viernes:
                  <span className="font-normal"> 06:00 AM - 10:00 PM</span>
                </p>
                <p className="font-bold w-full">
                  Sábados:
                  <span className="font-normal"> 09:00 AM - 08:00 PM</span>
                </p>
                <p className="font-bold w-full">
                  Domingo: <span className="font-normal"> Cerrado</span>
                </p>
              </div>
            </div>

            <ul className="social-icon">
              <li>
                <a
                  href="#"
                  className="fa fa-facebook-square"
                  attr="facebook icon"
                ></a>
              </li>
              <li>
                <a href="#" className="fa fa-twitter"></a>
              </li>
              <li>
                <a href="#" className="fa fa-instagram"></a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="container mx-auto py-2 m-2 ">
        <div className="copyright-text">
          <p className="text-center">
            Copyright &copy; 2020 Transporte Pegaso | Design: Gustavo Maldonado
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
