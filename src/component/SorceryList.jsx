import magicData from "../data/magic.json";
import "../styles/SorceryList.css";

const SorceryList = () => {
  //JS code goes here--

  return (
    //HTML code goes here--
    <>
      {magicData.sorcery.map((spell, i) => (
        <div key={i} id="card">
          <h2> {spell.name} </h2>
          <div id="img-container">
            <img id="img" src={spell.img} alt="Picture of a sorcery spell." />
          </div>
          <p id="description">{spell.description} </p>
          <ul id="stat-table">
            <li id="fp">FP cost: {spell.fp} </li>
            <li id="slots">Slots: {spell.slots} </li>
            <li id="intelligence">Int req: {spell.intelligence} </li>
            <li id="faith">Fth req: {spell.faith} </li>
          </ul>
        </div>
      ))}
    </>
  );
};
export default SorceryList;
