import React, { useState } from "react";
import Swal from "sweetalert2";
import { useMutation, gql } from "@apollo/client";
import Router from "next/router";

const ELIMINAR_CLIENTE = gql`
  mutation eliminarCliente($id: ID!) {
    eliminarCliente(id: $id)
  }
`;

const OBTENER_CLIENTES_USUARIOS = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      dni
      nombre
      apellido
      empresa
      email
    }
  }
`;

const Cliente = ({ cliente, index }) => {
  const { nombre, apellido, empresa, email, id } = cliente;

  const [eliminarCliente] = useMutation(ELIMINAR_CLIENTE, {
    update(cache) {
      //obtener una copia del objeto del cache
      const { obtenerClientesVendedor } = cache.readQuery({
        query: OBTENER_CLIENTES_USUARIOS,
      });

      cache.writeQuery({
        query: OBTENER_CLIENTES_USUARIOS,
        data: {
          obtenerClientesVendedor: obtenerClientesVendedor.filter(
            (clienteActual) => clienteActual.id !== id
          ),
        },
      });
    },
  });

  const confirmarEliminarCliente = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "¡No podrás revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
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

  const editarCliente = (id) => {
    Router.push({
      pathname: "/editarcliente/[id]",
      query: { id },
    });
  };

  return (
    <tr>
      <td className="border px-4 py-2"> {index}</td>
      <td className="border px-4 py-2">
        {nombre} {apellido}
      </td>
      <td className="border px-4 py-2"> {empresa}</td>
      <td className="border px-4 py-2"> {email}</td>
      <td className="border px-4 py-2">
        <div className="flex justify-center">
          <button
            type="button"
            className="flex justify-center items-center bg-blue-800 text-white rounded shadow-box px-4 py-2"
            onClick={() => editarCliente(id)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              ></path>
            </svg>
          </button>

          <button
            type="button"
            className="flex justify-center items-center bg-red-800 text-white rounded shadow-box  px-4 py-2 ml-5"
            onClick={() => confirmarEliminarCliente()}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Cliente;
