import Layout from "../components/layout";
import Producto from "../components/Producto";
import { gql, useQuery } from "@apollo/client";
import Link from "next/link";

const OBTENER_PRODUCTOS = gql`
  query obtenerProductos {
    obtenerProductos {
      id
      nombre
      precio
      existencia
    }
  }
`;

const Productos = () => {
  const { data, loading, error } = useQuery(OBTENER_PRODUCTOS);

  if (loading) {
    return (
      <div>
        <Layout>
          <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>

          <Link href="/nuevoproducto">
            <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase">
              Nuevo Producto
            </a>
          </Link>

          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/5 py-2"> Nombre</th>
                <th className="w-1/5 py-2"> Existencia</th>
                <th className="w-1/5 py-2"> Precio</th>
                <th className="w-1/5 py-2" colSpan="2">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <tr className="animate-pulse  space-x-4">
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
              </tr>
              <tr className="animate-pulse  space-x-4">
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
              </tr>
              <tr className="animate-pulse  space-x-4">
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
                <td>
                  <div className="h-4 bg-gray-400 rounded w-4/6 m-5 "></div>
                </td>
              </tr>
            </tbody>
          </table>
        </Layout>
      </div>
    );
  }

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Productos</h1>

        <Link href="/nuevoproducto">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white hover:bg-gray-800 hover:text-gray-200 mb-3 rounded uppercase font-bold text-sm">
            Nuevo Producto
          </a>
        </Link>

        <div className="overflow-x-scroll">
          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-0/5 py-2">Codigo</th>
                <th className="w-1/5 py-2">Nombre</th>
                <th className="w-1/5 py-2">Existencia</th>
                <th className="w-1/5 py-2">Precio</th>
                <th className="w-1/5 py-2" colSpan="2">
                  Acción
                </th>
              </tr>
            </thead>

            <tbody className="bg-white">
              {data.obtenerProductos.map((producto, index) => (
                <Producto
                  key={producto.id}
                  producto={producto}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default Productos;
