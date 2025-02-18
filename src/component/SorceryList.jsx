import "../styles/SorceryList.css";
import magicData from "../data/magic.js";
const sorceryData = magicData[0].Magic.Sorcery
// console.log(sorceryData);

const SorceryList = () => {

    const card = document.querySelector("#sorcerylist-card")
    

    for (let i = 0; i < sorceryData.length; i++) {
        
        const img = document.createElement("img")
        img.src = sorceryData[i].Img       
        const imgContainer = document.createElement("div") 
        imgContainer.appendChild(img)

        const description = document.createElement("p")
        description.textContent = sorceryData[i].Description

        card.appendChild(description)
    }

  return (
    <>
      <div id="sorcerylist-card">

      </div>
    </>
  );
};
export default SorceryList;
