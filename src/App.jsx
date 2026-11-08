import { useEffect, useState } from "react";
import PersonajeCard from "./components/PersonajeCard";

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {

    const obtenerPersonajes = async () => {

      const response = await fetch(
        "https://rickandmortyapi.com/api/character"
      );

      const datos = await response.json();

      setPersonajes(datos.results);
    };

    obtenerPersonajes();

  }, []);

  return (
    <main className="contenedor">

      <h1>Personajes de Rick and Morty</h1>

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