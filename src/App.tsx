import { babyNames } from "./babyName";
import "./styles.css";
import { useState } from "react";


function App(): JSX.Element {
  const [text, setText] = useState("");
  const [fav, setFav] = useState<BabyData[]>([]);
  const [gender, setGender] = useState<string>("n");
  function buttonClass(b:BabyData): string{
    return b.sex === "f" ? "girl-button" : "boy-button";}
  
 
  const handleAddtoFav = (b:BabyData) => {
  setFav(prev => [...prev,b])
}
const handleDelete = (b:BabyData)=>{
  setFav(prev => [...prev].filter(f=>!(f===b)))
}

const handleFilterBoy =() => setGender("m");
const handleFilterGirl =() => setGender("f");
const handleFilterNeutral =() => setGender("n");
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
        <button className = {"boy-button"} onClick={handleFilterBoy}>Boy 👨</button>
        <button className = {"girl-button"}onClick={handleFilterGirl}>Girl 👧</button>
        <button onClick={handleFilterNeutral}>👨 Both 👧</button>
      </div>
      <div className="button-container">
        <div>
        { fav.length===0 &&
        <h2>Add name to favourites by clicking on it</h2>
        }
        </div>
        {fav.length>0 && 
        <div>
          <h2>Favorites</h2>{fav.map((b)=> (
              <button className={buttonClass(b)} key={b.id} onClick={()=>handleDelete(b)}>{b.name}</button>
            ))}

        </div>}
            
      </div>
      <div className="button-container">
        {gender==="n" &&
        babyNames.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .filter((n) => n.name.toLowerCase().includes(text.toLowerCase()))
          .filter((n) => !fav.includes(n))
          .map((b) => (
            <button className={buttonClass(b)} onClick={()=>handleAddtoFav(b)} key={b.id}>{b.name}</button>
          ))}
          {gender==="f" &&
        babyNames.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .filter((n) => n.name.toLowerCase().includes(text.toLowerCase()))
          .filter((n) => !fav.includes(n))
          .filter((n) => n.sex==="f")
          .map((b) => (
            <button className={buttonClass(b)} onClick={()=>handleAddtoFav(b)} key={b.id}>{b.name}</button>
          ))}
          {gender==="m" &&
        babyNames.sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .filter((n) => n.name.toLowerCase().includes(text.toLowerCase()))
          .filter((n) => !fav.includes(n))
          .filter((n) => n.sex==="m")
          .map((b) => (
            <button className={buttonClass(b)} onClick={()=>handleAddtoFav(b)} key={b.id}>{b.name}</button>
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
