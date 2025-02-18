import "../styles/SorceryList.css";
import magicData from "../data/magic.js";

const SorceryList = () => {
  const sorceryData = magicData[0].Magic.Sorcery;
  const keys = Object.keys(sorceryData);

  return (
    <div id="sorcerylist-card">
      {keys.map((item, i) => {
        console.log(sorceryData[item]);
        return (
          <div id="card" key={i}>
            <h2 id="img-header">{sorceryData[item].name} </h2>
            <img id="img" src={sorceryData[item].Img} />
            <h2 id="desc-header">Description</h2>
            <p id="description">{sorceryData[item].Description}</p>
            <h2 id="stats">Stats</h2>
            <ul id="stat-table">
              <li id="fp">FP cost: {sorceryData[item].FP} </li>
              <li id="slots">Spell slots: {sorceryData[item].Slots} </li>
              <li id="intelligence">Int req: {sorceryData[item].Intelligence} </li>
              <li id="faith">Faith req: {sorceryData[item].Faith} </li>
            </ul>
            <h2 id="acquired-header">Acquired</h2>
            <p id="acquired">{sorceryData[item].Acquired} </p>
          </div>
        );
      })}
    </div>
  );
};
export default SorceryList;
