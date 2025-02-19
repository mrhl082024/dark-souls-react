import magicData from "../data/magic.json";
import "../styles/SorceryList.css";

// console.log(magicData[0].sorcery);
// Object.keys(magicData[0].sorcery).map((key) =>
//   console.log(magicData[0].sorcery[key])
// );

const SorceryList = () => {
  //JS code goes here--

  return (
    //HTML code goes here--

    <>
      {magicData.sorcery.map((spell, i) => (
        <div key={i} id="card">
          <p> {spell.name} </p>
          <div id="img-container">
            <img id="img" src={spell.img} alt="Picture of a sorcery spell." />
          </div>
        </div>
      ))}
    </>
  );
};
export default SorceryList;
