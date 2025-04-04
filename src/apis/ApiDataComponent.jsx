import React, { useEffect, useState } from "react";
import Productos from "../componentes/prueba";

const ApiDataComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:8087/api/productos");
        if (!res.ok) throw new Error("Error al obtener datos de la API");
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <Productos data={data} /> 
  );
};

export default ApiDataComponent;
