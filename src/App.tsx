import { babyNames } from "./babyName";
import "./styles.css";
import { useState } from "react";


function App(): JSX.Element {
  const [text, setText] = useState("");
  const [fav, setFav] = useState<BabyData[]>([]);
  function buttonClass(b:BabyData): string{
    return b.sex === "f" ? "girl-button" : "boy-button";}
  
 
  const handleClick = (b:BabyData) => {
  setFav(prev => [...prev,b])
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
        { fav.length===0 &&
        <h2>Add name to favourites by clicking on it</h2>
        }
        
        {fav && 
        <div>
          <h2>Favorites</h2>{fav.map((b)=> (
              <button className={buttonClass(b)} key={b.id}>{b.name}</button>
            ))}

        </div>}
            
      </div>
      <div className="button-container">
        {
        babyNames.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .filter((n) => n.name.toLowerCase().includes(text.toLowerCase()))
          .filter((n) => !fav.includes(n))
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
