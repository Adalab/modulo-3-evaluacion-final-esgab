import { Link } from "react-router-dom";

function CharacterDetail() {

  return (
    <div className="detail">
      <Link to={"/"}>
        <button className="detail__return">&#8656; Volver</button>
      </Link>
      <div className="detail__character">
        <article className="detail__article characterinfo">
          <div className="characterinfo__image-container">
            <img
              className="characterinfo___image"
              src=""
              alt=""
            />
          </div>
          <div className="characterinfo__data">
            <h3 className="characterinfo__name">Hermione Granger</h3>
            <p><bold>Estatus:</bold> Viva</p>
            <p><bold>Especie:</bold> Humana <ins>Icono</ins></p>
            <p><bold>Género:</bold> Mujer<ins>Icono</ins></p>
            <p><bold>Casa:</bold> Gryffindor</p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default CharacterDetail;
