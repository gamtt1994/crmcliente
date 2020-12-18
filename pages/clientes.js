import Layout from "../components/layout";
import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import ClienteLista from "../components/cliente";
import Link from "next/link";

const OBTENER_CLIENTES_USUARIOS = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      empresa
      email
    }
  }
`;

const Clientes = () => {
  const router = useRouter();

  const { data, loading, client } = useQuery(OBTENER_CLIENTES_USUARIOS);

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

          <table className="table-auto shadow-md mt-10 w-full w-lg">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/5 py-2"> Codigo</th>
                <th className="w-1/5 py-2"> Nombre</th>
                <th className="w-1/5 py-2"> Empresa</th>
                <th className="w-1/5 py-2" colSpan="2">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
              <tr className="animate-pulse  space-x-4">
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
              </tr>
              <tr className="animate-pulse  space-x-4">
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
              </tr>
              <tr className="animate-pulse  space-x-4">
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
                <td>
                  <p className="h-4 bg-gray-400 rounded w-4/6 m-5 "></p>
                </td>
              </tr>
            </tbody>
          </table>
        </Layout>
      </div>
    );
  }

  if (!data.obtenerClientesVendedor) {
    client.clearStore();
    router.push("/");
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>

        <Link href="/nuevocliente">
          <a className="bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase">
            Nuevo Cliente
          </a>
        </Link>
        <div className="overflow-x-scroll">
          <table className="table-auto overflow-x-auto shadow-md mt-10 w-full ">
            <thead className="bg-gray-800">
              <tr className="text-white">
                <th className="w-1/1 py-2">Codigo</th>
                <th className="w-1/5 py-2"> Nombre</th>
                <th className="w-1/5 py-2"> Empresa</th>
                <th className="w-1/1 py-2"> Email</th>
                <th className="w-1/5 py-2" colSpan="2">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.obtenerClientesVendedor.map((cliente, index) => (
                <ClienteLista
                  key={cliente.id}
                  cliente={cliente}
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

export default Clientes;
