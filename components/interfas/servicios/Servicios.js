const Servicios = () => {
  return (
    <>
      <div className="flex flex flex-wrap w-full" id="servicios">
        <div className=" w-full  content-center">
          <h2 className="info-header mt-10 ml-20  flex flex-wrap w-auto content-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-justify">
            Ventajas
          </h2>
          <div className="flex flex-wrap w-full  mx-auto my-auto">
            <div className="flex flex-wrap w-auto mx-auto mt-10 mb-10">
              <div className=" h-auto w-auto items-center m-auto p-auto">
                <img
                  src="./img/servicios/servicios-1.jpg"
                  className="h-auto"
                  alt=""
                />

                <div className="flex flex-wrap bg-gray-100">
                  <h3 className="w-full mt-5 ml-5 font-bold text-justify">
                    Entrega Personalizada
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap w-auto mx-auto my-auto">
              <div className=" h-auto w-auto items-center">
                <img
                  src="./img/servicios/servicios-2.jpg"
                  className="h-auto"
                  alt=""
                />

                <div className="flex flex-wrap bg-gray-100">
                  <h3 className="w-full mt-5 ml-5 font-bold text-justify">
                    Descuento por recomendación
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap   w-auto mx-auto my-auto">
              <div className=" h-auto w-auto items-center font-bold text-justify">
                <img
                  src="./img/servicios/servicios-3.jpg"
                  className="h-auto"
                  alt=""
                />

                <div className="flex flex-wrap bg-gray-100">
                  <h3 className="w-full mt-5 ml-5">
                    Verificación del producto
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Servicios;
