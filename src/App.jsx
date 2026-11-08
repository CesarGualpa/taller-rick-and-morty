import { useEffect, useState } from "react";

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
    <div>
      <h1>Personajes de Rick and Morty</h1>

      {personajes.map((personaje) => {
        return (
          <p key={personaje.id}>
            {personaje.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;