import React, { useEffect } from "react";
import Layout from "../components/layout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { gql, useQuery } from "@apollo/client";

const MEJORES_VENDEDORES = gql`
  query mejoresVendedores {
    mejoresVendedores {
      vendedor {
        nombre
        email
      }
      total
    }
  }
`;

const MejoresVendedores = () => {
  const { data, loading, error, startPolling, stopPolling } = useQuery(
    MEJORES_VENDEDORES
  );

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling]);

  if (loading) return "cargando...";

  console.log(data);

  const { mejoresVendedores } = data;
  const vendedorGrafica = [];

  mejoresVendedores.map((vendedor, index) => {
    vendedorGrafica[index] = {
      ...vendedor.vendedor[0],
      total: vendedor.total,
    };
  });

  console.log("hola:", vendedorGrafica);

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Mejores Vendedores</h1>
      <table>
        <thead className="bg-gray-800">
          <tr className="text-white">
            <th className="w-1/5 py-2">Nombre</th>
            <th className="w-1/5 py-2">Total</th>
          </tr>
        </thead>

        {data.mejoresVendedores.map((cliente) => (
          <tbody>
            <tr>
              <td>
                {cliente.vendedor.map((vendedores) => (
                  <td>{vendedores.nombre}</td>
                ))}
              </td>
              <td>{cliente.total}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <ResponsiveContainer width={"99%"} height={550}>
        <BarChart
          className="mt-10"
          width={600}
          height={500}
          data={vendedorGrafica}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </Layout>
  );
};

export default MejoresVendedores;
