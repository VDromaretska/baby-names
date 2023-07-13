import { babyNames } from "./babyName";
import AddNameButton from "./components/AddNameButton";
import "./styles.css";
import { useState } from "react"


function App(): JSX.Element {
  const [text, setText] = useState("");

  return (
    <>
      <h1> Welcome to baby name picker!</h1>
      <hr />
      <div>
      <input value={text} onChange={(e)=>setText(e.target.value)}
      type="text" placeholder="Search for names.." />
      </div>
      {(text==="") &&
      <div className="button-container">
        {babyNames
          .sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .map((b) => (
            <AddNameButton baby={b} key={b.id} />
          ))}
      </div >}
      {(text.length>0)&&
        <div className="button-container">
        {babyNames
        .filter(n => n.name.toLowerCase().includes(text.toLowerCase())).map((b)=> (<AddNameButton baby={b} key = {b.id} />))}
        </div>
        }
    </>
  );
}

export default App;

export type BabyData = {
  id: number;
  name: string;
  sex: string;
};

export type Baby = {
  baby: BabyData;
};
