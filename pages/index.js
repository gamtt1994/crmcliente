import Layout from "../components/layout";
import Informacion from "../components/interfas/informacion/Informacion";
import Servicios from "../components/interfas/servicios/Servicios";

const Index = () => {
  return (
    <>
      <Layout>
        <div className="carousel w-full h-full" id="inicio">
          <div className="carousel-inner w-full h-full">
            <input
              className="carousel-open"
              type="radio"
              id="carousel-1"
              name="carousel"
              aria-hidden="true"
              hidden={true}
              defaultChecked
            />

            <div className="carousel-item w-full h-full">
              <img className="w-full h-full" src="slider1.jpg" />
              <div className="carousel-body content-center ">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"></h3>
                <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-6xl xl:text-6xl">
                  Transporte de Carga
                </h1>
                <button className=" w-2/2 sm:w-auto md:w-auto lg:w-auto xl:w-auto">
                  Contactanos
                </button>
              </div>
            </div>

            <input
              className="carousel-open"
              type="radio"
              id="carousel-2"
              name="carousel"
              aria-hidden="true"
              hidden={true}
            />

            <div className="carousel-item w-full h-full">
              <img className="w-full h-full" src="slider2.jpg" />
              <div className="carousel-body content-center ">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"></h3>
                <h1 className="text-xl sm:text-xl md:text-3xl lg:text-5xl xl:text-5xl">
                  Confiabilidad en cada entrega
                </h1>
                <button className=" w-2/2 sm:w-auto md:w-auto lg:w-auto xl:w-auto">
                  ACERCA DE NOSOTROS
                </button>
              </div>
            </div>

            <input
              className="carousel-open"
              type="radio"
              id="carousel-3"
              name="carousel"
              aria-hidden="true"
              hidden={true}
            />

            <div className="carousel-item w-full h-full">
              <img className="w-full h-full" src="slider4.jpg" />
              <div className="carousel-body content-center ">
                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl"></h3>
                <h1 className="text-xl sm:text-xl md:text-3xl lg:text-5xl xl:text-5xl">
                  VERIFICACIÓN DEL PRODUCTO
                </h1>
                <button className=" w-2/2 sm:w-auto md:w-auto lg:w-auto xl:w-auto">
                  INFORMACIÓN
                </button>
              </div>
            </div>

            <label
              htmlFor="carousel-3"
              className="carousel-control prev control-1"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control next control-1"
            >
              ›
            </label>
            <label
              htmlFor="carousel-1"
              className="carousel-control prev control-2"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-3"
              className="carousel-control next control-2"
            >
              ›
            </label>
            <label
              htmlFor="carousel-2"
              className="carousel-control prev control-3"
            >
              ‹
            </label>
            <label
              htmlFor="carousel-1"
              className="carousel-control next control-3"
            >
              ›
            </label>
            <ol className="carousel-indicators">
              <li>
                <label htmlFor="carousel-1" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-2" className="carousel-bullet">
                  •
                </label>
              </li>
              <li>
                <label htmlFor="carousel-3" className="carousel-bullet">
                  •
                </label>
              </li>
            </ol>
          </div>
        </div>
        <Informacion />
        <Servicios />
      </Layout>
    </>
  );
};

export default Index;
