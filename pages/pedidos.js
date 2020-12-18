import Layout from "../components/layout";
import Pedido from "../components/pedido";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";

const OBTENER_PEDIDOS = gql`
  query obtenerPedidosVendedor {
    obtenerPedidosVendedor {
      id
      pedido {
        id
        cantidad
        nombre
      }
      cliente {
        id
        nombre
        apellido
        email
        telefono
      }
      vendedor
      total
      estado
    }
  }
`;

const Pedidos = () => {
  const { data, loading, error } = useQuery(OBTENER_PEDIDOS);

  if (loading) {
    return (
      <div>
        <Layout>
          <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>

          <Link href="/nuevocliente">
            <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase">
              Nuevo Cliente
            </a>
          </Link>

          <div
            className={`border-t-4 mt-4 bg-white rounded p-6 md:grid md:grid-cols-2 md:gap-4 shadow-lg animate-pulse  space-x-4`}
          >
            <div>
              <p className="font-bold text-gray-800">Cliente:</p>
              <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>

              <p className="h-4 bg-gray-400 rounded w-3/6 m-5 "></p>

              <p className="h-4 bg-gray-400 rounded w-3/6 m-5 "></p>

              <h2 className="text-gray-800 font-bold mt-10">Estado Pedido:</h2>

              <p className="mt-2 appearance-none bg-blue-600 border border-blue-600 text-white p-2 text-center rounded leading-tight focus:outline-none focus:bg-blue-600 focus:border-blue-500 uppercase text-xs font-bold h-4 bg-gray-400 rounded w-3/6 m-5 "></p>
            </div>

            <div>
              <h2 className="text-gray-800 font-bold mt-2">
                Resumen del Pedido
              </h2>

              <div className="mt-4">
                <div className="text-sm text-gray-600">
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </div>
              </div>

              <div className="text-gray-800 mt-3 font-bold ">
                <span className="font-light">
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </span>
              </div>

              <p className="h-4 bg-gray-400 rounded w-4/6 m-5 uppercase text-xs font-bold  flex items-center mt-4 bg-red-800 px-5 py-2 inline-block text-white rounded leading-tight"></p>
            </div>
          </div>
        </Layout>
      </div>
    );
  }

  const { obtenerPedidosVendedor } = data;

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Pedidos</h1>

        <Link href="/nuevopedido">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold">
            Nuevo Pedido
          </a>
        </Link>

        {obtenerPedidosVendedor.length === 0 ? (
          <p className="mt-5 text-center text-2xl">No hay pedidos aún</p>
        ) : (
          obtenerPedidosVendedor.map((pedido, index) => (
            <Pedido key={pedido.id} pedido={pedido} index={index} />
          ))
        )}
      </Layout>
    </div>
  );
};

export default Pedidos;
