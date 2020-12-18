import Layout from "../components/layout";
import React, { useState, useEffect, useSelector } from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import Link from "next/link";
import MaterialTable from "material-table";
import Swal from "sweetalert2";
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

const ELIMINAR_CLIENTE = gql`
  mutation eliminarCliente($id: ID!) {
    eliminarCliente(id: $id)
  }
`;

const OBTENER_CLIENTES_USUARIO = gql`
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

const Clientess = () => {
  const router = useRouter();
  const { data, loading, client } = useQuery(OBTENER_CLIENTES_USUARIOS);

  const [eliminarCliente] = useMutation(ELIMINAR_CLIENTE, {
    update(cache) {
      const { obtenerClientesVendedor } = cache.readQuery({
        query: OBTENER_CLIENTES_USUARIO,
      });

      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIO,
        data: {
          obtenerClientesVendedor: obtenerClientesVendedor.filter(
            (clienteActual) => clienteActual.id !== id
          ),
        },
      });
    },
  });

  const confirmarEliminarCliente = (rowData) => {
    var id = rowData.id;

    Swal.fire({
      title: "¿Deseas eliminar a este cliente?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, Cancelar",
    }).then(async (result) => {
      if (result.value) {
        try {
          const { data } = await eliminarCliente({
            variables: {
              id,
            },
          });

          Swal.fire("Eliminado!", data.eliminarCliente, "success");
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  const editarCliente = (rowData) => {
    var id = rowData.id;
    router.push({
      pathname: "/editarcliente/[id]",
      query: { id },
    });
  };

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
                <th className="w-1/5 py-2"> Nombre</th>
                <th className="w-1/5 py-2"> Empresa</th>
                <th className="w-1/5 py-2"> Email</th>
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
  const editable = JSON.parse(JSON.stringify(data));
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
          <MaterialTable
            columns={[
              { title: "Nombre", field: "nombre" },
              { title: "Apellido", field: "apellido" },
              { title: "Empresa", field: "empresa" },
              { title: "Email", field: "email" },
            ]}
            data={editable.obtenerClientesVendedor}
            actions={[
              (rowData) => ({
                icon: "edit",
                tooltip: "edit User",
                onClick: () => editarCliente(rowData),
              }),
              (rowData) => ({
                icon: "delete",
                tooltip: "Delete User",
                onClick: () => confirmarEliminarCliente(rowData),
              }),
            ]}
            title="Clientes"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Clientess;
