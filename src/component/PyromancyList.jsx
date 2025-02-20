import magicData from "../data/magic.json";
import "../styles/MagicList.css";

const SorceryList = () => {
  //JS code goes here--

  return (
    //HTML code goes here--
    <>
      {magicData.pyromancy.map((spell, i) => (
        <div key={i} id="magic-card">
          <section id="name-img-container">
            <h2 id="name"> {spell.name} </h2>
            <div id="img-container">
              <img
                id="img"
                src={spell.img}
                alt="Picture of a Pyromancy spell."
              />
            </div>
          </section>
          <section id="description-container">
            <h2 id="description-title">Description</h2>
            <p id="description">{spell.description} </p>
          </section>
          <section id="stats-container">
            <h2 id="stats-title">Stats</h2>
            <ul id="stats-table">
              <li id="fp">FP cost: {spell.fp} </li>
              <li id="slots">Slots: {spell.slots} </li>
              <li id="intelligence">Int req: {spell.intelligence} </li>
              <li id="faith">Fth req: {spell.faith} </li>
            </ul>
          </section>
        </div>
      ))}
    </>
  );
};
export default SorceryList;
