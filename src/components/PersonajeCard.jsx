function PersonajeCard(props) {

  const { personaje } = props;

  return (
    <article className="personaje-card">

      <img
        className="personaje-imagen"
        src={personaje.image}
        alt={personaje.name}
      />

      <div className="personaje-info">

        <h2>{personaje.name}</h2>

        <p>
          <strong>Especie:</strong> {personaje.species}
        </p>

        <p>
          <strong>Estado:</strong> {personaje.status}
        </p>

        <p>
          <strong>Género:</strong> {personaje.gender}
        </p>

        <p>
          <strong>Origen:</strong> {personaje.origin.name}
        </p>

      </div>

    </article>
  );
}

export default PersonajeCard;