const Informacion = () => {
  return (
    <>
      <div className="info " id="quienes">
        <img className="" src="slider3.jpg" />
        <div className="info-body w-5/12  content-center bg-white bg-opacity-50">
          <div className="w-full flex flex-wrap ">
            <h2 className="info-header flex flex-wrap w-auto text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-justify">
              Bienvenido a
            </h2>
            <svg
              className="w-8 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeWidth="1"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
          </div>

          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-justify">
            Transporte Pegasus
          </h2>
          <div className="info-cuerpo text-justify">
            <p>
              Somos una empresa con más de 20 años en el mercado responsable la
              cual velamos por la integridad, disponibilidad y seguridad del
              transporte de los productos
            </p>
            <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-bold mt-2 mb-2">
              Misión
            </h2>
            <p className="text-justify">
              Garantizar el cuidado integral de la salud de las familias
            </p>
            <h2 className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg font-bold mt-2 mb-2">
              Visión
            </h2>
            <p className="text-justify">
              Ser reconocidos como la empresa que brinda los mejores planes de
              salud orientados a las familias
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informacion;
