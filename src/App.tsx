import { babyNames } from "./babyName";
import "./styles.css";
import { useState } from "react";


function App(): JSX.Element {
  const [text, setText] = useState("");
  function buttonClass(b:BabyData): string{
    return b.sex === "f" ? "girl-button" : "boy-button";}
  const [clicked, setClicked] = useState(false);
  let favouritesNames : BabyData[]=[];
  
  const handleClick = (b:BabyData) => {
  setClicked(true);
favouritesNames.push(b);
}

  return (
    <>
      <h1> Welcome to baby name picker!</h1>
      <hr />
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search for names.."
        />
      </div>
      <div className="button-container">
        <hr />
        {clicked ===true && 
            favouritesNames?.map((b)=> (
              <button className={buttonClass(b)} key={b.id}>{b.name}</button>
            ))}
      </div>
      <div className="button-container">
        {clicked ===false && 
        babyNames.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .filter((n) => n.name.toLowerCase().includes(text.toLowerCase()))
          .map((b) => (
            <button className={buttonClass(b)} onClick={()=>handleClick(b)} key={b.id}>{b.name}</button>
          ))}
      </div>
    </>
  );
}

export default App;

export type BabyData = {
  id: number;
  name: string;
  sex: string;
};
