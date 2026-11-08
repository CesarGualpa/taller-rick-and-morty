import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard";

function App() {

  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const obtenerPersonajes = async () => {

      try {

        setCargando(true);

        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );

        if (!response.ok) {
          throw new Error(
            "Error HTTP: " + response.status
          );
        }

        const datos = await response.json();

        setPersonajes(datos.results);

      } catch (error) {

        setError(error.message);

      } finally {

        setCargando(false);

      }

    };

    obtenerPersonajes();

  }, []);


  if (cargando) {

    return (
      <div className="mensaje">
        <h2>Cargando personajes...</h2>
      </div>
    );

  }


  if (error) {

    return (
      <div className="mensaje error">
        <h2>Error al cargar los personajes</h2>
        <p>{error}</p>
      </div>
    );

  }


  return (
    <main className="contenedor">

      <header className="encabezado">

        <h1>Rick and Morty</h1>

        <p>
          Personajes obtenidos desde una API REST pública
        </p>

      </header>


      <section className="personajes-grid">

        {personajes.map((personaje) => {

          return (
            <PersonajeCard
              key={personaje.id}
              personaje={personaje}
            />
          );

        })}

      </section>

    </main>
  );
}

export default App;