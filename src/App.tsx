import { babyNames } from "./babyName";
import AddNameButton from "./components/AddNameButton";
import "./styles.css";
import SearchBar from "./components/SearchBar";

function App(): JSX.Element {
  return (
    <>
      <h1> Welcome to baby name picker!</h1>
      <hr />
      <div>
        <SearchBar />
      </div>
      <div className="button-container">
        {babyNames
          .sort((a, b) =>
            a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
          )
          .map((b) => (
            <AddNameButton baby={b} key={b.id} />
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

export type Baby = {
  baby: BabyData;
};
